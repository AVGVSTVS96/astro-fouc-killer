import {
  addVirtualImports,
  createResolver,
  defineIntegration,
} from "astro-integration-kit";
import { z } from "astro/zod";

export const astroFoucKiller = defineIntegration({
  name: "astro-fouc-killer",
  optionsSchema: z
    .object({
      localStorageKey: z.string().default("themeToggle"),
      includeStorageListener: z.boolean().default(false),
    })
    .default({}),
  setup({ name, options }) {
    return {
      hooks: {
        "astro:config:setup": (params) => {
          const { injectScript, logger } = params;
          const { resolve } = createResolver(import.meta.url);
          const { localStorageKey, includeStorageListener } = options;

          addVirtualImports(params, {
            name,
            imports: {
              "virtual:astro-fouc-killer/config": `
                export const localStorageKey = ${JSON.stringify(localStorageKey)};
              `,
            },
          });

          injectScript(
            "head-inline",
            `(function() {
              var key = ${JSON.stringify(localStorageKey)};
              var preferredTheme = localStorage.getItem(key) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
              document.documentElement.classList.toggle('dark', preferredTheme === 'dark');
            })();`
          );
          logger.info("Injected fouc killer script");

          if (includeStorageListener) {
            injectScript("page", `import "${resolve("./storageListener")}";`);
            logger.info("Injected local storage listener");
          }
        },
      },
    };
  },
});
