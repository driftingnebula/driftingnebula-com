import {defineConfig} from "astro/config";

/** Create an absolute path from a given relative one. */
const toPath = (path: string) => new URL(path, import.meta.url).pathname;

export default defineConfig({
  outDir: toPath("./out/"),
  publicDir: toPath("./source/public"),
  srcDir: toPath("./source"),
  site: "https://driftingnebula.com",
});
