const button = document.getElementById("btn");
const screenBody = document.body;

button.addEventListener("click", () => {
  screenBody.classList.toggle("dark");
  screenBody.classList.toggle("light");
});

// add
// remove
// contain
// replace
