"use strict";

const taskForm = document.getElementById("tasks__form");
const taskList = document.getElementById("tasks__list");
const taskInput = document.getElementById("task__input");
const taskRemove = Array.from(document.querySelectorAll("task__remove"));

taskForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  if (taskInput.value) {
    taskList.insertAdjacentHTML("afterend", `<div class="task"> <div class="task__title"> ${taskInput.value} </div> <a href="#" class="task__remove">&times;</a> </div>`);

    taskInput.value = "";

    const task = document.querySelector(".task");

    task.addEventListener("click", function(event) {
      event.preventDefault();
      this.remove();
    });
  }
});