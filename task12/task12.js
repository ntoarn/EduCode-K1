const n = parseFloat(prompt("Nhập số:"))

// Input:
function printSquareNumber(n) {
    // Xử lý và in ra kết quả
    for(let i = 2; i < n; i++){
        if(i * i < n){
            console.log(i * i);
            // return
        }
    }
}
printSquareNumber(n)
//   Output:
//   printSquareNumber(30); // 4 9
//   printSquareNumber(20); // 4 9 16