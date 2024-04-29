// Define the selectors as constants to avoid querying the DOM multiple times
const menu = document.querySelector(".menu");
const sidebarNav = document.querySelector(".sidebar-nav");
const menuTop = document.querySelector(".menu-top");
const menuMiddle = document.querySelector(".menu-middle");
const menuBottom = document.querySelector(".menu-bottom");
const sidebarLinks = document.querySelectorAll(
  ".products-sidebar, .about-sidebar, .contact-btn-sidebar"
);

// Function to toggle menu
function toggleMenu() {
  sidebarNav.classList.toggle("active-sidebar");
  menuTop.classList.toggle("menu-top-click");
  menuMiddle.classList.toggle("menu-middle-click");
  menuBottom.classList.toggle("menu-bottom-click");
  menu.classList.toggle("active-menu");
  console.log(this);
}

// Function to close menu
function closeMenu() {
  sidebarNav.classList.remove("active-sidebar");
  menu.classList.remove("active-menu");
  menuTop.classList.remove("menu-top-click");
  menuMiddle.classList.remove("menu-middle-click");
  menuBottom.classList.remove("menu-bottom-click");
}

// Add event listener to the menu
menu.addEventListener("click", toggleMenu);

// Add event listeners to the sidebar links
sidebarLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
