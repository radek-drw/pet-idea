const sidebarBtn = document.querySelector(".sidebar-icon");
const sidebarNav = document.querySelector(".sidebar-nav");

let menuVisible = false;

sidebarBtn.addEventListener("click", () => {
  if (!menuVisible) {
    sidebarNav.style.transform = "translateX(-100%)";
    menuVisible = true;
  } else {
    sidebarNav.style.transform = "translateX(0)";
    menuVisible = false;
  }
});
