const form = document.querySelector("form");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const staffId = document.querySelector('[name="staff_id"]').value.trim();
    const password = document.querySelector('[name="staff_password"]').value;

    try {
        const result = await staffLogin(staffId, password);
        console.log("API Response received:", result);

        if (result.message) {
            alert(result.message); // Shows "Staff login successful"
            
            // 1. Save the staff ID in browser storage so other pages know who is logged in
            localStorage.setItem("staff_id", result.staff_id || staffId);
            
            // 2. Redirect to the staff dashboard page
            window.location.href = "dashboard.html"; // Make sure to create this file next!
            
        } else if (result.error) {
            alert(result.error); // Shows "Invalid staff ID or password"
        } else {
            alert("Invalid Staff ID or Password");
        }
    }  catch (error) {
    console.error("Full error details:", error);
    alert("Error: " + error.message); // <-- This will show the exact reason on your screen
}
});