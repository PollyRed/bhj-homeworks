const cookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
const clickSpeed = document.getElementById("clicker__speed__counter");
let clickCounter = 0;

let start = new Date();

cookie.onclick = function() {
  let stop = new Date();  
  let diff = (stop - start) / 1000;
  start = stop;
  clickSpeed.textContent = (1 / diff).toFixed(2);

  counter.textContent = ++clickCounter;
  
  if (clickCounter % 2 === 0) {
    cookie.width -= 10;
  } else {
    cookie.width += 10;
  }
}