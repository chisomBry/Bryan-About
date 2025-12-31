// Simple JavaScript for contact button
document.addEventListener('DOMContentLoaded', function () {
    const contactBtn = document.getElementById('contactBtn');
    const emailDisplay = document.getElementById('emailDisplay');

    contactBtn.addEventListener('click', function () {
        emailDisplay.textContent = 'Email: bryan@example.com';
        contactBtn.style.display = 'none';
    });
});
