const formElement = document.getElementById("form")
const nameElement = document.getElementById("name")
const toanELement = document.getElementById("toan")
const tiengAnhElement = document.getElementById("tienganh")
const khoaHocElement = document.getElementById("khoahoc")
const tbodyElemtn = document.getElementById("tBody")
const btnAddElement = document.getElementById("add-btn")
const searchElement = document.getElementById("searchName")
const sortElement = document.getElementById("sortSelect")
const filterElement = document.getElementById("filterSelect")
const errNameElement = document.getElementById("err-name")
const errDiemToanElement = document.getElementById("err-diemToan")
const errDiemTiengAnhElement = document.getElementById("err-diemTiengAnh")
const errDiemKhoaHocElement = document.getElementById("err-diemKhoaHoc")
let dataStudent = JSON.parse(localStorage.getItem("student") || "[]")
let updateStudent = {
    id : null
}
function randomId(length, prefix){
    let char = "qwerdgfhsfhertfergvdgwe0123456789"
    let newId = ""
    for(let i = 0; i < length; i++){
        let random = Math.floor(Math.random() * char.length)
        newId += char[random]
    }
    return `${prefix}${newId}`
}
console.log(randomId((3), "student-"))
function handlView (student){
    tbodyElemtn.innerText = ""
    student.map((item) => {
        const trElement = document.createElement("tr")
        trElement.innerHTML = `
           <td>${item.id}</td>
           <td>${item.name}</td>
           <td>${item. toan}</td>
           <td>${item.tienganh}</td>
           <td>${item.khoahoc}</td>
           <td>${item.diemTB}</td>
           <td>${item.hocLuc}</td>
           <td>
                <button onclick="update('${item.id}')" class="btn btn-info">Cập nhập</button>     
                <button onclick="remove('${item.id}')" class="btn btn-danger">Xóa</button>     
           </td>
        `
        tbodyElemtn.appendChild(trElement)
    })
}
handlView(dataStudent)

formElement.addEventListener("submit", function (e){
    e.preventDefault()
    errNameElement.innerText = ""
    errDiemToanElement.innerText = ""
    errDiemTiengAnhElement.innerText = ""
    errDiemKhoaHocElement.innerText = ""

    nameElement.classList.remove("input-error")
    toanELement.classList.remove("input-error")
    tiengAnhElement.classList.remove("input-error")
    khoaHocElement.classList.remove("input-error")

    let valid = true
    if(nameElement.value === "" || nameElement.value == null){
        errNameElement.innerText = "Không được bỏ trống"
        nameElement.classList.add("input-error")
        valid = false
    }
    if(toanELement.value === "" || toanELement.value == null){
        errDiemToanElement.innerText = "Không được bỏ trống"
        toanELement.classList.add("input-error")
        valid = false
    }else if(toanELement.value < 0 || toanELement.value > 10){
        errDiemToanElement.innerText = "Nhập sai giá trị"
        toanELement.classList.add("input-error")
        valid = false
    }
    if(tiengAnhElement.value === "" || tiengAnhElement.value == null){
        errDiemTiengAnhElement.innerText = "Không được bỏ trống"
        tiengAnhElement.classList.add("input-error")
        valid = false
    }else if(tiengAnhElement.value < 0 || tiengAnhElement.value > 10){
        errDiemTiengAnhElement.innerText = "Nhập sai giá trị"
        tiengAnhElement.classList.add("input-error")
        valid = false
    }
    if(khoaHocElement.value === "" || khoaHocElement.value == null){
        errDiemKhoaHocElement.innerText = "Không được bỏ trống"
        khoaHocElement.classList.add("input-error")
        valid = false
    }else if(khoaHocElement.value < 0 || khoaHocElement.value > 10){
        errDiemKhoaHocElement.innerText = "Nhập sai giá trị"
        khoaHocElement.classList.add("input-error")
        valid = false
    }
    if(!valid) return;
  if(updateStudent.id){
      const data = {
          ... updateStudent,
          name: nameElement.value,
          toan:  toanELement.value,
          tienganh: tiengAnhElement.value,
          khoahoc: khoaHocElement.value,
          diemTB: diemTrungBinh(toanELement.value, tiengAnhElement.value, khoaHocElement.value),
          hocLuc: hocluc(toanELement.value, tiengAnhElement.value, khoaHocElement.value)
      }
      dataStudent = dataStudent.map((item) => {
          if(item.id === updateStudent.id){
              return data
          }
          return item
      })
      handlView(dataStudent)
      localStorage.setItem("student", JSON.stringify(dataStudent))
  } else {
      const data = {
          id: randomId((3), "student-"),
          name: nameElement.value,
          toan:  toanELement.value,
          tienganh: tiengAnhElement.value,
          khoahoc: khoaHocElement.value,
          diemTB: diemTrungBinh(toanELement.value, tiengAnhElement.value, khoaHocElement.value),
          hocLuc: hocluc(toanELement.value, tiengAnhElement.value, khoaHocElement.value)
      }
      dataStudent.push(data)
  }
    resetForm()
    handlView(dataStudent)
    localStorage.setItem("student", JSON.stringify(dataStudent))
})
function diemTrungBinh(toan, tienganh, khoahoc){
    return ((+toan + +tienganh + +khoahoc) / 3).toFixed(2)
}
function hocluc(toan, tienganh, khoahoc){
    const diemTB = ((+toan + +tienganh + +khoahoc) / 3).toFixed(2);
    if(diemTB >= 8 ){
        return "Giỏi"
    } else if(diemTB >= 6.5){
        return "Khá"
    } else if(diemTB >= 5 ){
        return "Trung bình"
    } else {
        return "Yếu"
    }
}

function remove(id){
    console.log(id)
    if (window.confirm("Are you sure?")){
        dataStudent =dataStudent.filter((item) => item.id !== id)
        handlView(dataStudent)
        localStorage.setItem("student", JSON.stringify(dataStudent))
    }
}

function  update(id){
    console.log(id)
    btnAddElement.innerText = "Cập nhập"
    updateStudent = dataStudent.find((item) => item.id === id)
    nameElement.value = updateStudent.name
    toanELement.value = updateStudent.toan
    tiengAnhElement.value = updateStudent.tienganh
    khoaHocElement.value = updateStudent.khoahoc

    nameElement.setAttribute("readonly", true)
}

function resetForm(){
    formElement.reset()
    btnAddElement.innerText = "Thêm mới "
    nameElement.removeAttribute("readonly")
    updateStudent = {
        id : null
    }
}

searchElement.addEventListener("input" ,function (e){
    const value = e.target.value.toLowerCase().normalize("NFC")
    const data = dataStudent.filter((item) => item.name.toLowerCase().includes(value))
    handlView(data)
})

sortElement.addEventListener("change", function (e){
    const value = e.target.value
    let data = [...dataStudent]
    if(value === "asc"){
        data.sort((a,b) => a.diemTB - b.diemTB)
    }else if(value === "desc"){
        data.sort((a,b) => b.diemTB - a.diemTB)
    }
    handlView(data)
})

filterElement.addEventListener("change", function (e){
    const value = e.target.value
    if(!value){
        handlView(dataStudent);
        return
    }
    const data = dataStudent.filter((item) => item.hocLuc === value)
    handlView(data)
})
console.log(dataStudent)