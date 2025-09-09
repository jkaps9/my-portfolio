import "./style.css";
import { setupCounter } from "./counter.js";
import { setupHeader } from "./components/header.js";

document.querySelector("#app").innerHTML = `
<header id="header">
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
setupHeader(document.querySelector("#header"));
