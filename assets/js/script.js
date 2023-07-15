// Variables
const toggleButton = document.querySelector("#toggleButton");
const navbar = document.querySelector(".navbar");
const navItems = document.querySelectorAll(".navbar ul li")
const preLoader = document.querySelector(".preloader");
const largeNavItems = document.querySelectorAll(".large-nav");
const lightBg = document.querySelectorAll(".navbar, #hero, #services, #reviews, #projects, #about, #collaborate, .offcanvas");
const semiLightBg = document.querySelectorAll("hero, .card-body, #contact, #about .about-box");
const blackText = document.querySelectorAll(".toggleIcon, .section-title, .navbar .large-nav li a, .sub-nav li a, #services h1, #services h2, #projects h1, #projects .project-card .card-title, .tech-stack-text, .about-project-title, .collab-title, .number, #contact a h1, .quick-links a, .social-icons a, .btn-close");
const paragraphs = document.querySelectorAll("#services p, #projects .project-card .card-text, .about-text, #contact p");


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
// document.addEventListener("scroll", () => {
//     let scrollPosition = window.scrollY;
//     if (scrollPosition === 0) {
//         navbar.style.background = "transparent";
//     };
// });

// Preloader
window.addEventListener("load", () => {
    preLoader.style.display = "none";
});