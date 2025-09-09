import "../styles/portfolio.css";
import placeholderImg from "../assets/images/placeholder_screenshot.png";
import weatherApplicationImg from "../assets/images/weather-application_screenshot.png";

export function makePortfolio(element) {
  element.innerHTML = `
    <div class="container">
        <h2>Portfolio</h2>
        <div class="card-container">
            ${makeProjectCard(
              weatherApplicationImg,
              "weather application screenshot",
              "Weather Now",
              "Weather application using the Open-Meteo API."
            )}
            ${makeProjectCard(
              placeholderImg,
              "project screenshot",
              "Project Title",
              "Project description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, tempora."
            )}
            ${makeProjectCard(
              placeholderImg,
              "project screenshot",
              "Project Title",
              "Project description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, tempora."
            )}
        </div>
    </div>
   `;
}

function makeProjectCard(imgUrl, imgAltText, title, description) {
  return `<div class="project-card">
            <div class="project-screenshot">
                <img src="${imgUrl}" alt="${imgAltText}">
            </div>
            <div class="content">    
                <h3 class="project-title">${title}</h3>
                <p class="project-description">${description}</p>
            </div>
            <a href="https://jkaps9.github.io/weather-application/" target="_blank" class="project-link"></a>
        </div>`;
}
