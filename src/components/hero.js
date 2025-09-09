import "../styles/hero.css";

export function makeHero(element) {
  element.innerHTML = `
    <div class="container">
      <h1 class="hero__title">I craft digital experiences that captivate and convert</h1>
      <p class="hero__content">I am a web developer creating beautiful and thoughtful websites. You work hard! I create websites that work hard for you so that you can focus on what you do best.</p>
      <a href="#portfolio" class="hero__link">Explore portfolio</a>
    </div>
    `;
}
