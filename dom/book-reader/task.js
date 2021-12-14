"use strict";

const fontSizes = Array.from(document.querySelectorAll(".font-size"));

const bookControlColor = document.querySelector(".book__control_color");

const textColors = Array.from(bookControlColor.querySelectorAll(".color")); 

const bookControlBackground = document.querySelector(".book__control_background");

const backgroundColors = Array.from(bookControlBackground.querySelectorAll(".color")); 

const book = document.getElementById("book");

function fontHandler(event) {
  const activeFont = document.querySelector(".font-size_active");
  activeFont.classList.remove("font-size_active");
  this.classList.add("font-size_active");
  event.preventDefault();

  if (this.classList.contains("font-size_small")) {
    if (book.classList.contains("book_fs-big")) {
      book.classList.remove("book_fs-big");
    }
    book.classList.add("book_fs-small");
  } else if (this.classList.contains("font-size_big")) {
    if (book.classList.contains("book_fs-small")) {
      book.classList.remove("book_fs-small");
    }
    book.classList.add("book_fs-big");
  } else {
    if (book.classList.contains("book_fs-big")) {
      book.classList.remove("book_fs-big");
    }
    if (book.classList.contains("book_fs-small")) {
      book.classList.remove("book_fs-small");
    }
  }
}

for (let fontSize of fontSizes) {
  fontSize.addEventListener("click", fontHandler);
}

for (let textColor of textColors) {
  textColor.addEventListener("click", textColorHandler);
}

for (let backgroundColor of backgroundColors) {
  backgroundColor.addEventListener("click", backgroundColorHandler);
}

function textColorHandler(event) {
  const activeTextColor = bookControlColor.querySelector(".color_active");
  activeTextColor.classList.remove("color_active");
  this.classList.add("color_active");
  event.preventDefault();

  if (this.dataset.textColor === "gray") {
    if (book.classList.contains("book_color-whitesmoke")) {
      book.classList.remove("book_color-whitesmoke");
    }
    if (book.classList.contains("book_color-black")) {
      book.classList.remove("book_color-black");
    }
    book.classList.add("book_color-gray");
  } else if (this.dataset.textColor === "whitesmoke") {
    if (book.classList.contains("book_color-gray")) {
      book.classList.remove("book_color-gray");
    }
    if (book.classList.contains("book_color-black")) {
      book.classList.remove("book_color-black");
    }
    book.classList.add("book_color-whitesmoke");
  } else {
    if (book.classList.contains("book_color-gray")) {
      book.classList.remove("book_color-gray");
    }
    if (book.classList.contains("book_color-whitesmoke")) {
      book.classList.remove("book_color-whitesmoke");
    }
    book.classList.add("book_color-black");
  }
}

function backgroundColorHandler(event) {
  const activebackgroundColor = bookControlBackground.querySelector(".color_active");
  activebackgroundColor.classList.remove("color_active");
  this.classList.add("color_active");
  event.preventDefault();

  if (this.dataset.bgColor === "gray") {
    if (book.classList.contains("book_bg-white")) {
      book.classList.remove("book_bg-white");
    }
    if (book.classList.contains("book_bg-black")) {
      book.classList.remove("book_bg-black");
    }
    book.classList.add("book_bg-gray");
  } else if (this.dataset.bgColor === "white") {
    if (book.classList.contains("book_bg-gray")) {
      book.classList.remove("book_bg-gray");
    }
    if (book.classList.contains("book_bg-black")) {
      book.classList.remove("book_bg-black");
    }
    book.classList.add("book_bg-white");
  } else {
    if (book.classList.contains("book_bg-gray")) {
      book.classList.remove("book_bg-gray");
    }
    if (book.classList.contains("book_bg-white")) {
      book.classList.remove("book_bg-white");
    }
    book.classList.add("book_bg-black");
  }
}