// Dark / light mode

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "light") {
    setLightMode();
}

btn.addEventListener("click", function () {
    btn.classList.toggle("active");
    setTheme();
});

btn2.addEventListener("click", function () {
    btn2.classList.toggle("active");
    setTheme();
});

function setTheme() {
    const currentTheme = document.body.getAttribute("theme");

    if (currentTheme === "light") {
        setDarkMode();
    } else {
        setLightMode();
    }
}

function setDarkMode() {
    document.body.removeAttribute("theme");
    localStorage.setItem("theme", "dark");

    themeIcons.forEach((icon) => {
        icon.src = icon.getAttribute("src-dark");
    });
}

function setLightMode() {
    document.body.setAttribute("theme", "light");
    localStorage.setItem("theme", "light");

    themeIcons.forEach((icon) => {
        icon.src = icon.getAttribute("src-light");
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const sliderContainer = document.querySelector('.slider-container');
    const worksContainers = document.querySelector('.works-containers');

    sliderContainer.addEventListener('click', function () {
        worksContainers.scrollLeft += 450;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const sliderContainer = document.querySelector('.back-container');
    const worksContainers = document.querySelector('.works-containers');

    sliderContainer.addEventListener('click', function () {
        worksContainers.scrollLeft = 0;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const sliderContainer = document.querySelector('.slider-2');
    const worksContainers = document.querySelector('.works-2');

    sliderContainer.addEventListener('click', function () {
        worksContainers.scrollLeft -= 450;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const sliderContainer = document.querySelector('.back-2');
    const worksContainers = document.querySelector('.works-2');

    sliderContainer.addEventListener('click', function () {
        worksContainers.scrollLeft = 0;
    });
});

document.getElementById("dd-icon").addEventListener("click", function() {
    window.location.href = "#home";
});