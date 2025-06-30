const openBtn = document.getElementById("openBtn");
const popupContainer = document.getElementById("popup-container");
const closeBtn = document.getElementById("closeBtn");
openBtn.addEventListener("click", () => {
  popupContainer.style.display = "inline-block";
  popupContainer.classList.add("fade-in");

  openBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  popupContainer.classList.add("fade-in");
  popupContainer.style.display = "none";
  openBtn.style.display = "block";
});
