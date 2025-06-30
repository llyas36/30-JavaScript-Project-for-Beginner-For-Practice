togglePasswordBtn = document.getElementById("togglePassword");
passwordInput = document.getElementById("passwordInput");

togglePasswordBtn.addEventListener("click", () => {
  if (passwordInput.type == "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});
