"use strict";

const rotators = Array.from(document.querySelectorAll(".rotator"));

for (let rotator of rotators) {
  const cases = Array.from(rotator.querySelectorAll(".rotator__case"));

  function adsRotator() {
    const activeRotator = rotator.querySelector(".rotator__case_active");
    activeRotator.classList.remove("rotator__case_active");

    let nextElement = activeRotator.nextElementSibling;
    if (!nextElement) {
      nextElement = rotator.firstElementChild;
    }
    nextElement.classList.add("rotator__case_active");
    timeout = setTimeout(adsRotator, nextElement.dataset.speed);
  }
  
  for(let rotatorCase of cases) {
    rotatorCase.style.color = rotatorCase.dataset.color;
  }

  let timeout = setTimeout(adsRotator, cases[0].dataset.speed);
}