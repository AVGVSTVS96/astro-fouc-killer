import { defineIntegration, addVirtualImports } from "astro-integration-kit";
import { z } from "astro/zod";

export const astroFoucKiller = defineIntegration({
  name: "astro-fouc-killer",
  optionsSchema: z.object({
    localStorageKey: z.string().default("themeToggle"),
  }),
  setup({ name, options }) {
    return {
      hooks: {
        "astro:config:setup": (params) => {
          const { injectScript } = params;

          addVirtualImports(params, {
            name,
            imports: {
              "virtual:astro-fouc-killer/config": `
                export const localStorageKey = '${options.localStorageKey}';
              `,
              "virtual:astro-fouc-killer/script": `
                import { localStorageKey } from 'virtual:astro-fouc-killer/config';

                const preferredTheme =
                  localStorage.getItem(localStorageKey) ||
                  (window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? 'dark'
                    : 'light');
                document.documentElement.classList.toggle(
                  'dark',
                  preferredTheme === 'dark'
                );
                window.addEventListener('storage', () => {
                  const isDark = localStorage.getItem(localStorageKey) === 'dark';
                  document.documentElement.classList.toggle('dark', isDark);
                });
              `,
            },
          });

          injectScript(
            "head-inline",
            `import 'virtual:astro-fouc-killer/script'`
          );
        },
      },
    };
  },
});
