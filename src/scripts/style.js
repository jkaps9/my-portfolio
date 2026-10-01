const getThemePreference = () => {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  }
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
};

const isLight = getThemePreference() === "light";
if (isLight) {
  document.documentElement.setAttribute("data-theme", "light");
}
