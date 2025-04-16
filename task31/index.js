// Viết hàm đếm số từ trng mảng các câu
// Thực hiện viết hàm countTotalWords đê đếm số lượng các từ trong mảng các chuỗi

// Ví dụ:

// Input

const arrayWords = ["Hello world", "JS is fun", "Arrays and strings"]; // 8

function countTotalWords(arr) {
    return arr.reduce((acc , cur) => {
        return acc + cur.split(" ").length
    }, 0)
}
// Test
console.log(countTotalWords(arrayWords))
countTotalWords(["Hello world", "JS is fun", "Arrays and strings"]);