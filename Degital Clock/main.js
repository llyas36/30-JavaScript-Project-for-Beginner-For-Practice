const second = document.getElementById("sec");
const minute = document.getElementById("min");
const hour = document.getElementById("hr");

setInterval(() => {
  let d = new Date();
  if (d.getSeconds().toString().length == 1) {
    second.textContent = `0${d.getSeconds()}`;
  } else {
    second.textContent = d.getSeconds();
  }
}, 1000);

// handling minute
setInterval(() => {
  let dd = new Date();
  if (dd.getMinutes().toString().length == 1) {
    minute.textContent = `0${d.getMinutes()}`;
  } else {
    minute.textContent = dd.getMinutes();
  }
}, 1000);

// handling hour
setInterval(() => {
  let ddd = new Date();
  if (ddd.getHours().toString().length == 1) {
    hour.textContent = `0${ddd.getHours()}`;
  } else {
    hour.textContent = ddd.getHours();
  }
  // console.log("this is hour");
}, 1000);
