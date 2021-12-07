const nextImg = document.querySelector(".slider__arrow_next");
const prevImg = document.querySelector(".slider__arrow_prev");

const sliderItems = Array.from(document.querySelectorAll(".slider__item"));
const sliderDots = Array.from(document.querySelectorAll(".slider__dot"));

let sliderIndex = 0;

function makeElementsInactive() {
  const activeImg = document.querySelector(".slider__item_active");
  activeImg.className = "slider__item";

  const activeDot = document.querySelector(".slider__dot_active");
  activeDot.className = "slider__dot";
}

function makeElementsActive(index) {
  sliderItems[index].className = "slider__item slider__item_active";
  sliderDots[index].className = "slider__dot slider__dot_active";
}

nextImg.onclick = function() {
  makeElementsInactive();

  ++sliderIndex;
  if (sliderIndex === sliderItems.length) {
    sliderIndex = 0;
  }
  makeElementsActive(sliderIndex);
}

prevImg.onclick = function() {
  makeElementsInactive();

  --sliderIndex;
  if (sliderIndex === -1) {
    sliderIndex = sliderItems.length - 1;
  }
  makeElementsActive(sliderIndex);
}

for (let i = 0; i < sliderDots.length; i++) {
  sliderDots[i].onclick = function() {
    sliderIndex = i;
    makeElementsInactive();
    makeElementsActive(sliderIndex);
  }
}