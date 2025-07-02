const button = document.getElementById("btn");
const toastNoti = document.getElementById("toast");

button.addEventListener("click", () => {
  toastNoti.style.display = "block";
  setTimeout(() => {
    toastNoti.style.display = "none";
  }, 2500);
});
