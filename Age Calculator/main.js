const button = document.getElementById("btn");
const date = document.getElementById("date");
const display = document.getElementById("display");
let now = new Date();
button.addEventListener("click", () => {
  let year = date.value.split("-");
  let birthYear = Number(year[0]);

  display.textContent = `Hello, you are ${now.getFullYear() - birthYear} years old. You're born in ${date.value}`;
});
