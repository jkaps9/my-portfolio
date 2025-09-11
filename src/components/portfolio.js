import "../styles/portfolio.css";
import placeholderImg from "../assets/images/placeholder_screenshot.png";
import weatherApplicationImg from "../assets/images/weather-application_screenshot.png";
import officeliteImg from "../assets/images/officelite_screenshot.png";
import equalizerImg from "../assets/images/equalizer_screenshot.png";

export function makePortfolio(element) {
  element.innerHTML = `
    <div class="container">
        <h2>Portfolio</h2>
        <div class="card-container">
            ${makeProjectCard(
              weatherApplicationImg,
              "weather application screenshot",
              "Weather Now",
              "Weather application using the Open-Meteo API",
              "https://jkaps9.github.io/weather-application/",
            )}
            ${makeProjectCard(
              officeliteImg,
              "officelite screenshot",
              "Officelite",
              "Website for an upcoming software release",
              "https://jkaps9.github.io/officelite-coming-soon/",
            )}
            ${makeProjectCard(
              equalizerImg,
              "equalizer screenshot",
              "Equalizer",
              "Landing page for a system audio equalizer mobile application.",
              "https://jkaps9.github.io/equalizer-landing-page/",
            )}
        </div>
    </div>
   `;
}

function makeProjectCard(imgUrl, imgAltText, title, description, projectUrl) {
  return `<div class="project-card">
            <div class="project-screenshot">
                <img src="${imgUrl}" alt="${imgAltText}">
            </div>
            <div class="content">    
                <h3 class="project-title">${title}</h3>
                <p class="project-description">${description}</p>
            </div>
            <a href="${projectUrl}" target="_blank" class="project-link"></a>
        </div>`;
}
