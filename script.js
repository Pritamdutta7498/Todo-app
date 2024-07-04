const todoName = document.querySelector(".js-todo-name");
const todoDate = document.querySelector(".js-todo-date");
let todoElementList = document.querySelector(".js-todo-list");

function addTodo() {
  const todoNameValue = todoName.value;
  const todoDateValue = todoDate.value;
  console.log(todoNameValue, todoDateValue);

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
console.log(todoList);

  todoList.forEach((todo, i) => {
    // const div = document.createElement("div");
    // div.className = "todo-list-data";
    // const span = document.createElement("span");
    console.log(todo.name);

   let todoElementData = `
    <div class='todo-list-data'> 
      <span>${todo.name}</span>
      <span>${todo.date}</span>
      <button onclick="deleteTodo(${i})" class="deleteBtn">Delete
      </button>
    </div>
    `;
    // append each
    todoElementList.innerHTML += todoElementData;
    
  });
}


renderTodoList();