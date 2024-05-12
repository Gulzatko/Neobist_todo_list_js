const inputBox = document.querySelector("#input-box");
const businessInput = document.querySelector("#business-input");
const personalInput = document.querySelector("#personal-input");
const todoContainer = document.querySelector(".todo-conatiner-ul");


let addTodoBtn = document.querySelector("#add-todo-btn").addEventListener("click", addNewTodo);

function addNewTodo(){
   if(inputBox.value === ""){
    alert("You must type something");
   } else {
    let li = document.createElement("li");
     li.innerHTML =inputBox.value;
     todoContainer.appendChild(li);

     
}
}