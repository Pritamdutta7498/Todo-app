const todoName = document.querySelector(".js-todo-name");
const todoDate = document.querySelector(".js-todo-date");
let todoElementList = document.querySelector(".js-todo-list");

function addTodo() {
  const todoNameValue = todoName.value;
  const todoDateValue = todoDate.value;
  // console.log(todoNameValue, todoDateValue);

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
  // console.log(todoList);

  /* 
  <button onclick="toggleComplete(${index})" class="todo-complete-btn ${todoItem.completed ? "completed" : "blue-btn"}"> ${todoItem.completed ? "Completed" : "Complete"} </button>
  */
  todoList.forEach((todo, i) => {
    let todoElementData = `
    <div class='todo-list-data'> 
      <span>${todo.name}</span>
      <span>${todo.date}</span>

       <button onclick="toggleComplete(${i})" class="todo-complete-btn 
          ${todo.completed ? "completed" : "blue-btn"}">
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
    // toggleModal();
    // Change the button color to green after showing the GIF
    setTimeout(() => {
      const completeButton =
        document.querySelectorAll(".todo-complete-btn")[i];
      completeButton.classList.remove("blue-btn");
      completeButton.classList.add("completed");
    }, 5000);
  }
  // Save the updated todo list to localStorage
  localStorage.setItem("todoList", JSON.stringify(todoList));
  renderTodoList();
}
//delete each todo
function deleteTodo(i) {
  let todoList = JSON.parse(localStorage.getItem("todoList"));
  todoList.splice(i, 1);
  localStorage.setItem("todoList", JSON.stringify(todoList));
  renderTodoList();
}

renderTodoList();
