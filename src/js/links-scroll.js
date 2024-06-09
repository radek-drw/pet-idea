const sections = document.querySelectorAll("#products, #about, #contact");
const navLinks = document.querySelectorAll(".products, .about, .contact-btn");

window.addEventListener("scroll", () => {
  const top = window.scrollY; // Get the current scroll position

  sections.forEach((sec) => {
    const offset = sec.offsetTop - 500;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active-navbar-option");
      });

      const navLink = document.querySelector(`nav a[href*="${id}"]`);
      if (navLink) {
        navLink.classList.add("active-navbar-option");
      }
    }
  });
});

const links = document.querySelectorAll(".left a, .contact a");

links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((link) => {
      link.classList.remove("active-navbar-option");
    });

    this.classList.add("active-navbar-option");
  });
});
