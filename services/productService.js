
import { httpGet, httpPost } from "../http/httpClient.js";

export function getProducts() {
    return httpGet("/products");
}

export function addProduct(product) {
    return httpPost("/products", product);
}
