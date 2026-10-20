// 1. Fetch common head elements (stylesheets, fonts, etc.)
fetch("../shared-files/header.html")
    .then(response => response.text())
    .then(html => {
        document.head.insertAdjacentHTML("afterbegin", html);
    })
    .catch(error => console.error("Error loading common head:", error));

// 2. Existing Login Layout
class LoginLayout extends HTMLElement {
    constructor() {
        super();

        const content = document.createElement("div");
        content.className = "login-box";

        const style = document.createElement("style");
        style.textContent = `
            .login-box {
                padding: 20px;
                border-radius: 10px;
                max-width: 100%;
                box-sizing: border-box;
                text-align: center;
            }
                
            .login-box button {
                width: 100%;
                padding: 10px;
                background: #a78d78;
                color: #ffffff;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }

            .login-box button:hover {
                background: #D0C2B7;
            }
        `;

        while (this.firstChild) {
            content.appendChild(this.firstChild);
        }

        this.append(style, content);
    }
}

if (!customElements.get("login-layout")) {
    customElements.define("login-layout", LoginLayout);
}
