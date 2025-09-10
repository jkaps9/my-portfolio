import "../styles/header.css";
import lightModeImg from "../assets/images/light_mode.svg";
import darkModeImg from "../assets/images/dark_mode.svg";

export function makeHeader(element) {
  element.innerHTML = `
    <div class="container">
        <div class="logo">
          <p>Josh Kaplan</p>
        </div>
        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__item"><a href="#portfolio" class="nav__link">Portfolio</a></li>
            <li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li>
            <li class="nav__button"><button id="dark-mode-toggle"><img src="${darkModeImg}" alt="dark mode image"></button></li>
          </ul>
        </nav>
        
      </div>
      `;
}

export function setupHeader() {
  const darkModeToggleButton = document.querySelector("#dark-mode-toggle");
  const body = document.querySelector("body");
  darkModeToggleButton.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
      darkModeToggleButton.innerHTML = `<img src="${darkModeImg}" alt="dark mode image">`;
    } else {
      darkModeToggleButton.innerHTML = `<img src="${lightModeImg}" alt="dark mode image">`;
    }
    body.classList.toggle("dark");
  });
}
