import { localStorageKey } from "virtual:astro-fouc-killer/config";

window.addEventListener("storage", () => {
  const isDark = localStorage.getItem(localStorageKey) === "dark";
  document.documentElement.classList.toggle("dark", isDark);
});
