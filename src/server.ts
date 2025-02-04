// server.ts
import { authMiddleware } from "./middlewares/auth.middleware";
import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, "..", ".env") });

import cors from "cors";
import http from "http";
import bodyParser from "body-parser";
import express from "express";
import { Server } from "socket.io";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { makeExecutableSchema } from "@graphql-tools/schema";

import { graphqlUploadExpress } from "graphql-upload-minimal";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

import connectToDB from "./config/connectDB.config";
import { resolvers } from "./resolvers";
import { typeDefs } from "./types/typeDefs.generated";
import { initializeSocketIO } from "./services/transactionMonitor.service";
import { cleanupAllMonitoring } from "./services/transactionMonitor.service";

const app = express();
const httpServer = http.createServer(app);

// Define allowed origins
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://studio.apollographql.com",
  "https://sandbox.apollo.dev",
  "https://crypto-wallet-web-fawn.vercel.app",
  "https://crypto-wallet-backend-weld.vercel.app",
];

const corsOptions = {
  origin: function (
    origin: string | undefined,
    callback: (err: Error | null, allow?: boolean) => void
  ) {
    if (!origin) {
      callback(null, true);
      return;
    }

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log("Blocked origin:", origin);
      callback(null, false);
    }
  },
  credentials: true,
  methods: ["GET", "POST", "OPTIONS", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "apollo-require-preflight"],
};

// Initialize Socket.IO with CORS configuration
const io = new Server(httpServer, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

initializeSocketIO(io);

// Socket connection handling
io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  // Handle joining user-specific room
  socket.on("joinUser", (userId: string) => {
    if (userId) {
      socket.join(`user:${userId}`);
      console.log(`User ${userId} joined their room`);
    }
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

// Apply CORS middleware to Express
app.use(cors(corsOptions));

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: resolvers,
});

const server = new ApolloServer({
  schema,
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    {
      async serverWillStart() {
        return {
          async drainServer() {
            // Cleanup monitoring tasks on server shutdown
            cleanupAllMonitoring();
          },
        };
      },
    },
  ],
});

async function startServer() {
  try {
    await connectToDB();
    await server.start();

    app.use(
      "/graphql",
      graphqlUploadExpress({ maxFileSize: 1000000000, maxFiles: 1 }),
      bodyParser.json({ limit: "50mb" }),
      expressMiddleware(server, {
        context: async ({ req }) => {
          const token = req.headers.authorization;
          const { user, error } = await authMiddleware(token);
          return { user, error };
        },
      })
    );

    const PORT = process.env.PORT || 4000;

    // Error handling for the HTTP server
    httpServer.on("error", (error) => {
      console.error("Server error:", error);
    });

    // Graceful shutdown handling
    process.on("SIGTERM", () => {
      console.log("SIGTERM received. Starting graceful shutdown...");
      cleanupAllMonitoring();
      httpServer.close(() => {
        console.log("Server closed");
        process.exit(0);
      });
    });

    httpServer.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}/graphql`);
      console.log(`🔌 WebSocket server is ready`);
    });
  } catch (error) {
    console.error("❌ Error starting the server:", error);
    process.exit(1);
  }
}

startServer().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
