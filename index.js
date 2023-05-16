const elements = document.querySelectorAll(".sum");
let elem1 = elements[0].innerText.slice(0, -4);
let elem2 = elements[1].innerText.slice(0, -4);
let elem3 = elements[2].innerText.slice(0, -4);
let elem4 = elements[3].innerText.slice(0, -4);
let price1 = Number(elem1);
let price2 = Number(elem2);
let price3 = Number(elem3);
let price4 = Number(elem4);
let result = price1 + price2 + price3 + price4;
const order = document.querySelector("#result");
order.textContent = String(result) + " руб.";

const button = document.querySelector(".btn-coupon");
button.addEventListener("click", countPrice);

function countPrice() {
  order.textContent = String((result / 100) * 80) + " руб.";
}
