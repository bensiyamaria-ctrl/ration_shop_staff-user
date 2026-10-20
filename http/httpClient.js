
const BASE_URL = "https://ba9e99fa-bab5-46ea-a65c-9bfa278757b8.mock.pstmn.io";

export async function httpRequest(endpoint, options = {}) {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options.headers
        }
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
        throw new Error(
            data?.error || `Request failed with status ${response.status}`
        );
    }

    return data;
}

export function httpGet(endpoint) {
    return httpRequest(endpoint);
}

export function httpPost(endpoint, body) {
    return httpRequest(endpoint, {
        method: "POST",
        body: JSON.stringify(body)
    });
}
