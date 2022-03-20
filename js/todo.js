const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const toDoCont = document.getElementById("todo-container")

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const div = event.target.parentElement;
  div.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(div.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const div = document.createElement("div");
  div.id = newTodo.id;
  div.className = "todo-card"
  div.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.className = "delete-btn"
  button.addEventListener("click", deleteToDo);
  div.appendChild(button);
  toDoCont.appendChild(div);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}