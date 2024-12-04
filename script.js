document.addEventListener("DOMContentLoaded", () => {
  const itemInput = document.getElementById("itemInput");
  const addButton = document.getElementById("addButton");
  const groceryList = document.getElementById("groceryList");

  addButton.addEventListener("click", addItem);
  groceryList.addEventListener("click", handleListClick);

  function addItem() {
      const itemName = itemInput.value.trim();
      if (itemName !== "") {
          const listItem = document.createElement("li");
          listItem.innerHTML = `
              <span>${itemName}</span>
              <span>
                  <button class="edit">Edit</button>
                  <button class="delete">Delete</button>
              </span>
          `;
          groceryList.appendChild(listItem);
          itemInput.value = "";
      }
  }

  function handleListClick(e) {
      if (e.target.classList.contains("edit")) {
          editItem(e.target);
      } else if (e.target.classList.contains("delete")) {
          deleteItem(e.target);
      }
  }

  function editItem(button) {
      const listItem = button.parentElement.parentElement;
      const itemName = listItem.querySelector("span").innerText;
      const newItemName = prompt("Edit item:", itemName);
      if (newItemName !== null && newItemName.trim() !== "") {
          listItem.querySelector("span").innerText = newItemName;
      }
  }

  function deleteItem(button) {
      const listItem = button.parentElement.parentElement;
      groceryList.removeChild(listItem);
  }
});
