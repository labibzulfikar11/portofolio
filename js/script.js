
// NAVBAR BERUBAH SAAT SCROLL

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }
});

// NAVBAR OTOMATIS MENUTUP DI HP

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const menu = document.getElementById("menu");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (menu.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
    });
});

// ANIMASI KARTU SAAT MUNCUL
const cards = document.querySelectorAll(".interest-card, .about-box, .skills-box");

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

cards.forEach(function (card) {
    card.classList.add("reveal");
    observer.observe(card);
});
