import { defineIntegration } from "astro-integration-kit";
import { z } from "astro/zod";

export const astroFoucKiller = defineIntegration({
  name: "astro-fouc-killer",
  optionsSchema: z.object({
    localStorageKey: z.string().optional(),
  }),
  setup({ options }) {
    const localStorageKey = options?.localStorageKey ?? "themeToggle";

    return {
      hooks: {
        "astro:config:setup": ({ injectScript }) => {
          injectScript(
            "head-inline",
            `
            const preferredTheme =
              localStorage.getItem('${localStorageKey}') ||
              (window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light');
            document.documentElement.classList.toggle(
              'dark',
              preferredTheme === 'dark'
            );
            window.addEventListener('storage', () => {
              const isDark = localStorage.getItem('${localStorageKey}') === 'dark';
              document.documentElement.classList.toggle('dark', isDark);
            });
          `
          );
        },
      },
    };
  },
});
