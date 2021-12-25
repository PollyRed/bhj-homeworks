const form = document.getElementById("form");
const progress = document.getElementById("progress");

form.addEventListener("submit", function(event) {
  let formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");

  xhr.upload.addEventListener("progress", function(event) {
    progress.value = event.loaded / event.total;
  });

  xhr.send(formData);
  event.preventDefault();
});