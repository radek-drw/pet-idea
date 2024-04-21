let index = 0;
const categories = {
  cat: {
    wet: document.querySelectorAll(".cat-wet img"),
    dry: document.querySelectorAll(".cat-dry img"),
  },
  dog: {
    wet: document.querySelectorAll(".dog-wet img"),
    dry: document.querySelectorAll(".dog-dry img"),
  },
  toys: document.querySelectorAll(".toys img"), // dodaj kategorię 'toys'
};
let currentCategory = "cat";
let currentSubcategory = "wet";
const displayDiv = document.querySelector(".cat-wet");
const nextButton = document.querySelector(".arrow-right");
const prevButton = document.querySelector(".arrow-left");

for (let category in categories) {
  if (category === "toys") {
    for (let i = 0; i < categories[category].length; i++) {
      categories[category][i].style.display = "none";
    }
  } else {
    for (let subcategory in categories[category]) {
      for (let i = 0; i < categories[category][subcategory].length; i++) {
        categories[category][subcategory][i].style.display = "none";
      }
    }
  }
}

function displayImages() {
  for (let category in categories) {
    if (category === "toys") {
      for (let i = 0; i < categories[category].length; i++) {
        categories[category][i].style.display = "none";
      }
    } else {
      for (let subcategory in categories[category]) {
        for (let i = 0; i < categories[category][subcategory].length; i++) {
          categories[category][subcategory][i].style.display = "none";
        }
      }
    }
  }

  let images;
  if (currentCategory === "toys") {
    images = categories[currentCategory];
  } else {
    images = categories[currentCategory][currentSubcategory];
  }

  for (let i = index; i < index + 6; i++) {
    if (i < images.length) {
      images[i].style.display = "block";
      displayDiv.appendChild(images[i]);
    }
  }

  prevButton.disabled = index === 0;
  nextButton.disabled = index + 6 >= images.length;
  if (prevButton.disabled) {
    prevButton.style.cursor = "not-allowed";
    prevButton.src = "./src/disabled-arrow-left.svg";
  } else {
    prevButton.style.cursor = "pointer";
    prevButton.src = "./src/arrow-left.svg";
  }

  if (nextButton.disabled) {
    nextButton.style.cursor = "not-allowed";
    nextButton.src = "./src/disabled-arrow-right.svg";
  } else {
    nextButton.style.cursor = "pointer";
    nextButton.src = "./src/arrow-right.svg";
  }
}

displayImages();

nextButton.addEventListener("click", function () {
  let images;
  if (currentCategory === "toys") {
    images = categories[currentCategory];
  } else {
    images = categories[currentCategory][currentSubcategory];
  }

  if (index + 6 < images.length) {
    index += 6;
    displayImages();
  }
});

prevButton.addEventListener("click", function () {
  if (index - 6 >= 0) {
    index -= 6;
    displayImages();
  }
});

const wetButton = document.querySelector(".wet");
const dryButton = document.querySelector(".dry");

const logoLeftColumn = document.querySelector(".section-applaws-logo img");

wetButton.addEventListener("click", function () {
  if (currentCategory !== "toys") {
    currentSubcategory = "wet";
    index = 0;
    displayImages();
    wetButton.classList.add("active-food-option");
    dryButton.classList.remove("active-food-option");
  }
});

dryButton.addEventListener("click", function () {
  if (currentCategory !== "toys") {
    currentSubcategory = "dry";
    index = 0;
    displayImages();
    dryButton.classList.add("active-food-option");
    wetButton.classList.remove("active-food-option");
  }
});

const catButton = document.querySelector(".cat-option");
const dogButton = document.querySelector(".dog-option");
const toysButton = document.querySelector(".toys-option");

catButton.addEventListener("click", function () {
  logoLeftColumn.src = "./src/applaws-logo.svg";
  logoLeftColumn.alt = "Applaws";
  currentCategory = "cat";
  index = 0;
  displayImages();
  catButton.classList.add("active");
  dogButton.classList.remove("active");
  toysButton.classList.remove("active");
  wetButton.style.display = "block";
  dryButton.style.display = "block";
});

dogButton.addEventListener("click", function () {
  logoLeftColumn.src = "./src/applaws-logo.svg";
  logoLeftColumn.alt = "applaws";
  currentCategory = "dog";
  index = 0;
  displayImages();
  dogButton.classList.add("active");
  catButton.classList.remove("active");
  toysButton.classList.remove("active"); // usuń klasę 'active' z 'toysButton'
  wetButton.style.display = "block"; // pokaż przycisk 'wet'
  dryButton.style.display = "block"; // pokaż przycisk 'dry'
});

toysButton.addEventListener("click", function () {
  logoLeftColumn.src = "./src/katido-logo.svg";
  logoLeftColumn.alt = "Katido";
  currentCategory = "toys";
  index = 0;
  displayImages();
  toysButton.classList.add("active"); // dodaj klasę 'active' do 'toysButton'
  catButton.classList.remove("active");
  dogButton.classList.remove("active");
  wetButton.style.display = "none"; // ukryj przycisk 'wet'
  dryButton.style.display = "none"; // ukryj przycisk 'dry'
});

// ================

window.addEventListener("scroll", function () {
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
});

// ============== scroll to contact

const sections = document.querySelectorAll("#products, #about, #contact");
const navLinks = document.querySelectorAll(".products, .about, .contact-btn");

let currentSection = "products";
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 400) {
      currentSection = section.id;
    }
  });
  navLinks.forEach((navLink) => {
    if (navLink.href.includes(currentSection)) {
      document
        .querySelector(".active-navbar-option")
        .classList.remove("active-navbar-option");
      navLink.classList.add("active-navbar-option");
    }
  });
});

const header = document.querySelector(".header");
const navbar = document.querySelector(".navbar-content");
console.log(header.offsetHeight + navbar.offsetHeight);
// window.addEventListener("scroll", () => {
//   sections.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 400;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       navLinks.forEach((links) => {
//         links.classList.remove("active-navbar-option");
//         document
//           .querySelector("nav a[href*=" + id + "]")
//           .classList.add("active-navbar-option");
//       });
//     }
//   });
// });
