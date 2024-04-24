let index = 0;
const categories = {
  cat: {
    wet: document.querySelectorAll(".cat-wet div"),
    dry: document.querySelectorAll(".cat-dry div"),
  },
  dog: {
    wet: document.querySelectorAll(".dog-wet img"),
    dry: document.querySelectorAll(".dog-dry img"),
  },
  toys: document.querySelectorAll(".toys img"),
};
let currentCategory = "cat";
let currentSubcategory = "wet";
const displayDiv = document.querySelector(".cat-wet");
const nextButton = document.querySelector(".arrow-right-btn");
const prevButton = document.querySelector(".arrow-left-btn");

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
  } else {
    prevButton.style.cursor = "pointer";
  }

  if (nextButton.disabled) {
    nextButton.style.cursor = "not-allowed";
  } else {
    nextButton.style.cursor = "pointer";
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
  toysButton.classList.remove("active");
  wetButton.style.display = "block";
  dryButton.style.display = "block";
});

toysButton.addEventListener("click", function () {
  logoLeftColumn.src = "./src/katido-logo.svg";
  logoLeftColumn.alt = "Katido";
  currentCategory = "toys";
  index = 0;
  displayImages();
  toysButton.classList.add("active");
  catButton.classList.remove("active");
  dogButton.classList.remove("active");
  wetButton.style.display = "none";
  dryButton.style.display = "none";
});

// ================ scroll navbar logo

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

// let currentSection = "products";
// window.addEventListener("scroll", () => {
//   sections.forEach((section) => {
//     if (window.scrollY >= section.offsetTop - 400) {
//       currentSection = section.id;
//     }
//   });
//   navLinks.forEach((navLink) => {
//     if (navLink.href.includes(currentSection)) {
//       document
//         .querySelector(".active-navbar-option")
//         .classList.remove("active-navbar-option");
//       navLink.classList.add("active-navbar-option");
//     }
//   });
// });

window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 400;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

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

// ============ form validation
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const fields = [
    { id: "name", errorClass: "error-name", inputClass: "name-input" },

    {
      id: "email",
      errorClass: "error-email",
      inputClass: "email-input",
      pattern: /^[^ ]+@[^ ]+\.[a-z]{2,3}$/,
    },

    { id: "message", errorClass: "error-message", inputClass: "message-input" },
  ];

  let formIsValid = true;

  fields.forEach((field) => {
    const value = document.getElementById(field.id).value;

    const inputElement = document.querySelector(`.${field.inputClass}`);

    const errorElement = document.querySelector(`.${field.errorClass}`);

    if (value === "" || (field.pattern && !field.pattern.test(value))) {
      inputElement.style.borderColor = "#ff0000";

      inputElement.style.backgroundColor = "#ffeeee";

      errorElement.style.display = "block";

      formIsValid = false;
    } else {
      inputElement.style.borderColor = "#d1d1d1";

      inputElement.style.backgroundColor = "transparent";

      errorElement.style.display = "none";
    }
  });

  if (formIsValid) {
    // Clear the input fields

    fields.forEach((field) => {
      const inputElement = document.querySelector(`.${field.inputClass}`);

      inputElement.value = "";
    });

    // Display the success message

    const successMessage = document.querySelector(".success-message");

    successMessage.style.display = "block";

    // Hide the success message after 3 seconds

    setTimeout(function () {
      successMessage.style.display = "none";
    }, 3000);
  } else {
    return false;
  }
});

// ============= placeholder in contact form

// var inputs = document.querySelectorAll(
//   ".name-input, .email-input, .message-input"
// );

// inputs.forEach((input) => {
//   input.addEventListener("focus", () => {
//     input.classList.add("active-input");
//   });
// });
// inputs.forEach((input) => {
//   input.addEventListener("blur", () => {
//     if (input.value === "") {
//       input.classList.remove("active-input");
//     }
//   });
// });
