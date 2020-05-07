//selectors
const todoInput = document.querySelector(".todo__input");
const todoButton = document.querySelector(".todo__button");
const todoList = document.querySelector(".todo__list");
const todoFilter = document.querySelector(".todo__filter");
var todos = [];

//Event Listeners
window.addEventListener("DOMContentLoaded",loadTodos);
todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteToggle)
todoFilter.addEventListener("click",onFilter);

//Functions

function addTodo(event){
  //Prevent form from submitting
  event.preventDefault();
  // todo div
  if(todoInput.value === ""){
    alert("Todo item can not be null!");
    return;
  }
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo__div");

  //toggle button
  const toggleBtn = document.createElement("button");
  toggleBtn.innerHTML = "<i class='fas fa-check'></i>";
  toggleBtn.classList.add("todo__togglebtn");
  todoDiv.appendChild(toggleBtn);

  //create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo__item");
  todoDiv.appendChild(newTodo);

  //save to local storage
  saveLocal(todoInput.value,false);

  //delete button 
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "<i class='fas fa-trash'></i>";
  deleteBtn.classList.add("todo__deletebtn");
  todoDiv.appendChild(deleteBtn);

  //append to list
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function deleteToggle(event){
  const item = event.target;
  if(item.classList[0] === "todo__deletebtn"){
    const todoDiv = item.parentElement;
    todoDiv.classList.add("todo__div--fall");
    let todo = todoDiv.children[1].innerText;
    removeLocal(todo);
    todoDiv.addEventListener("transitionend",()=>todoDiv.remove());
  }

  if(item.classList[0] === "todo__togglebtn"){
    const todoDiv = item.parentElement;
    todoDiv.classList.toggle("todo__div--completed");
    let todo = todoDiv.children[1].innerText;
    updateLocal(todo);
  }
}

function onFilter(event){
  const todos = todoList.children;
  for(let i = 0; i< todos.length; i++){
    let todo = todos[i];
    switch(event.target.value){
      case "all":
        todo.style.display = "flex";
        break;
      break;
      case "completed":
        if(todo.classList.contains("todo__div--completed")){
          todo.style.display = "flex";
        }
        else{
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if(todo.classList.contains("todo__div--completed")){
          todo.style.display = "none";
        }
        else{
          todo.style.display = "flex";
        }
        break;
      default:
    }
  }
}

function saveLocal(todo,done){
  todos.push({"task":todo,"isdone":done});
  localStorage.setItem("todolist",JSON.stringify(todos));
}

function removeLocal(todo){
  //delete string todo in the todolist
  let index;
  for(let i=0;i<todos.length;i++){
    if(todos[i]["task"] === todo)
      index = i;
  }
  todos.splice(index,1);
  localStorage.setItem("todolist",JSON.stringify(todos));
}

function updateLocal(task){

  todos.forEach((todo)=>{
    if(todo["task"] === task){
      todo["isdone"] = !todo["isdone"];
      localStorage.setItem("todolist",JSON.stringify(todos));
      return;
    }
  });
}

function loadTodos(){
  //load the list if exists
  if(localStorage.getItem("todolist")){
    todos = JSON.parse(localStorage.getItem("todolist"));
  }
  //display the list
  todos.forEach(({task,isdone})=>{
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo__div");
  
    //toggle button
    const toggleBtn = document.createElement("button");
    toggleBtn.innerHTML = "<i class='fas fa-check'></i>";
    toggleBtn.classList.add("todo__togglebtn");
    todoDiv.appendChild(toggleBtn);
  
    //create li
    const newTodo = document.createElement("li");
    newTodo.innerText = task;
    newTodo.classList.add("todo__item");
    todoDiv.appendChild(newTodo);
  
    //delete button 
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "<i class='fas fa-trash'></i>";
    deleteBtn.classList.add("todo__deletebtn");

    if(isdone){
      todoDiv.classList.toggle("todo__div--completed");
    };
    todoDiv.appendChild(deleteBtn);
  
    //append to list
    todoList.appendChild(todoDiv);
  });
}
