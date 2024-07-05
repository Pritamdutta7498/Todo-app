const todoName = document.querySelector(".js-todo-name");
const todoDate = document.querySelector(".js-todo-date");
let todoElementList = document.querySelector(".js-todo-list");

function addTodo() {
  const todoNameValue = todoName.value;
  const todoDateValue = todoDate.value;
  // console.log(todoNameValue, todoDateValue);

   // Check if the input fields are empty
   if (todoNameValue === "" || todoDateValue === "") {
    alert("Please fill in both the todo name and date. Try again.");
    return;
   }

  const todoItem = {
    name: todoNameValue,
    date: todoDateValue,
    completed: false,
  };

  let todoList = JSON.parse(localStorage.getItem("todoList"));
  if (!Array.isArray(todoList)) {
    todoList = [];
  }
  todoList.push(todoItem);

  // console.log(todoList);

  localStorage.setItem("todoList", JSON.stringify(todoList));

  todoName.value = "";
  todoDate.value = "";
  renderTodoList();
}

function renderTodoList() {
  let todoList = JSON.parse(localStorage.getItem("todoList"));
  todoElementList.innerHTML = "";

  // sets the text if there is no todoList
  if (!todoList || todoList.length === 0) {
    todoElementList.innerHTML = `<h2 class="empty-todo-text">Add some Todo to see your todo list</h2>`;
    return;
  }

  todoList.forEach((todo, i) => {
    let todoElementData = `
    <div class='todo-list-data'> 
      <span>${todo.name}</span>
      <span>${todo.date}</span>

       <button onclick="toggleComplete(${i})" class="todo-complete-btn 
          ${todo.completed ? "green-btn" : "blue-btn"}">
          ${todo.completed ? "Completed" : "Complete"} 
      </button>


      <button onclick="deleteTodo(${i})" class="deleteBtn">Delete
      </button>
    </div>
    `;
    // append each
    todoElementList.innerHTML += todoElementData;
  });
}
//todo completed
function toggleComplete(i) {
  let todoList = JSON.parse(localStorage.getItem("todoList"));
  // console.log(todoList);
  // console.log(i);
  if (!todoList[i].completed) {
    todoList[i].completed = true;
    // Show the modal window with the GIF
    toggleModal();
    // Change the button color to green after showing the GIF
    setTimeout(() => {
      const completeButton = document.querySelectorAll(".todo-complete-btn")[i];
      completeButton.classList.remove("blue-btn");
      completeButton.classList.add("green-btn");
    }, 5000);
  }
  // Save the updated todo list to localStorage
  localStorage.setItem("todoList", JSON.stringify(todoList));
  renderTodoList();
}

// Add a modal window element to the HTML
const modalElement = document.createElement("div");
modalElement.className = "modal";
modalElement.innerHTML = `
  <div class="modal-content">
    <img src='./asset/4.gif' alt="modal-blast">
  </div>
`;
document.body.appendChild(modalElement);

// Add a function to toggle the modal window
function toggleModal() {
  const modalElement = document.querySelector(".modal");

  modalElement.classList.toggle("show");
  setTimeout(() => {
    modalElement.classList.remove("show");
  }, 3000);
}

//delete each todo
function deleteTodo(i) {
  let todoList = JSON.parse(localStorage.getItem("todoList"));
  todoList.splice(i, 1);
  localStorage.setItem("todoList", JSON.stringify(todoList));
  renderTodoList();
}

renderTodoList();
