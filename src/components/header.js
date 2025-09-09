import "../styles/header.css";

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
          </ul>
        </nav>
      </div>
      `;
}
