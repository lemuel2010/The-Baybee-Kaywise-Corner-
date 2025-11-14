// Button click message
const btn = document.getElementById("btn");
if (btn) {
    btn.addEventListener("click", () => {
        document.getElementById("msg").textContent =
            "You clicked the button! 🚀";
    });
}

// Theme toggle
const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.textContent = "🌞";
    } else {
        themeBtn.textContent = "🌙";
    }
});
// CONTACT FORM VALIDATION
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // stop form from refreshing the page

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const msgBox = document.getElementById("formMsg");

        if (name === "" || email === "" || message === "") {
            msgBox.textContent = "Please fill out all fields 😭";
            msgBox.style.color = "red";
            return;
        }

        msgBox.textContent = "Message sent successfully! 🚀";
        msgBox.style.color = "lightgreen";

        // Clear fields
        form.reset();
    });
}
// GALLERY MODAL
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("closeModal");

const galleryImages = document.querySelectorAll(".gallery-img");

galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

if (closeModal) {
    closeModal.onclick = () => {
        modal.style.display = "none";
    };
}

window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};
