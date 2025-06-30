togglePasswordBtn = document.getElementById("togglePassword");
passwordInput = document.getElementById("passwordInput");

//handling the toggle iconn
togglePasswordBtn.addEventListener("click", () => {
  if (passwordInput.type == "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});
