const textArea = document.getElementById("editor");
const button = document.getElementById("clear_form");

textArea.addEventListener("input", function() {
  localStorage.editorText = textArea.value;
})

if (localStorage.editorText){
  textArea.value = localStorage.editorText;
}

button.addEventListener("click", function() {
  delete localStorage.editorText;
  textArea.value = "";
})