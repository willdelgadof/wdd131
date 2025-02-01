const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

function toggleMenu() {
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

const images = document.querySelectorAll(".gallery img");
const viewer = document.querySelector(".viewer");
const viewerImage = document.querySelector(".viewer img");
const closeViewer = document.querySelector(".close-viewer");

function openViewer(event) {
    const imageSrc = event.target.src; 
    viewerImage.src = imageSrc; 
    viewer.classList.remove("hide");
}

function closeImageViewer() {
    viewer.classList.add("hide");
}

images.forEach(img => {
    img.addEventListener("click", openViewer);
});

closeViewer.addEventListener("click", closeImageViewer);

viewer.addEventListener("click", (event) => {
    if (event.target === viewer) {
        closeImageViewer();
    }
});



