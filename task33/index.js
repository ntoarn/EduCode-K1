// Viết hàm biến đổi mảng các chuỗi "key:value" thành object
// Thực hiện viết hàm convertArrayToObject để biến đổi mảng các chuỗi dạng key:value thành object

// Ví dụ:

// input
// Gợi ý dùng forEach hoặc reduce
const arrayString = ["name:John", "age:30", "city:NY"];

function convertArrayToObject(array) {
  // Logic bài toán và trả về ết quả
  return array.reduce((acc, cur) => {
    if(cur.includes("")){
        [key , value] = cur.split(":")
        acc[key] = value
    }
    return acc
  },{})
}
//Test

console.log(convertArrayToObject(arrayString)); // { name: 'John', age: '30', city: 'NY' }