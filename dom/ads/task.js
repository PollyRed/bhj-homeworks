"use strict";

const rotators = Array.from(document.querySelectorAll(".rotator"));

for (let rotator of rotators) {
  function adsRotator() {
    const activeRotator = rotator.querySelector(".rotator__case_active");
    activeRotator.classList.remove("rotator__case_active");

    let nextElement = activeRotator.nextElementSibling;
    if (!nextElement) {
      nextElement = rotator.firstElementChild;
    }
    nextElement.classList.add("rotator__case_active");
  }

  const cases = Array.from(rotator.querySelectorAll(".rotator__case"));
  for(let rotatorCase of cases) {
    rotatorCase.style.color = rotatorCase.dataset.color;
  }

  setInterval(adsRotator, 1000);
}