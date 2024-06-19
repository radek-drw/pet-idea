// Utility function to hide all images
function hideAllImages(categories) {
  for (let category in categories) {
    if (category === "toys") {
      categories[category].forEach((item) => (item.style.display = "none"));
    } else {
      for (let subcategory in categories[category]) {
        categories[category][subcategory].forEach(
          (item) => (item.style.display = "none")
        );
      }
    }
  }
}

// Utility function to set button states
function setButtonStates(prevButton, nextButton, index, images) {
  prevButton.disabled = index === 0;
  nextButton.disabled = index + 6 >= images.length;

  prevButton.style.cursor = prevButton.disabled ? "not-allowed" : "pointer";
  nextButton.style.cursor = nextButton.disabled ? "not-allowed" : "pointer";
}

function displayImages(
  index,
  categories,
  currentCategory,
  currentSubcategory,
  displayDiv,
  prevButton,
  nextButton,
  imagesToShow = 6
) {
  hideAllImages(categories);

  let images =
    currentCategory === "toys"
      ? categories[currentCategory]
      : categories[currentCategory][currentSubcategory];

  for (let i = index; i < index + imagesToShow; i++) {
    if (i < images.length) {
      images[i].style.display = "block";
      displayDiv.appendChild(images[i]);

      images[i].style.opacity = 0;
      images[i].style.transform = "translateX(-100px) scale(0.8)";
      images[i].style.transition =
        "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
      images[i].style.transitionDelay = `${(i - index) * 0.1}s`;

      setTimeout(() => {
        images[i].style.opacity = 1;
        images[i].style.transform = "translateX(0) scale(1)";
      }, 0);
    }
  }

  if (prevButton && nextButton) {
    setButtonStates(prevButton, nextButton, index, images);
  }
}

// Initialization function for desktop version
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

  hideAllImages(categories);
  displayImages(
    index,
    categories,
    currentCategory,
    currentSubcategory,
    displayDiv,
    prevButton,
    nextButton
  );

  nextButton.addEventListener("click", () => {
    let images =
      currentCategory === "toys"
        ? categories[currentCategory]
        : categories[currentCategory][currentSubcategory];
    if (index + 6 < images.length) {
      index += 6;
      displayImages(
        index,
        categories,
        currentCategory,
        currentSubcategory,
        displayDiv,
        prevButton,
        nextButton
      );
    }
  });

  prevButton.addEventListener("click", () => {
    if (index - 6 >= 0) {
      index -= 6;
      displayImages(
        index,
        categories,
        currentCategory,
        currentSubcategory,
        displayDiv,
        prevButton,
        nextButton
      );
    }
  });

  const wetButton = document.querySelector(".wet");
  const dryButton = document.querySelector(".dry");
  const catButton = document.querySelector(".cat-option");
  const dogButton = document.querySelector(".dog-option");
  const toysButton = document.querySelector(".toys-option");
  const logoLeftColumn = document.querySelector(".section-applaws-logo img");

  wetButton.addEventListener("click", () => {
    if (currentCategory !== "toys") {
      currentSubcategory = "wet";
      index = 0;
      displayImages(
        index,
        categories,
        currentCategory,
        currentSubcategory,
        displayDiv,
        prevButton,
        nextButton
      );
      wetButton.classList.add("active-food-option");
      dryButton.classList.remove("active-food-option");
    }
  });

  dryButton.addEventListener("click", () => {
    if (currentCategory !== "toys") {
      currentSubcategory = "dry";
      index = 0;
      displayImages(
        index,
        categories,
        currentCategory,
        currentSubcategory,
        displayDiv,
        prevButton,
        nextButton
      );
      dryButton.classList.add("active-food-option");
      wetButton.classList.remove("active-food-option");
    }
  });

  catButton.addEventListener("click", () => {
    logoLeftColumn.src = "./assets/images/svg's/applaws-logo.svg";
    logoLeftColumn.alt = "Applaws";
    currentCategory = "cat";
    index = 0;
    displayImages(
      index,
      categories,
      currentCategory,
      currentSubcategory,
      displayDiv,
      prevButton,
      nextButton
    );
    catButton.classList.add("active");
    dogButton.classList.remove("active");
    toysButton.classList.remove("active");
    wetButton.style.display = "block";
    dryButton.style.display = "block";
  });

  dogButton.addEventListener("click", () => {
    logoLeftColumn.src = "./assets/images/svg's/applaws-logo.svg";
    logoLeftColumn.alt = "Applaws";
    currentCategory = "dog";
    index = 0;
    displayImages(
      index,
      categories,
      currentCategory,
      currentSubcategory,
      displayDiv,
      prevButton,
      nextButton
    );
    dogButton.classList.add("active");
    catButton.classList.remove("active");
    toysButton.classList.remove("active");
    wetButton.style.display = "block";
    dryButton.style.display = "block";
  });

  toysButton.addEventListener("click", () => {
    logoLeftColumn.src = "./assets/images/svg's/katido-logo.svg";
    logoLeftColumn.alt = "Katido";
    currentCategory = "toys";
    index = 0;
    displayImages(
      index,
      categories,
      currentCategory,
      currentSubcategory,
      displayDiv,
      prevButton,
      nextButton
    );
    toysButton.classList.add("active");
    catButton.classList.remove("active");
    dogButton.classList.remove("active");
    wetButton.style.display = "none";
    dryButton.style.display = "none";
  });
}

