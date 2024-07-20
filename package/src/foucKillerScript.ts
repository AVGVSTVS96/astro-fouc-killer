import { localStorageKey } from "virtual:astro-fouc-killer/config";

const preferredTheme =
  localStorage.getItem(localStorageKey) ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

document.documentElement.classList.toggle("dark", preferredTheme === "dark");

window.addEventListener("storage", () => {
  const isDark = localStorage.getItem(localStorageKey) === "dark";
  document.documentElement.classList.toggle("dark", isDark);
});
 