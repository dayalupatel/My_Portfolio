// ================= Navbar Active Toggler =====================
// Get item with class="nav-item"
var navItems = document.getElementsByClassName("nav-item");
for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
  });
}


// ================= Responsive Navbar =====================
const hamburger = document.querySelector(".hamburger");
const aside = document.querySelector(".aside");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    aside.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-item");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    aside.classList.remove("active");
}

// =================Toggle style switcher =====================
const styleSwitcherToggle = document.querySelector(".style-swithcher-toggler");
styleSwitcherToggle.addEventListener("click", ()=>{
    document.querySelector(".style-swithcher").classList.toggle("open");
})

// hide style switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-swithcher").classList.contains("open")) {
        document.querySelector(".style-swithcher").classList.remove("open");
    }
})


// ================= Theme Color Switch =====================
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    })
}



// ================= Theme light and dark mode =====================
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})


// ================== Typing Animation ===================================
var typed = new Typed(".typing", {
    strings:["","Software Engineer . . .","Web Designer . . .", "Software Developer . . ."],
    typeSpeed:100,
    backSpeed:40,
    loop:true
});