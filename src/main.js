import "./style.css";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
<header>
      <div class="container">
        <div class="logo">
          <p>Josh Kaplan</p>
        </div>
        <nav class="nav">
          <ul class="nav__list nav__list--primary">
            <li class="nav__item"><a href="#" class="nav__link">Home</a></li>
            <li class="nav__item"><a href="#" class="nav__link">About</a></li>
            <li class="nav__item"><a href="#" class="nav__link">Contact</a></li>
          </ul>
          <ul class="nav__list nav__list--secondary">
            <li class="nav__item">
              <a href="#" class="nav__link">Sign In</a>
            </li>
            <li class="nav__item">
              <a href="#" class="nav__link nav__link--button">Sign up</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
<main>
<section class="hero">
            <div class="container">
    <h1>Welcome</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    </div>
    </section>
</main>
`;

setupCounter(document.querySelector("#counter"));
