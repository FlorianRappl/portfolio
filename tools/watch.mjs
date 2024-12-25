import { context } from "esbuild";

import { details, renderContent, copyAll } from "./common.mjs";

const root = process.cwd();
const ctx = await context({
  ...details,
  plugins: [
    {
      name: "portfolio-postbuild",
      setup(build) {
        build.onEnd(async () => {
          const [html, css] = await renderContent();
          const modifiedHtml = `${html}<script>new EventSource("/esbuild").addEventListener("change", () => location.reload());</script>`;
          await copyAll(root, modifiedHtml, css);
        });
      },
    },
  ],
});

await ctx.watch();

const { port } = await ctx.serve({
  servedir: "dist",
});

console.log(`Listening at http://localhost:${port} ...`);
