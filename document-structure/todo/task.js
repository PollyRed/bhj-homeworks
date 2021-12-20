"use strict";

const taskForm = document.getElementById("tasks__form");
const taskList = document.getElementById("tasks__list");
const taskInput = document.getElementById("task__input");

taskForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  if (taskInput.value.trim()) {
    taskList.insertAdjacentHTML("afterend", `<div class="task"> <div class="task__title"> ${taskInput.value} </div> <a href="#" class="task__remove">&times;</a> </div>`);

    taskInput.value = "";

    const task = document.querySelector(".task");
    const taskRemove = task.querySelector(".task__remove");

    taskRemove.addEventListener("click", function(event) {
      event.preventDefault();
      task.remove();
    });
  }
});