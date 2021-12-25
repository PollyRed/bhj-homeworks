let xhr = new XMLHttpRequest();
const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    const response = JSON.parse(xhr.responseText);
    const question = response.data.title;
    const answers = response.data.answers;
    pollTitle.innerText = question;

    for (let answer of answers) {
      pollAnswers.insertAdjacentHTML("beforeend", `
			<button class="poll__answer">
				${answer}
            </button>
            `);
    }
    const buttons = Array.from(document.querySelectorAll(".poll__answer"));

    for (let button of buttons) {
      button.addEventListener("click", function() {
        alert("Спасибо, ваш голос засчитан!");
      })
    }
  }
}