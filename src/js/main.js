// To do list functionality
// Create a new to do list item
const createToDo = (toDoText) => {
  const toDo = document.createElement("li");
  toDo.classList.add("to-do");
  toDo.innerText = toDoText;
  return toDo;
};

// Mark a to do list item as complete
const completeToDo = (toDo) => {
  toDo.classList.toggle("complete");
};

// Delete a to do list item
const deleteToDo = (toDo) => {
  toDo.remove();
};

// Clear all completed to do list items
const clearCompleted = () => {
  const completedToDos = document.querySelectorAll(".complete");
  completedToDos.forEach((toDo) => {
    toDo.remove();
  });
};
// Filter to do list items by all, active, and completed
const filterToDos = (filter) => {
  const toDos = document.querySelectorAll(".to-do");
  toDos.forEach((toDo) => {
    switch (filter) {
      case "all":
        toDo.style.display = "flex";
        break;
      case "active":
        if (toDo.classList.contains("complete")) {
          toDo.style.display = "none";
        } else {
          toDo.style.display = "flex";
        }
        break;
      case "completed":
        if (toDo.classList.contains("complete")) {
          toDo.style.display = "flex";
        } else {
          toDo.style.display = "none";
        }
        break;
    }
  });
};

// Display the number of active to do list items
const displayActiveToDos = () => {
  const toDos = document.querySelectorAll(".to-do");
  const activeToDos = document.querySelectorAll(".to-do:not(.complete)");
  const activeToDosCount = activeToDos.length;
  const activeToDosText = document.querySelector(".active-to-dos");
  activeToDosText.innerText = `${activeToDosCount} items left`;
};

// Persist to do list items to local storage
const saveToDos = () => {
  const toDos = document.querySelectorAll(".to-do");
  const toDosArray = [];
  toDos.forEach((toDo) => {
    toDosArray.push({
      text: toDo.innerText,
      completed: toDo.classList.contains("complete"),
    });
  });
  localStorage.setItem("toDos", JSON.stringify(toDosArray));
};

// Bonus: Edit a to do list item
const editToDo = (toDo) => {
  toDo.setAttribute("contenteditable", "true");
  toDo.focus();
};
