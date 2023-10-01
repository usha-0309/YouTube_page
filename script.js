// scri
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function toggleMenu() {
    const menu = document.querySelector('.main-menu');
    menu.classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", function () {
    // Get the toggle button element
    const toggleButton = document.getElementById("toggleButton");

    // Add an event listener to toggle the navigation bar
    toggleButton.addEventListener("click", function () {
        document.querySelector(".navbar-collapse").classList.toggle("show");
    });
});

