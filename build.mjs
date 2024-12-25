import postcss from "postcss";
import tailwindcss from "tailwindcss";
import cssnano from "cssnano";
import { build } from "esbuild";
import { mkdir, writeFile, copyFile, rm } from "fs/promises";
import { basename, resolve } from "path";
import { createRequire } from "module";

const root = process.cwd();
const result = await build({
  entryPoints: ["src/index.tsx"],
  bundle: true,
  platform: "node",
  format: "cjs",
  outdir: "lib",
  outExtension: {
    ".js": ".cjs",
  },
  metafile: true,
  loader: {
    ".css": "text",
    ".png": "file",
    ".jpg": "file",
  },
});

const files = result.metafile.outputs;
const require = createRequire(import.meta.url);

const { render, cssContent } = require("./lib/index.cjs");

const index = {
  html: render(),
};

await rm(resolve(root, "dist"), {
  force: true,
  recursive: true,
});
await mkdir(resolve(root, "dist"), {
  recursive: true,
});

await Promise.all(
  Object.keys(files)
    .filter((path) => !path.endsWith(".cjs"))
    .map((path) => {
      const name = basename(path);
      const src = resolve(root, "lib", name);
      const dst = resolve(root, "dist", name);
      return copyFile(src, dst);
    })
);

const styles = await postcss([
  tailwindcss({
    content: [{ raw: index.html, extension: "html" }],
    theme: {
      extend: {
        fontFamily: {
          sans: ["var(--font-geist-sans)"],
          mono: ["var(--font-geist-mono)"],
        },
      },
    },
  }),
  cssnano({
    preset: "default",
  }),
]).process(cssContent, {
  from: undefined,
});

await Promise.all([
  copyFile(
    resolve(root, "src", "fonts", "Geist-Variable.woff2"),
    resolve(root, "dist", "Geist-Variable.woff2")
  ),
  writeFile(resolve(root, "dist", "index.html"), index.html, "utf8"),
  writeFile(resolve(root, "dist", "styles.css"), styles.css, "utf8"),
]);
