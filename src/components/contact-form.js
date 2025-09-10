import "../styles/contact-form.css";

export function makeContactForm(element) {
  element.innerHTML = `
   <div class="container">
      <h2>Contact Me</h2>
      <form id="contact-form" name="contact" method="POST" netlify>
        <div class="form-group">
          <label for="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            oninvalid="this.setCustomValidity('This field is required')"
            oninput="this.setCustomValidity('')"
            required
          />
          <div class="error-message">This field is required</div>
        </div>

        <div class="form-group">
          <label for="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            oninvalid="this.setCustomValidity('This field is required')"
            oninput="this.setCustomValidity('')"
            required
          />
          <div class="error-message">This field is required</div>
        </div>

        <div class="form-group span-all">
          <label for="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            oninvalid="this.setCustomValidity('Please enter a valid email address')"
            oninput="this.setCustomValidity('')"
            required
          />
          <div class="error-message">Please enter a valid email address</div>
        </div>

        <div class="form-group span-all">
          <label for="message">Message</label>
          <textarea
            name="message"
            id="message"
            oninvalid="this.setCustomValidity('This field is required')"
            oninput="this.setCustomValidity('')"
            required
          ></textarea>
          <div class="error-message">This field is required</div>
        </div>

        <div class="form-group span-all consent-row">
          <input type="checkbox" id="consent" name="consent" required />
          <label for="consent" class="consent-label">
          I consent to being contacted
          </label>
          <div class="error-message span-all">
            To submit this form, please consent to being contacted
          </div>
        </div>

        <input class="span-all" type="submit"></input>
        <input type="hidden" name="form-name" value="contact" />
      </form>
    </div>
      `;
}

export function setupContactForm() {
  const form = document.getElementById("contact-form");

  // Form submission handler
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const myFrom = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
  });
}
