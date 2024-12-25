import postcss from "postcss";
import tailwindcss from "tailwindcss";
import cssnano from "cssnano";
import { writeFile, copyFile } from "fs/promises";
import { resolve } from "path";
import { createRequire } from "module";

export const details = {
  entryPoints: ["src/index.tsx"],
  bundle: true,
  platform: "node",
  format: "cjs",
  outdir: "dist",
  outExtension: {
    ".js": ".cjs",
  },
  loader: {
    ".css": "text",
    ".png": "file",
    ".jpg": "file",
  },
};

export async function renderContent() {
  const require = createRequire(import.meta.url);
  const fullPath = require.resolve("../dist/index.cjs");
  delete require.cache[fullPath];
  const { render, cssContent } = require(fullPath);

  const index = {
    html: render(),
  };

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

  return [index.html, styles.css];
}

export async function copyAll(root, html, css) {
  await Promise.all([
    copyFile(
      resolve(root, "src", "fonts", "Geist-Variable.woff2"),
      resolve(root, "dist", "Geist-Variable.woff2")
    ),
    writeFile(resolve(root, "dist", "index.html"), html, "utf8"),
    writeFile(resolve(root, "dist", "styles.css"), css, "utf8"),
  ]);
}
