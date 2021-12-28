const login = document.getElementsByName("login");
const password = document.getElementsByName("password");
const button = document.getElementById("signin__btn");
const welcome = document.getElementById("welcome");
const signin = document.getElementById("signin");

function userWelcome(id) {
  signin.classList.remove("signin_active");
  welcome.classList.add("welcome_active");
  const userId = document.getElementById("user_id");
  userId.textContent = id;
}

if (localStorage.id) {
  userWelcome(localStorage.id);
}

button.addEventListener("click", function(event) {
  event.preventDefault();

  let xhr = new XMLHttpRequest();
  const formData = new FormData(document.getElementById("signin__form"));
  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");

  xhr.addEventListener("load", function() {
    console.log(this.responseText);
    const response = JSON.parse(this.responseText);
    if (response.success === true) {
      userWelcome(response.user_id);
      localStorage.id = response.user_id;
    } else {
      alert("Неверный логин/пароль");
    }
  })
  xhr.send(formData);
})