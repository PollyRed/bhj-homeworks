"use strict";

const products = Array.from(document.querySelectorAll(".product"));
const cart = document.querySelector(".cart__products");

for (let product of products) {
  const id = product.dataset.id;
  const src = product.querySelector(".product__image").getAttribute("src");

  const quantityDec = product.querySelector(".product__quantity-control_dec");
  const quantityInc = product.querySelector(".product__quantity-control_inc");
  const quantityValue = product.querySelector(".product__quantity-value");
  const productAdd = product.querySelector(".product__add");

  quantityDec.addEventListener("click", function() {
    if (+quantityValue.textContent > 1) {
      --quantityValue.textContent;
    }
  });

  quantityInc.addEventListener("click", function() {
    ++quantityValue.textContent;
  });

  productAdd.addEventListener("click", function() {
    const cartProducts = Array.from(cart.querySelectorAll(".cart__product"));

    const cartProduct = cartProducts.find(product => product.dataset.id === id);

    if (cartProduct) {
      const cartProductCount = cartProduct.querySelector(".cart__product-count");
      cartProductCount.textContent = +cartProductCount.textContent + +quantityValue.textContent;
      return;
    }

    cart.insertAdjacentHTML("beforeend", `<div class="cart__product" data-id="${id}"> <img class="cart__product-image" src="${src}"> <div class="cart__product-count">${quantityValue.textContent}</div> </div>`);
  })
}