const images = [...document.querySelectorAll(".cat-wet img")];
const wetGallery = document.querySelector(".cat-wet");

for (let i = 0; i < 6; i++) {
  const img = document.createElement("img");
  img.src = sciezkiDoObrazkow[i];
  wetGallery.appendChild(img);
}
