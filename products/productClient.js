import { getProducts } from "../services/productService.js";

async function loadProducts() {
    const productList = document.getElementById("product-list");

    try {
        const products = await getProducts();

        productList.innerHTML = products.map(product => `
            <tr>
                <td>${product.product_id}</td>
                <td>${product.product_name}</td>
                <td>${product.available_quantity}</td>
            </tr>
        `).join("");
    } catch (error) {
        console.error("Error loading products:", error);
        productList.innerHTML = `
            <tr>
                <td colspan="3">Unable to load products.</td>
            </tr>
        `;
    }
}

loadProducts();