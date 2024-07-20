import { defineIntegration, createResolver, addVirtualImports } from "astro-integration-kit";
import { z } from "astro/zod";

export const astroFoucKiller = defineIntegration({
  name: "astro-fouc-killer",
  optionsSchema: z
    .object({
      localStorageKey: z.string(),
    })
    .optional(),
  setup({ name, options }) {
    return {
      hooks: {
        "astro:config:setup": (params) => {
          const { injectScript } = params;
          const { resolve } = createResolver(import.meta.url)
          const localStorageKey = options?.localStorageKey ?? "themeToggle";

          addVirtualImports(params, {
            name,
            imports: {
              "virtual:astro-fouc-killer/config": `
                export const localStorageKey = ${JSON.stringify(
                  localStorageKey
                )};
              `,
            },
          });

          injectScript(
            "head-inline",
            `(function() {
              var key = '${localStorageKey}';
              var preferredTheme = localStorage.getItem(key) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
              document.documentElement.classList.toggle('dark', preferredTheme === 'dark');
            })();`
          );

          injectScript("page", `import "${resolve("./foucKillerScript")}";`);
        },
      },
    };
  },
});
