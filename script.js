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

    document.querySelector('meta[name="theme-color"]').setAttribute("content", "#00140F");
    themeIcons.forEach((icon) => {
        icon.src = icon.getAttribute("src-dark");
    });
}

function setLightMode() {
    document.body.setAttribute("theme", "light");
    localStorage.setItem("theme", "light");

    document.querySelector('meta[name="theme-color"]').setAttribute("content", "#F0F1F2");
    themeIcons.forEach((icon) => {
        icon.src = icon.getAttribute("src-light");
    });
}

document.getElementById("dd-icon").addEventListener("click", function() {
    window.location.href = "#home";
});

document.addEventListener('DOMContentLoaded', function () {
    // Fetch projects.json and populate the projects container
    fetch('data/projects.json')
        .then(response => response.json())
        .then(data => {
            const worksContainer = document.getElementById('projects');

            data.forEach(item => {
                const container = document.createElement('div');
                container.classList.add('works-container');
                container.classList.add('fade-in');

                container.innerHTML = `
                    <p class="exp-text-p1 font-bold">${item.title}</p>
                    <p class="exp-text-p1 text-xsmall">${item.type}</p>
                    <p class="exp-text-p1 text-xsmall">${item.date}</p>
                    <p class="exp-text-p1 text-small">${item.description}</p>
                     <p class="exp-text-p1 text-xsmall text-italic">${item.tools}</p>
                    <div class="custom-row-pr">
                        <div>
                        <p class="works-progress-text-p1">${item.progress}</p>
                        <div class="custom-row-pr-2">
                            ${item.links.map(link => `
                                <a href="${link.url}" target="_blank" class="container-icon container-icon-p1">
                                   <img src="${link.icon}" alt="${link.alt}" class="icon-link-works">
                                </a>
                            `).join('')}
                        </div>
                        </div>
                        <div class="work-mini-img-box">
                            <img class="work-mini-img" src="${item.image}" alt="work mini image">
                            <div class="work-mini-img-back"></div>
                        </div>
                    </div>
                `;
                worksContainer.appendChild(container);
            });
        })
        .catch(error => console.error('Veri alınamadı:', error));

    document.addEventListener("scroll", function() {
        const fadeElements = document.querySelectorAll(".fade-in");

        fadeElements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (position < screenPosition) {
                element.classList.add("show");
            }
        });
    });
});