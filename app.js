let todoList = [];
function addTodo() {
  const todoInput = document.getElementById("todoInput");
  const todoValue = todoInput.value.trim();
  if (todoValue !== "") {
    todoList.push(todoValue);
    render();
    todoInput.value = "";
  }
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  render();
}

function render() {
  const todoListContainer = document.getElementById("todoList");
  todoListContainer.innerHTML = "";

  todoList.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deleteTodo(index);
    deleteButton.style.marginLeft = "10px";
    deleteButton.style.marginBottom = "10px";
    li.appendChild(deleteButton);
    todoListContainer.appendChild(li);
    deleteButton.style.color = "white";
    deleteButton.style.backgroundColor = "red";
    deleteButton.style.border = "none";
    deleteButton.style.padding = "5px";
    deleteButton.style.borderRadius = "2px";
    deleteButton.style.fontWeight = "700";
  });
}
