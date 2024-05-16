const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById("addBtn");
const categoryContainer = document.getElementById("category");
const userName = document.getElementById('username');
const option =document.getElementById("options");
const blueSelect = document.getElementById("category1");
const redSelect =document.getElementById("category2")

 addBtn.addEventListener("click", addTask);

blueSelect.addEventListener("click",e=>{
    e.preventDefault();
    blueSelect.classList.add("clicked");
    redSelect.classList.remove("clicked");
    
})
redSelect.addEventListener("click",e=>{
    e.preventDefault();
    redSelect.classList.add("clicked");
    blueSelect.classList.remove("clicked");
     
})
// add task function//
function addTask() {
    if (inputBox.value === "") {
        alert("You must write something!")
    }
    else {
        let span = document.createElement("span");
        span.innerHTML = inputBox.value;
        
        let li = document.createElement("li");
        if(blueSelect.classList.contains("clicked")) {
            blueSelect.appendChild(li);
        } else if(redSelect.classList.contains("clicked")){
            redSelect.appendChild(li);
        }
        li.appendChild(span);
        listContainer.appendChild(li);
        let editBtn = document.createElement('button');
        editBtn.classList.add("edit-btn");
        editBtn.innerText = "edit";
        li.appendChild(editBtn);
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add("delete-btn");
        deleteBtn.innerText = "remove";
        li.appendChild(deleteBtn);
        
    }
    inputBox.value = "";
    saveData();
}


// edit, remove and save buttons  function
listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        const button = e.target;
        const li = button.parentNode;
        const ul = li.parentNode;
       
        if (button.textContent === "remove") {
            ul.removeChild(li);
        } else if (button.textContent ==="edit") {
            const span = li.firstElementChild;
            const input = document.createElement('input');
            input.classList.add("edit-li");
            input.type = 'text';
            input.value = span.textContent;
            li.insertBefore(input,span);
            li.removeChild(span);
            button.classList.toggle("save-btn");
            button.textContent ="save";
            saveData();
           
       } else if (button.textContent === "save") {
            const input = li.firstElementChild;
            const span = document.createElement("span");
            span.textContent = input.value;
            li.insertBefore(span, input);
            li.removeChild(input);
            button.textContent = "edit";
            saveData();
        } 
    } else if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    } 
})

//  saving data in local storage function
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
    
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
    
}
showTask();