// Initialization function for mobile version
function mobileScript() {
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

  hideAllImages(categories);
  displayImages(
    index,
    categories,
    currentCategory,
    currentSubcategory,
    displayDiv,
    null,
    null,
    1
  );

  let touchstartX = 0;
  let touchendX = 0;

  displayDiv.addEventListener(
    "touchstart",
    (event) => {
      touchstartX = event.changedTouches[0].screenX;
    },
    false
  );

  displayDiv.addEventListener(
    "touchend",
    (event) => {
      touchendX = event.changedTouches[0].screenX;
      handleSwipe();
    },
    false
  );

  function handleSwipe() {
    let images =
      currentCategory === "toys"
        ? categories[currentCategory]
        : categories[currentCategory][currentSubcategory];
    if (touchendX < touchstartX && index + 1 < images.length) {
      index += 1;
      displayImages(
        index,
        categories,
        currentCategory,
        currentSubcategory,
        displayDiv,
        null,
        null,
        1
      );
    }
    if (touchendX > touchstartX && index - 1 >= 0) {
      index -= 1;
      displayImages(
        index,
        categories,
        currentCategory,
        currentSubcategory,
        displayDiv,
        null,
        null,
        1
      );
    }
  }

  const wetButton = document.querySelector(".wet");
  const dryButton = document.querySelector(".dry");
  const catButton = document.querySelector(".cat-option");
  const dogButton = document.querySelector(".dog-option");
  const toysButton = document.querySelector(".toys-option");
  const logoLeftColumn = document.querySelector(".section-applaws-logo img");

  wetButton.addEventListener("click", () => {
    if (currentCategory !== "toys") {
      currentSubcategory = "wet";
      index = 0;
      displayImages(
        index,
        categories,
        currentCategory,
        currentSubcategory,
        displayDiv,
        null,
        null,
        1
      );
      wetButton.classList.add("active-food-option");
      dryButton.classList.remove("active-food-option");
    }
  });

  dryButton.addEventListener("click", () => {
    if (currentCategory !== "toys") {
      currentSubcategory = "dry";
      index = 0;
      displayImages(
        index,
        categories,
        currentCategory,
        currentSubcategory,
        displayDiv,
        null,
        null,
        1
      );
      dryButton.classList.add("active-food-option");
      wetButton.classList.remove("active-food-option");
    }
  });

  catButton.addEventListener("click", () => {
    logoLeftColumn.src = "./assets/images/svg's/applaws-logo.svg";
    logoLeftColumn.alt = "Applaws";
    currentCategory = "cat";
    index = 0;
    displayImages(
      index,
      categories,
      currentCategory,
      currentSubcategory,
      displayDiv,
      null,
      null,
      1
    );
    catButton.classList.add("active");
    dogButton.classList.remove("active");
    toysButton.classList.remove("active");
    wetButton.style.display = "block";
    dryButton.style.display = "block";
  });

  dogButton.addEventListener("click", () => {
    logoLeftColumn.src = "./assets/images/svg's/applaws-logo.svg";
    logoLeftColumn.alt = "Applaws";
    currentCategory = "dog";
    index = 0;
    displayImages(
      index,
      categories,
      currentCategory,
      currentSubcategory,
      displayDiv,
      null,
      null,
      1
    );
    dogButton.classList.add("active");
    catButton.classList.remove("active");
    toysButton.classList.remove("active");
    wetButton.style.display = "block";
    dryButton.style.display = "block";
  });

  toysButton.addEventListener("click", () => {
    logoLeftColumn.src = "./assets/images/svg's/katido-logo.svg";
    logoLeftColumn.alt = "Katido";
    currentCategory = "toys";
    index = 0;
    displayImages(
      index,
      categories,
      currentCategory,
      currentSubcategory,
      displayDiv,
      null,
      null,
      1
    );
    toysButton.classList.add("active");
    catButton.classList.remove("active");
    dogButton.classList.remove("active");
    wetButton.style.display = "none";
    dryButton.style.display = "none";
  });
}

if (window.matchMedia("(min-width: 480px)").matches) {
  desktopScript();
} else {
  mobileScript();
}
