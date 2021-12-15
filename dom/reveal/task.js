"use strict";

const isInViewport = function(element) {
  const viewportHeight = window.innerHeight;
  const {top, bottom} = element.getBoundingClientRect();
  return (top < viewportHeight) && (bottom > 0) ? true : false;
};

const reveals = Array.from(document.querySelectorAll(".reveal"));

window.addEventListener("scroll", function () {
  for (let reveal of reveals) {
    if (isInViewport(reveal)) {
      reveal.classList.add("reveal_active");
    } else {
      reveal.classList.remove("reveal_active");
    }
  }
});
