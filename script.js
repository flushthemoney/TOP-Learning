const input1 = document.querySelector("#operand1");
const input2 = document.querySelector("#operand2");
const main = document.querySelector("#main");
const enterButton = document.querySelector("#enter-button");
const output = document.querySelector("#output");
let dropdownMenu = document.querySelector("#Operations-Dropdown");

function calculate() {
  let selectedFunction = dropdownMenu.value;
  switch (selectedFunction) {
    case "a":
      add(parseFloat(input1.value), parseFloat(input2.value));
      break;
    case "s":
      subtract(parseFloat(input1.value), parseFloat(input2.value));
      break;
    case "m":
      multiply(parseFloat(input1.value), parseFloat(input2.value));
      break;
  }
}

function add(a, b) {
  let x = a + b;
  output.textContent = x;
}

function subtract(a, b) {
  let x = a - b;
  output.textContent = x;
}

function multiply(a, b) {
  let x = a * b;
  output.textContent = x;
}

enterButton.addEventListener("click", calculate);
