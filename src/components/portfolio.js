import "../styles/portfolio.css";
import placeholderImg from "../assets/images/placeholder_screenshot.png";

export function makePortfolio(element) {
  element.innerHTML = `
    <div class="container">
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
        ${makeProjectCard(
          placeholderImg,
          "project screenshot",
          "Project Title",
          "Project description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, tempora."
        )}
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
        </div>`;
}
