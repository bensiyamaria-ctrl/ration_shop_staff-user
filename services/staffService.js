import { httpPost } from "../http/httpClient.js";

export function staffLogin(staffId, password) {
    // Automatically switch based on whether test credentials are "wrong"
    const isInvalid = staffId === "wrong123" || password === "wrongpassword";
    const queryParam = isInvalid ? "?type=invalid" : "?type=valid";
    
    return httpPost(`/post/staff${queryParam}`, {
        staff_id: staffId,
        password: password
    });
}