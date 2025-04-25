
function removeItem(){
    const itemElement = document.getElementsByClassName("item")
    if(itemElement.length > 0){
        itemElement[itemElement.length - 1].remove()
    } else {
        alert("không còn phần tử để xóa")
    }
}
function addItem(){
    const div = document.createElement("div")
    div.classList.add("item")
    const itemElement = document.getElementsByClassName("item")
    div.innerHTML = `Phần tử ${itemElement.length + 1}`

    const list = document.getElementById("list")
    list.appendChild(div)

}



















