const list = document.querySelector("#shoppingList");
const inputBox = document.querySelector("#input-box");
const addButton = document.querySelector("#addbtn");
let removeButtons = document.querySelectorAll("#shoppingList button");

function addButtonFunction() {
  addItem(inputBox.value);
  removeButtons = document.querySelectorAll("#shoppingList button");
  removeButtonListener();
  inputBox.value = "";
  inputBox.focus();
}

addButton.addEventListener("click", addButtonFunction);
inputBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addButtonFunction();
  }
});

function removeItem() {
  this.parentNode.remove();
}

function removeButtonListener() {
  for (let button of removeButtons) {
    button.addEventListener("click", removeItem);
  }
}

function addItem(text) {
  const newListItem = document.createElement("div");
  const removeButton = document.createElement("button");
  removeButton.classList.add("removebtn");
  removeButton.textContent = "Remove";

  newListItem.textContent = `${text}`;
  newListItem.appendChild(removeButton);
  newListItem.classList.add("listitem");
  list.appendChild(newListItem);
}

function removeitem(e) {
  e.parentElement.remove();
}
