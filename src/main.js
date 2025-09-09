import "./style.css";
import { setupHeader } from "./components/header.js";

document.querySelector("#app").innerHTML = `
<header id="header">
</header>
<main>
  <section id="hero">
    <div class="container">
      <h1>I craft digital experiences that captivate and convert</h1>
      <p>Web designer and developer creating beautiful, and thoughtful websites.</p>
      <a href="#portfolio">Explore portfolio</a>
    </div>
  </section>
</main>
`;

setupHeader(document.querySelector("#header"));
