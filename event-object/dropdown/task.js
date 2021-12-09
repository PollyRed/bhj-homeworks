"use strict";

const dropDowns = Array.from(document.querySelectorAll(".dropdown"));
const dropDownItems = Array.from(document.querySelectorAll(".dropdown__item"));

function dropDownHandler() {
  const activeList = this.querySelector(".dropdown__list_active");
  if (activeList) {
    activeList.className = "dropdown__list";
  } else {
    const list = this.querySelector(".dropdown__list");
    list.className = "dropdown__list dropdown__list_active";
  }
}

for (let dropDown of dropDowns) {
  dropDown.addEventListener("click", dropDownHandler);
}

function dropDownItemHandler(event) {
  event.preventDefault();
  const dropDown = this.closest(".dropdown");
  const dropDownValue = dropDown.querySelector(".dropdown__value");
  const dropDownLink = this.querySelector(".dropdown__link");
  dropDownValue.textContent = dropDownLink.textContent;
}

for (let dropDownItem of dropDownItems) {
  dropDownItem.addEventListener("click", dropDownItemHandler);
}