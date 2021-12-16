"use strict";

const chatWidgetSide = document.querySelector(".chat-widget__side");
const chatWidget = document.querySelector(".chat-widget");
const messages = document.querySelector(".chat-widget__messages");
const messagesContainer = document.querySelector(".chat-widget__messages-container");

chatWidgetSide.addEventListener("click", function(){
  chatWidget.classList.add("chat-widget_active");
});

const input = document.getElementById("chat-widget__input");

const robotMessages = ["Добрый день! До свидания!", "Я не разговариваю с кожаными мешками.", "Уходите, вы мне не нравитесь.", "Вас много, а я одна!", "Ваше сообщение очень важно для нас! До свидания!"];

function getRandomMessage() {
   const robotMessageIndex =  Math.floor(Math.random() * robotMessages.length);
   return robotMessages[robotMessageIndex];
}

function getCurrentTime() {
  const currentDate = new Date();

  return ((currentDate.getHours() < 10)?"0":"") + currentDate.getHours() +":"+ ((currentDate.getMinutes() < 10)?"0":"") + currentDate.getMinutes();
}

function scrollChatToBottom() {
  messagesContainer.scrollTo(0, messagesContainer.scrollHeight);
}

function askQuestion() {
  messages.innerHTML += `
        <div class="message">
          <div class="message__time">${getCurrentTime()}</div>
          <div class="message__text">
            Вы всё ещё тут?
          </div>
        </div>
      `;

      scrollChatToBottom();
}

let delayMessage = setInterval(askQuestion, 30000);

input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {  
    if (input.value != "") {  

      messages.innerHTML += `
        <div class="message message_client">
          <div class="message__time">${getCurrentTime()}</div>
          <div class="message__text">
            ${input.value}
          </div>
        </div>
      `;

      messages.innerHTML += `
        <div class="message">
          <div class="message__time">${getCurrentTime()}</div>
          <div class="message__text">
            ${getRandomMessage()}
          </div>
        </div>
      `;

      input.value = "";

      scrollChatToBottom();

      delayMessage.clearInterval();
      delayMessage = setInterval(askQuestion, 30000);
    }
  }
});