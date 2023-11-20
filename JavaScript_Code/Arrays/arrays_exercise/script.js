// Shopping List Array
let shoppingList = [];

// Function to add an item to the shopping list
function addItem(itemName, price) {
  shoppingList.push({ name: itemName, cost: price, favorite: false });
  displayShoppingList();
}

// Function to remove an item from the shopping list
function removeItem(itemName) {
  shoppingList = shoppingList.filter((item) => item.name !== itemName);
  displayShoppingList();
}

// Function to calculate the total cost of items in the shopping list
function calculateTotalCost() {
  return shoppingList.reduce((total, item) => total + item.cost, 0);
}

// Function to display the shopping list on the web page
function displayShoppingList() {
  const shoppingListContainer = document.getElementById("shoppingList");
  shoppingListContainer.innerHTML = ""; // Clear the previous list

  shoppingList.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - $${item.cost}${
      item.favorite ? " (Favorite)" : ""
    }`;
    shoppingListContainer.appendChild(listItem);
  });

  const totalCostElement = document.createElement("li");
  totalCostElement.textContent = `Total Cost: $${calculateTotalCost()}`;
  shoppingListContainer.appendChild(totalCostElement);
}

// Test the functions
addItem("Apple", 2.5);
addItem("Milk", 1.8);
addItem("Bread", 2.0);
addItem("Chicken", 5.0);

removeItem("Milk");

// Mark Chicken as a favorite item
const [favoriteItem] = shoppingList.filter((item) => item.name === "Chicken");
if (favoriteItem) {
  favoriteItem.favorite = true;
}

displayShoppingList();
