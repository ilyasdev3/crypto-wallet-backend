import { authMiddleware } from "./middlewares/auth.middleware";
import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, "..", ".env") });

import cors from "cors";
import http from "http";
import bodyParser from "body-parser";
import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { graphqlUploadExpress } from "graphql-upload-minimal";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

import connectToDB from "./config/connectDB.config";
import { resolvers } from "./resolvers";
import { typeDefs } from "./types/typeDefs.generated";

const app = express();
const httpServer = http.createServer(app);

// Define allowed origins
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://studio.apollographql.com",
  "https://sandbox.apollo.dev",
];

const corsOptions = {
  origin: function (
    origin: string | undefined,
    callback: (err: Error | null, allow?: boolean) => void
  ) {
    // Allow requests with no origin (like Apollo Sandbox or Postman)
    if (!origin) {
      callback(null, true);
      return;
    }

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log("Blocked origin:", origin); // For debugging
      callback(null, false); // Don't throw error, just block the request
    }
  },
  credentials: true,
  methods: ["GET", "POST", "OPTIONS", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "apollo-require-preflight"],
};

// Apply CORS middleware to all routes
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
          async drainServer() {},
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
        context: async ({ req, res }) => {
          const token = req.headers.authorization;
          console.log("token", token);

          const { user, error } = await authMiddleware(token);
          return { user, error };
        },
      })
    );

    const PORT = process.env.PORT || 4000;
    httpServer.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}/graphql`);
    });
  } catch (error) {
    console.error("❌ Error starting the server:", error);
  }
}

startServer();
