window.addEventListener("scroll", function () {
  if (window.innerWidth >= 480) {
    const logo = document.querySelector(".petidea-img");
    const logoDiv = document.querySelector("div.middle-logo");

    if (window.scrollY > 80) {
      logo.style.transform = "scale(0.8)";
      logo.style.transformOrigin = "50% 50%";
      logoDiv.style.top = "10px";
    } else {
      logo.style.transform = "scale(1.2)";
      logo.style.transformOrigin = "top center";
      logoDiv.style.top = "35px";
    }
  }
});
