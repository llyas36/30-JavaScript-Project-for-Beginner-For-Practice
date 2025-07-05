const display = document.getElementById("display");

function appendToDisplay(input) {
  if (input === "0" && display.value !== "") {
    if (input == "0" || display.value != "0") {
      display.value = input;
      console.log("test test");
    }
  }
  display.value = display.value + input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  display.value = eval(display.value);

  /*
    if(display.value == `0{true}` ){

    }
  */
}
