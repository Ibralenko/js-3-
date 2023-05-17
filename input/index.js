const elem = document.getElementById("numbers");
const button = document.querySelector(".button");
button.addEventListener("click", count);

function count() {
  let number = elem.value;
  let result = Math.pow(number, 2);
  document.getElementById("empty").value = result;
}
