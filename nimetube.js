const menuButton = document.querySelectorAll(".menu-button");
const screenOverlay = document.querySelector(".screen-overlay");
const themeButton = document.querySelector(".theme-button i");


if(localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    themeButton.classList.replace("uil-sun", "uil-sun");
} else {
    themeButton.classList.replace("uil-sun", "uil-moon");
}


// tema youtube
themeButton.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", isDarkMode ? "enabled" : 
        "disabled");
    
    themeButton.classList.toggle("uil-sun", isDarkMode);
    themeButton.classList.toggle("uil-moon", !isDarkMode);
})

// togel untk sidebar
menuButton.forEach(button => {
    button.addEventListener("click", () => {
        document.body.classList.toggle("sidebar-hidden");
    });
});

//togel side barvisibility
screenOverlay.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden");
});

if(window.innerWidth >= 768) {
    document.body.classList.remove("sidebar-hidden");
}