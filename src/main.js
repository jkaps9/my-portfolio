import "./style.css";
import { makeHeader } from "./components/header.js";
import { makeHero } from "./components/hero.js";
import {
  makeContactForm,
  setupContactForm,
} from "./components/contact-form.js";
import { makePortfolio } from "./components/portfolio.js";
import { makeFooter } from "./components/footer.js";

document.querySelector("#app").innerHTML = `
<header id="header">
</header>
<main>
  <section id="hero"></section>
  <section id="portfolio"></section>
  <section id="contact"></section>
</main>
<footer id="footer">
</footer
`;

makeHeader(document.querySelector("#header"));
makeHero(document.querySelector("#hero"));
makeContactForm(document.querySelector("#contact"));
setupContactForm();
makePortfolio(document.querySelector("#portfolio"));
makeFooter(document.querySelector("#footer"));
