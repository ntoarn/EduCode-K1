const todoFormElement = document.getElementById("todoForm");
const titleElement = document.getElementById("title");
const descriptionElement = document.getElementById("description");
const btnResetElement = document.getElementById("btn-reset");
const btnAddElement = document.getElementById("add-btn");
const tBodyElement = document.getElementById("tBody");
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
            <p class="${item.status ? "completed" : "pending"}" onclick="toggleStatus('${item.id}')">${item.status ? "Đã hoàn thành" : "Chưa hoàn thành"} </p>
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

todoFormElement.addEventListener("submit", function (event){
    event.preventDefault();
    const todo = {
        id: generateId(4, "todo-"),
        title: titleElement.value,
        description: descriptionElement.value,
        status: false,
    }
    todoSave.push(todo)
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
}
handleViewTodo(todoSave)

function removeTodo(id){
    alert("Bạn chắc chưa???????///???//")
    todoSave = todoSave.filter((item) => item.id !== id)
    handleViewTodo(todoSave)
    localStorage.setItem("todos", JSON.stringify(todoSave))
}
handleViewTodo(todoSave)

function resetForm(){
    todoFormElement.reset()
}
function updateTodo(id){
    btnAddElement.innerText = "Sửa"
    const todo = todoSave.find((item) => item.id === id)
    console.log(todo)
    titleElement.value = todo.title
    descriptionElement.value = todo.description
}