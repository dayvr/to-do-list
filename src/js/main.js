// Add functionality to the to-do list
// 1. Add a new item to the list
// 2. Mark an item as complete
// 3. Remove an item from the list

// 1. Add a new item to the list
// 1.1. Select the form
const form = document.querySelector("form");
// 1.2. Listen for a submit event
form.addEventListener("submit", (event) => {
  // 1.3. Prevent the default action
  event.preventDefault();
  // 1.4. Select the input
  const input = document.querySelector("input");
  // 1.5. Get the value of the input
  const value = input.value;
  // 1.6. Create a new list item
  const li = document.createElement("li");
  // 1.7. Add the value to the list item
  li.textContent = value;
  // 1.8. Select the list
  const list = document.querySelector("ul");
  // 1.9. Append the list item to the list
  list.appendChild(li);
  // 1.10. Clear the input
  input.value = "";
});

// 2. Mark an item as complete
// 2.1. Select the list
const list = document.querySelector("ul");
// 2.2. Listen for a click event
list.addEventListener("click", (event) => {
  // 2.3. Check if the click was on a list item
  if (event.target.tagName === "LI") {
    // 2.4. Toggle the class
    event.target.classList.toggle("checked");
  }
});

// 3. Remove an item from the list
// 3.1. Select the list
// const list = document.querySelector('ul');
// 3.2. Listen for a click event
list.addEventListener("click", (event) => {
  // 3.3. Check if the click was on a list item
  if (event.target.tagName === "LI") {
    // 3.4. Remove the item
    event.target.remove();
  }
});
