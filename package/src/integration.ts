import { defineIntegration } from "astro-integration-kit";

export const astroFoucKiller = defineIntegration({
  name: "astro-fouc-killer",
  setup() {
    return {
      hooks: {
        "astro:config:setup": (params) => {
          const { injectScript } = params;

          injectScript(
            "head-inline",
            `const preferredTheme =
              localStorage.getItem("themeToggle") ||
              (window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light');
              document.documentElement.classList.toggle(
                'dark',
                preferredTheme === 'dark'
              );
              window.addEventListener('storage', () => {
                const isDark = localStorage.getItem("themeToggle") === 'dark';
                document.documentElement.classList.toggle('dark', isDark);
              });
            `
          );
        },
      },
    };
  },
});
