// Show navbar on scroll
window.addEventListener("scroll", function() {
    let navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-60px";
    }
});

// Scroll Reveal Effect
document.addEventListener("scroll", function() {
    let elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach(element => {
        let position = element.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
            element.style.opacity = "2";
            element.style.transform = "translateY(0)";
        }
    });
});
