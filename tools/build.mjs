import { build } from "esbuild";
import { rm } from "fs/promises";
import { resolve } from "path";

import { details, renderContent, copyAll } from "./common.mjs";

const root = process.cwd();

await rm(resolve(root, "dist"), {
  force: true,
  recursive: true,
});

await build(details);

const [html, css] = await renderContent();

await copyAll(root, html, css);

await rm(resolve(root, "dist", "index.cjs"));
