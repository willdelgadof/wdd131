const themeSelector = document.getElementById("theme-selector");
const logo = document.querySelector(".logo");

themeSelector.addEventListener("change", () => {
    if (themeSelector.value === "dark") {
        document.body.classList.add("dark");
        logo.src = "images/byui-logo_white.png";
    } else {
        document.body.classList.remove("dark");
        logo.src = "images/byui-logo_blue.webp";
    }
});


