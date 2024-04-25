const sections = document.querySelectorAll("#products, #about, #contact");
const navLinks = document.querySelectorAll(".products, .about, .contact-btn");

window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 400;
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
