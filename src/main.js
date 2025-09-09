import "./style.css";
import { makeHeader } from "./components/header.js";
import {
  makeContactForm,
  setupContactForm,
} from "./components/contact-form.js";

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
  <section id="porfolio"></section>
  <section id="contact"></section>
</main>
`;

makeHeader(document.querySelector("#header"));
makeContactForm(document.querySelector("#contact"));
setupContactForm();
