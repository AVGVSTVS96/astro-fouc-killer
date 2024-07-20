import { defineIntegration, addVirtualImports, createResolver } from "astro-integration-kit";
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
          const { resolve } = createResolver(import.meta.url);

          addVirtualImports(params, {
            name,
            imports: {
              "virtual:astro-fouc-killer/config": `
                export const localStorageKey = ${JSON.stringify(
                  options?.localStorageKey ?? "themeToggle"
                )};
              `,
            },
          });

          injectScript(
            "page",
            `import "${resolve("./foucKillerScript")}";`
          );
        },
      },
    };
  },
});
