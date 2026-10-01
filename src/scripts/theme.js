const getThemePreference = () => {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
};

const isDark = getThemePreference() === "dark";
if (isDark) {
  document.documentElement.setAttribute("data-theme", "dark");
}
