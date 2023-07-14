// Variables
const toggleButton = document.querySelector("#toggleButton");
const navbar = document.querySelector(".navbar")
const navItems = document.querySelectorAll(".navbar ul li")
const preLoader = document.querySelector(".preloader");

const lightBg = document.querySelectorAll("#hero, #services, #reviews, #projects, #about, #collaborate");

const semiLightBg = document.querySelectorAll("hero, .card-body, #contact, #about .about-box");

const blackText = document.querySelectorAll(".toggleIcon, .section-title, #services h1, #services h2, #projects h1, #projects .project-card .card-title, .tech-stack-text, .about-project-title, .number, #contact a h1, .quick-links a, .social-icons a");

const paragraphs = document.querySelectorAll("#services p, #projects .project-card .card-text, .about-text, #contact p")


// Dark and Light Mode

lightBg.forEach((mainBG) => {
    toggleButton.addEventListener("click", () => {
        if (toggleButton.checked) {
            mainBG.style.backgroundColor = "white";
        } else {
            mainBG.style.backgroundColor = "#212529";
        };
    });
});

semiLightBg.forEach((subBG) => {
    toggleButton.addEventListener("click", () => {
        if (toggleButton.checked) {
            subBG.style.backgroundColor = "#F8F9FA";
        } else {
            subBG.style.backgroundColor = "#1B1F22";
        };
    });
});

blackText.forEach((mainTXT) => {
    toggleButton.addEventListener("click", () => {
        if (toggleButton.checked) {
            mainTXT.style.color = "black";
        } else {
            mainTXT.style.color = "white";
        };
    });
});

paragraphs.forEach((subTXT) => {
    toggleButton.addEventListener("click", () => {
        if (toggleButton.checked) {
            subTXT.style.color = "#212D39";
        } else {
            subTXT.style.color = "#828E9D";
        };
    });
});

// Set header background color if scroll position is changed
document.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;
    if (scrollPosition > 150) {
        navbar.style.backgroundColor = "white";
    } else {
        navbar.style.background = "transparent";
    }
})

// Preloader
window.addEventListener("load", () => {
    preLoader.style.display = "none";
})