const popup = document.getElementById("subscribe-modal");
const close = document.querySelector(".modal__close");

const getCookie = (name) => {
  const value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts
    .pop()
    .split(";")
    .shift();
  }
}

if (!getCookie("firstTime")) {
  popup.classList.add("modal_active");

  close.addEventListener("click", function() {
    popup.classList.remove("modal_active");
    document.cookie = 'firstTime=false';
  })
}