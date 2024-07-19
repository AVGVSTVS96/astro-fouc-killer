import tailwind from "@astrojs/tailwind";
import { createResolver } from "astro-integration-kit";
import { hmrIntegration } from "astro-integration-kit/dev";
import { defineConfig } from "astro/config";

import astroFoucKiller from "../package/dist/index.js";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    astroFoucKiller(),
    hmrIntegration({
      directory: createResolver(import.meta.url).resolve("../package/dist"),
    }),
  ],
});
