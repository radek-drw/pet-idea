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
const toysButton = document.querySelector(".toys-option"); // przycisk do zmiany na kategorię 'toys'

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

toysButton.addEventListener("click", function () {
  currentCategory = "toys";
  index = 0;
  displayImages();
  toysButton.classList.add("active"); // dodaj klasę 'active' do 'toysButton'
  catButton.classList.remove("active");
  dogButton.classList.remove("active");
  wetButton.style.display = "none"; // ukryj przycisk 'wet'
  dryButton.style.display = "none"; // ukryj przycisk 'dry'
});

const catButton = document.querySelector(".cat-option");
const dogButton = document.querySelector(".dog-option");

catButton.addEventListener("click", function () {
  currentCategory = "cat";
  index = 0;
  displayImages();
  catButton.classList.add("active");
  dogButton.classList.remove("active");
  toysButton.classList.remove("active"); // usuń klasę 'active' z 'toysButton'
  wetButton.style.display = "block"; // pokaż przycisk 'wet'
  dryButton.style.display = "block"; // pokaż przycisk 'dry'
});

dogButton.addEventListener("click", function () {
  currentCategory = "dog";
  index = 0;
  displayImages();
  dogButton.classList.add("active");
  catButton.classList.remove("active");
  toysButton.classList.remove("active"); // usuń klasę 'active' z 'toysButton'
  wetButton.style.display = "block"; // pokaż przycisk 'wet'
  dryButton.style.display = "block"; // pokaż przycisk 'dry'
});
