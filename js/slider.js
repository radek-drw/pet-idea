// Desktop version script
function desktopScript() {
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

    // Slider animation effect
    for (let i = index; i < index + 6; i++) {
      if (i < images.length) {
        images[i].style.display = "block";
        images[i].style.opacity = 0;
        images[i].style.transform = "translateX(-100px) scale(0.8)";
        images[i].style.transition =
          "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
        images[i].style.transitionDelay = `${(i - index) * 0.1}s`;
        displayDiv.appendChild(images[i]);

        // use setTimeout to change opacity, position, and scale after the element is in the DOM
        setTimeout(() => {
          images[i].style.opacity = 1;
          images[i].style.transform = "translateX(0) scale(1)";
        }, 0);
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
}

// Mobile version script
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

  // Change display images to show 1 only
  for (let i = index; i < index + 1; i++) {
    if (i < images.length) {
      images[i].style.display = "block";
      displayDiv.appendChild(images[i]);
    }
  }
}

displayImages();

let touchstartX = 0;
let touchendX = 0;

displayDiv.addEventListener(
  "touchstart",
  function (event) {
    touchstartX = event.changedTouches[0].screenX;
  },
  false
);

displayDiv.addEventListener(
  "touchend",
  function (event) {
    touchendX = event.changedTouches[0].screenX;
    handleSwipe();
  },
  false
);

function handleSwipe() {
  let images;
  if (currentCategory === "toys") {
    images = categories[currentCategory];
  } else {
    images = categories[currentCategory][currentSubcategory];
  }

  if (touchendX < touchstartX) {
    if (index + 1 < images.length) {
      index += 1;
      displayImages();
    }
  }

  if (touchendX > touchstartX) {
    if (index - 1 >= 0) {
      index -= 1;
      displayImages();
    }
  }
}

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

// Use matchMedia to check the device's viewport width
if (window.matchMedia("(min-width: 480px)").matches) {
  // If viewport width is at least 480px, run the desktop version script
  desktopScript();
} else {
  // Otherwise, run the mobile version script
  mobileScript();
}
