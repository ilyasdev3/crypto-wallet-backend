const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["src/server.ts"], // Adjust the entry point as needed
    bundle: true,
    outfile: "dist/index.js",
    platform: "node",
    target: "node14", // Adjust the target Node.js version as needed
    external: [
      "mock-aws-s3",
      "aws-sdk",
      "nock",
      "./node_modules/@mapbox/node-pre-gyp/lib/util/nw-pre-gyp/index.html", // Exclude .html files
    ],
  })
  .catch(() => process.exit(1));

// const esbuild = require("esbuild");

// esbuild
//   .build({
//     entryPoints: ["src/server.ts"],
//     bundle: true,
//     outfile: "dist/index.js",
//     platform: "node",
//     sourcemap: true,
//     minify: true,
//     loader: {
//       ".tsx": "tsx",
//       ".ts": "ts",
//     },
//   })
//   .catch(() => process.exit(1));
