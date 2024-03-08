const list = document.querySelector("#shoppingList");
const addButton = document.querySelector("#addbtn");
let removeButtons = document.querySelectorAll("#shoppingList button");

addButton.addEventListener("click", () => {
  addItem(document.querySelector("#input-box").value);
  removeButtons = document.querySelectorAll("#shoppingList button");
});

removeButtons.forEach((removeButton) => {
  removeButton.addEventListener("click", alert("deleted"));
});

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
