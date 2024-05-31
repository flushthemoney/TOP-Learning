const incBtn = document.querySelector("#inc");
const resetBtn = document.querySelector("#res");
const decBtn = document.querySelector("#dec");
let count = 0;
let counter = document.querySelector("h1");

incBtn.onclick = function () {
  count++;
  counter.textContent = count;
};

decBtn.onclick = function () {
  count--;
  counter.textContent = count;
};

resetBtn.onclick = function () {
  count = 0;
  counter.textContent = count;
};
