class StaffAppLayout extends HTMLElement {
    constructor() {
        super();

        // Check if the page requested to hide the default header
        const hideHeader = this.hasAttribute("no-header");

        // Page Content Area
        const pageContent = document.createElement("div");
        pageContent.className = "page-content";

        while (this.firstChild) {
            pageContent.appendChild(this.firstChild);
        }

        // Bottom Navigation bar
        const nav = document.createElement("nav");
        nav.className = "bottom-nav";
        nav.innerHTML = `
            <a href="staffhomepage.html" class="nav-item ${window.location.pathname.includes('staffhomepage') ? 'active' : ''}">
                <i class="fa-solid fa-house"></i>
                <span>Home</span>
            </a>
            <a href="stock.html" class="nav-item ${window.location.pathname.includes('stock') ? 'active' : ''}">
                <i class="fa-solid fa-boxes-stacked"></i>
                <span>Stock</span>
            </a>
            <a href="distributions.html" class="nav-item ${window.location.pathname.includes('distributions') ? 'active' : ''}">
                <i class="fa-solid fa-clipboard-list"></i>
                <span>distributions</span>
            </a>
            <a href="profile.html" class="nav-item ${window.location.pathname.includes('profile') ? 'active' : ''}">
                <i class="fa-solid fa-user"></i>
                <span>Profile</span>
            </a>
        `;

        // Conditionally append elements based on whether hideHeader is true
        if (!hideHeader) {
            // Header
            const header = document.createElement("header");
            header.className = "app-header";
            header.innerHTML = `
                <div class="logo-icon">
                    <i class="fa-solid fa-store" style="color: #fff; font-size: 18px;"></i>
                </div>
                <div class="logo-text">
                    <h1>Ration Shop</h1>
                    <span>Management</span>
                </div>
            `;

            // Divider
            const hr = document.createElement("hr");
            hr.className = "divider";

            // Attach with header
            this.append(header, hr, pageContent, nav);
        } else {
            // Attach without header (for search page)
            this.append(pageContent, nav);
        }
    }
}

if (!customElements.get("staff-app-layout")) {
    customElements.define("staff-app-layout", StaffAppLayout);
}