import esbuild from "esbuild";

esbuild
  .build({
    entryPoints: ["./src/index.ts"],
    outfile: "dist/index.js",
    bundle: true,
    minify: false,
    format: "esm",
    target: "esnext",
  })
  .catch(() => process.exit(1));
