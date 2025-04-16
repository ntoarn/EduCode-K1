// Viết hàm trả về các chuỗi chứa từ khóa (Không phân biệt chữ hoa chữ thường)
// Thực hiện viết hàm filterByKeyword để trả về các mảng chứa chuỗi các từ khóa

// Nếu không tìm được phần tử nào thì in ra [].

// Ví dụ:

// Input
const arrayString = ["JavaScript", "java", "Python", "Ruby"];
let keyWord = "ja";

function filterByKeyword(arrayString, keyWord) {
  // Logic bài toán và trả về kết quả
  return arrayString.reduce((acc, cur) => {
    if(cur.toLowerCase().includes(keyWord)){
        acc.push(cur)
    }
    return acc
  },[])
}
// Test
console.log(filterByKeyword(arrayString, keyWord))
; //["JavaScript", "java"]