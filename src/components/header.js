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
