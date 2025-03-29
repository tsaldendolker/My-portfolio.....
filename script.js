// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Simple fade-in effect for sections on scroll
    const sections = document.querySelectorAll(".section");
    const options = {
        threshold: 0.2
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0px)";
            }
        });
    }, options);
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(30px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(section);
    });
});// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Simple fade-in effect for sections on scroll
    const sections = document.querySelectorAll(".section");
    const options = {
        threshold: 0.2
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0px)";
            }
        });
    }, options);
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(30px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(section);
    });

    // Adding a hover effect to projects
    document.querySelectorAll(".project").forEach(project => {
        project.addEventListener("mouseover", () => {
            project.style.transform = "scale(1.05)";
            project.style.transition = "transform 0.3s ease-in-out";
        });
        project.addEventListener("mouseout", () => {
            project.style.transform = "scale(1)";
        });
    });

    // Animated typing effect for the header title
    const title = "Welcome to My Portfolio";
    let index = 0;
    function typeEffect() {
        if (index < title.length) {
            document.querySelector(".header-title").textContent += title.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    document.querySelector(".header-title").textContent = "";
    typeEffect();
});
