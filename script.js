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

  let todoList= JSON.parse(localStorage.getItem('todoList'));
  if (!Array.isArray(todoList)) {
    todoList = [];
  };
  todoList.push(todoItem);

  console.log(todoList);

  localStorage.setItem("todoList", JSON.stringify(todoList));

  todoName.value = '';
  todoDate.value = '';

}
