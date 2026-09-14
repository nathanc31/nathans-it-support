// Display the current year in the footer
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("year").textContent =
        new Date().getFullYear();
});

// Show or hide the contact form
function toggleForm() {
    const form = document.getElementById("supportForm");

    if (form.style.display === "block") {
        form.style.display = "none";
    } else {
        form.style.display = "block";
    }
}