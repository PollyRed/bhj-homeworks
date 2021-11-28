const timer = document.getElementById("timer");
let startTime = timer.textContent;

const decreaseTime = function() {
  if (timer.textContent === '0') {
    clearInterval(interval);
    alert("Вы победили в конкурсе!");
  }

  if(startTime > 0) {
    startTime -= 1;
    timer.textContent = startTime;
  }
}

let interval = setInterval(decreaseTime, 1000);