"use strict";

const tooltips = Array.from(document.querySelectorAll(".has-tooltip"));

for (let tooltip of tooltips) {
  tooltip.addEventListener("click", function(event) {
    event.preventDefault();
    const title = this.getAttribute("title");
    const rect = this.getBoundingClientRect();
    const top = rect.top + rect.heigth;
    const left = rect.left;
    const activeTooltip = document.querySelector(".tooltip_active");
    if (activeTooltip) {
      activeTooltip.remove();
    } 
    
    this.insertAdjacentHTML("afterEnd", `<div class="tooltip tooltip_active" style="left: ${left}px; top: ${top}px"> ${title} </div>`);
  })
}