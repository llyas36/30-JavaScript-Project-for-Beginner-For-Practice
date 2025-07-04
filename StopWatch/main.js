let seconds = 0;
let minutes = 0;
let hours = 0;
let milisec = 0;
let timer;
let isRunning = false;
const display = document.getElementById("time");

function updateTimeDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let mili = milisec < 10 ? "0" + milisec : milisec;

  display.textContent = `${h}:${m}:${s}:${mili}`;
}

function start() {
  if (!isRunning) {
    timer = setInterval(() => {
      milisec++;
      if (milisec == 1000) {
        milisec = 0;
        seconds++;
      }
      // seconds++;
      if (seconds == 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
      updateTimeDisplay();
      isRunning = true;
    }, 1);
  }
}

function pause() {
  clearInterval(timer);
  isRunning = false;
}

function reset() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  milisec = 0;
  updateTimeDisplay();
  isRunning = false;
}
