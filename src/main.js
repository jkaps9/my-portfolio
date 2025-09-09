import "./style.css";
import { setupHeader } from "./components/header.js";

document.querySelector("#app").innerHTML = `
<header id="header">
</header>
<main>
  <section id="hero">
    <div class="container">
      <h1>Welcome</h1>
    </div>
  </section>
</main>
`;

setupHeader(document.querySelector("#header"));
