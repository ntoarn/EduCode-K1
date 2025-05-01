const todoFormElement = document.getElementById("todoForm");
const titleElement = document.getElementById("title");
const descriptionElement = document.getElementById("description");
const btnResetElement = document.getElementById("btn-reset");
const btnAddElement = document.getElementById("add-btn");
const tBodyElement = document.getElementById("tBody");
const errElement = document.getElementById("error")
let todoSave = JSON.parse(localStorage.getItem("todos") || "[]")

function handleViewTodo(todos){
    tBodyElement.innerText = ""
    todos.map(item => {
        let trElement = document.createElement("tr")
        trElement.innerHTML = `
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.description}</td>
            <td>
            <p class="${item.status ? "completed" : "active"}" onclick="toggleStatus('${item.id}')">${item.status ? "Đã hoàn thành" : "Chưa hoàn thành"}</p>
            </td>
            <td>
                <button onclick="updateTodo('${item.id}')" class="btn btn-success">Cập nhập</button>
                <button onclick="removeTodo('${item.id}')" class="btn btn-danger">Xóa</button>
            </td>
        `
        tBodyElement.appendChild(trElement)
    })
}
handleViewTodo(todoSave)
let todoUpdate = {
    id: null
}
todoFormElement.addEventListener("submit", function (event){
    event.preventDefault();
    let message = []
    if (titleElement.value === "" || titleElement.value == null){
        message.push("Không được bỏ trống")
        titleElement.classList.add("input-error")
    }
    if(titleElement.value.length < 5){
        message.push("Phải nhiều hơn 5 kí tự")
        titleElement.classList.add("input-error")

    }
    if(message.length > 0){
        errElement.innerText = message.join(", ")
        titleElement.classList.add("input-error")

        return
    }
    if(todoUpdate.id){
        const todo = {
            ...todoUpdate,
            title: titleElement.value,
            description: descriptionElement.value,
        }
        todoSave = todoSave.map((item) => {
            if(item.id === todoUpdate.id){
                 return todo
            }
            return item
        },{})
        handleViewTodo(todoSave)
    }else {
        const todo = {
            id: generateId(4, "todo-"),
            title: titleElement.value,
            description: descriptionElement.value,
            status: false,
        }
        errElement.innerText = ""
        todoSave.push(todo)
    }
    localStorage.setItem("todos", JSON.stringify(todoSave))
    handleViewTodo(todoSave)
    resetForm()
})


function generateId(length, prefix){
    const listCharaters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let newId = ""
    for( let i =0; i < length ; i++){
        randomId = Math.floor(Math.random() * listCharaters.length)
        newId += listCharaters[randomId]
    }
    return `${prefix}${newId}`
}
generateId(4, "todo-")

function toggleStatus(id){
    todoSave = todoSave.map(item => {
        if(item.id === id){
            item.status = !item.status
        }
        return item
    })
    handleViewTodo(todoSave)
    localStorage.setItem("todos", JSON.stringify(todoSave))
}
handleViewTodo(todoSave)

function removeTodo(id){
    if(window.confirm("Chắc chắn xóa chưa ????????????")){
        todoSave = todoSave.filter((item) => item.id !== id)
        handleViewTodo(todoSave)
        localStorage.setItem("todos", JSON.stringify(todoSave))
    }

}
handleViewTodo(todoSave)

function resetForm(){
    todoFormElement.reset()
    btnAddElement.innerText = "Thêm"
}
function updateTodo(id){
    btnAddElement.innerText = "Sửa"
     todoUpdate = todoSave.find((item) => item.id === id)
    console.log(todoUpdate)
    titleElement.value = todoUpdate.title
    descriptionElement.value = todoUpdate.description
}

function filterTodos(status){
    let todos = []
    if(status === "all"){
        todos = todoSave
    }else if(status === "active"){
        todos = todoSave.filter((item) => item.status === false)
    }else if(status === "completed"){
        todos = todoSave.filter((item) => item.status === true)
    }
    handleViewTodo(todos)
}
