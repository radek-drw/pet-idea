// LINKS UNDERLINE ANIMATION WHEN SCROLLING
const sections = document.querySelectorAll("#products, #about, #contact");
const navLinks = document.querySelectorAll(".products, .about, .contact-btn");

window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 500;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active-navbar-option");
        document
          .querySelector("nav a[href*=" + id + "]")
          .classList.add("active-navbar-option");
      });
    }
  });
});
// END LINK ANIMATION

// ===================================================

// LINK ANIMATION WHEN CLICKED
const links = document.querySelectorAll(".left a, .contact a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => {
      link.classList.remove("active-navbar-option");
    });

    this.classList.add("active-navbar-option");
  });
});
