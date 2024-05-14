const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", addTask);

function addTask() {
    if (inputBox.value === "") {
        alert("You must write something!")
    }
    else {
        let span = document.createElement("span");
        span.innerHTML = inputBox.value;
        let li = document.createElement("li");
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
}

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
            button.textContent ==="save";
           

        } else if (button.textContent === "save") {
            const input = li.firstElementChild;
            const span = document.createElement("span");
            span.textContent = input.value;
            li.insertBefore(span, input);
            li.removeChild(input);
            button.textContent = "edit";
        }
    }
})