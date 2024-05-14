const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addBtn =document.getElementById("addBtn");

 addBtn.addEventListener("click", addTask);

 function addTask(){
    if(inputBox.value === "" ){
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML =inputBox.value;
        listContainer.appendChild(li);
        let editBtn = document.createElement('button');
        editBtn.classList.add("edit-btn");
        editBtn.innerText="edit";
        li.appendChild(editBtn);
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add("delete-btn");
        deleteBtn.innerText="remove";
        li.appendChild(deleteBtn);
        
    }
    inputBox.value = "";
 }