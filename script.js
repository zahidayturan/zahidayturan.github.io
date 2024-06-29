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

                container.innerHTML = `
                    <div class="exp-text-p1 font-bold text-start">${item.title}</div>
                    <div class="exp-text-p1 text-start text-padding">${item.description}</div>
                    <div class="custom-row-pr">
                        <div class="custom-row-pr-2">
                            ${item.links.map(link => `
                                <div class="container-icon container-icon-p1">
                                    <a href="${link.url}" target="_blank" class="icon-link-works">
                                        <img src="${link.icon}" alt="${link.alt}" class="icon-link-works">
                                    </a>
                                </div>
                            `).join('')}
                        </div>
                        <div class="works-progress-text-p1">${item.progress}</div>
                    </div>
                `;

                worksContainer.appendChild(container);
            });

            const backContainer = document.createElement('div');
            backContainer.classList.add('back-container');
            backContainer.innerHTML = `
                <img src="assets/back-icon.png" alt="Scroll to right icon" height="24">
            `;
            worksContainer.appendChild(backContainer);

            // Back button event listener
            backContainer.addEventListener('click', function () {
                worksContainer.scrollLeft = 0;
            });

            // Add mouse wheel scroll functionality
            addMouseWheelScroll(worksContainer);
        })
        .catch(error => console.error('Veri alınamadı:', error));

    // Fetch designs.json and populate the designs container
    fetch('data/designs.json')
        .then(response => response.json())
        .then(data => {
            const worksContainers = document.getElementById('designs');

            data.forEach(item => {
                const container = document.createElement('div');
                container.classList.add('works-container', 'works-container-for-left');

                container.innerHTML = `
                    <div class="exp-text-p1 font-bold text-end">${item.title}</div>
                    <div class="exp-text-p1 text-padding text-end">${item.description}</div>
                    <div class="custom-row-pr">
                        <div class="works-progress-text-p1">${item.progress}</div>
                        <div class="custom-row-pr-2">
                            <div class="container-icon container-icon-p1">
                                <a href="${item.link.url}" target="_blank" class="icon-link-works">
                                    <img src="${item.link.icon}" alt="${item.link.alt}" class="icon-link-works">
                                </a>
                            </div>
                        </div>
                    </div>
                `;

                worksContainers.appendChild(container);
            });

            const backContainer = document.createElement('div');
            backContainer.classList.add('back-container', 'back-2');
            backContainer.innerHTML = `
                <img src="assets/back-icon.png" alt="Scroll to right icon" class="rotate-180" height="24">
            `;
            worksContainers.appendChild(backContainer);

            // Back button event listener for designs
            backContainer.addEventListener('click', function () {
                worksContainers.scrollLeft = 0;
            });

            // Add mouse wheel scroll functionality
            addMouseWheelScroll(worksContainers,"left");
        })
        .catch(error => console.error('Veri alınamadı:', error));

    // Add mouse wheel scroll functionality to containers
    function addMouseWheelScroll(container, direction = 'right') {
        const scrollSpeed = 3;
        container.addEventListener('wheel', function (e) {
            e.preventDefault();
            if (direction === 'right') {
                container.scrollLeft += e.deltaY * scrollSpeed;
            } else if (direction === 'left') {
                container.scrollLeft -= e.deltaY * scrollSpeed;
            }
        });
    }
});