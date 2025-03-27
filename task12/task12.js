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
    let arr = []
    for(let i = 2; i < Math.sqrt(n); i++){
        if(Math.sqrt(i) * Math.sqrt(i) == i){
            // arr.push(i)
            console.log(i)
        }
        if(i * i >= Math.sqrt(n)){
            // arr.push(i*i)
            console.log(i * i)
        }
    }
}
printSquareNumber(n)