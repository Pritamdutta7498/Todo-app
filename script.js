const todoName = document.querySelector(".js-todo-name");
const todoDate = document.querySelector(".js-todo-date");
const todoElementList = document.querySelector(".js-todo-list");

function addTodo() {
  const todoNameValue = todoName.value;
  const todoDateValue = todoDate.value;
  console.log(todoNameValue, todoDateValue);

  const todoItem = {
    name: todoNameValue,
    date: todoDateValue,
    completed: false,
  };
  let todoList = JSON.parse(localStorage.getItem('todoList'));

  console.log(todoList);

  localStorage.setItem("todoList", JSON.stringify(todoItem));
}
