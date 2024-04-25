let index = 0;
const categories = {
  cat: {
    wet: document.querySelectorAll(".cat-wet div"),
    dry: document.querySelectorAll(".cat-dry div"),
  },
  dog: {
    wet: document.querySelectorAll(".dog-wet div"),
    dry: document.querySelectorAll(".dog-dry div"),
  },
  toys: document.querySelectorAll(".toys div"),
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
