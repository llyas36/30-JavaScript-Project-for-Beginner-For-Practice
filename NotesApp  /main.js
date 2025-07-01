//buttons
const clearBtn = document.getElementById("clear-btn");
const zoomInBtn = document.getElementById("zoomIn-btn");
const zommOutBtn = document.getElementById("zoomOut-btn");

//textarea
const textarea = document.getElementById("textarea");

clearBtn.addEventListener("click", function () {
  textarea.value = "";
});

// undo AND redo

let undoStack = [];
let redoStack = [];

// Save the current state before change
editor.addEventListener("input", () => {
  undoStack.push(editor.value);
  // Clear redo history once new input happens
  redoStack = [];
});

function undo() {
  if (undoStack.length > 1) {
    // Current state goes to redo stack
    redoStack.push(undoStack.pop());
    // Revert to last state
    textarea.value = undoStack[undoStack.length - 1];
  }
}

function redo() {
  if (redoStack.length > 0) {
    const redoValue = redoStack.pop();
    undoStack.push(redoValue);
    textarea.value = redoValue;
  }
}

// zoomIn and zoomOut

let fontSize = 16; // starting size in pixels

function zoomIn() {
  if (fontSize < 23) {
    fontSize += 1;
    textarea.style.fontSize = fontSize + "px";
  }
}

function zoomOut() {
  if (fontSize > 6) {
    // prevent disappearing text
    fontSize -= 1;
    textarea.style.fontSize = fontSize + "px";
  }
}
