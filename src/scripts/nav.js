const navToggle = document.querySelector(".nav__toggle");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", `${!isExpanded}`);
  });
}
