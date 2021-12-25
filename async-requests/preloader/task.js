const loader = document.getElementById("loader");
const items = document.getElementById("items");
let xhr = new XMLHttpRequest();

xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.send();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    loader.classList.remove("loader_active");
    const response = JSON.parse(xhr.responseText);
    const valute = response.response.Valute;

    for (let i in valute) {
      items.insertAdjacentHTML('beforeend', `<div class="item"> <div class="item__code">
      ${valute[i].CharCode}
      </div>
      <div class="item__value">
      ${valute[i].Value}
      </div>
      <div class="item__currency">
      руб.
      </div>
      </div>`);
    }
  }
}