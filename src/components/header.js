import "../styles/header.css";

export function setupHeader(element) {
  element.innerHTML = `
    <div class="container">
        <div class="logo">
          <p>Josh Kaplan</p>
        </div>
        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__item"><a href="#" class="nav__link">Home</a></li>
            <li class="nav__item"><a href="#" class="nav__link">About</a></li>
            <li class="nav__item"><a href="#" class="nav__link">Contact</a></li>
          </ul>
        </nav>
      </div>
      `;
}
