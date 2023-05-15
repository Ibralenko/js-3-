const elements = document.querySelectorAll(".sum");
let sum1 = elements[0].innerText.slice(0, -4);
let sum2 = elements[1].innerText.slice(0, -4);
let sum3 = elements[2].innerText.slice(0, -4);
let sum4 = elements[3].innerText.slice(0, -4);
let price1 = Number(sum1);
let price2 = Number(sum2);
let price3 = Number(sum3);
let price4 = Number(sum4);

let result = price1 + price2 + price3 + price4;

document.getElementById("result").innerHTML = String(result) + " руб.";
