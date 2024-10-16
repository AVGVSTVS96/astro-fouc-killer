import tailwind from "@astrojs/tailwind";
import { createResolver } from "astro-integration-kit";
import { hmrIntegration } from "astro-integration-kit/dev";
import { defineConfig } from "astro/config";

import astroFoucKiller from "astro-fouc-killer";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    astroFoucKiller({
      localStorageKey: "theme-test",
      includeStorageListener: true,
    }),
    hmrIntegration({
      directory: createResolver(import.meta.url).resolve("../package/dist"),
    }),
  ],
});
