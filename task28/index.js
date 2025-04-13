// Viết hàm sắp xếp tuổi giảm dần
// Thực hiện viết hàm sortUsersByAgeDesc đê in ra danh sách người dùng có độ tuổi từ cao xuống thấp.

// Input:

const listUser = [
  { name: "Nguyễn Văn A", age: 18 },
  { name: "Trần Thị B", age: 22 },
  { name: "Lê Văn C", age: 30 },
  { name: "Phạm Thị D", age: 25 },
  { name: "Hoàng Văn E", age: 20 },
  { name: "Đỗ Thị F", age: 27 },
  { name: "Bùi Văn G", age: 35 },
  { name: "Vũ Thị H", age: 24 },
  { name: "Ngô Văn I", age: 29 },
  { name: "Dương Thị K", age: 32 },
];

function sortUsersByAgeDesc(arr) {
  // Xử lý và in ra kết quả
  return arr.sort((a , b) =>{
    if(a.age > b.age){
        return -1
    }
  },{})
}
// Output:
console.log(sortUsersByAgeDesc(listUser))
//
