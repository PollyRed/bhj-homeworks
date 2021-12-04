"use strict";

const modals = Array.from(document.querySelectorAll(".modal"));
modals[0].className = "modal modal_active";

const buttonDanger = modals[0].querySelector(".btn_danger");
buttonDanger.onclick = function() {
  modals[0].className = "modal";
  modals[1].className = "modal modal_active";
}

for (let modal of modals) {
  const closeButton = modal.querySelector(".modal__close");
  closeButton.onclick = function() {
    modal.className = "modal";
  }
}