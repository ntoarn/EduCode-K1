const a = parseFloat(prompt("Nhập a:"))
const b = parseFloat(prompt("Nhập b:"))
const c = parseFloat(prompt("Nhập c:"))

function sortNumber(a, b, c) {
    let number = [a, b, c]
    for(let i = 0;  i < number.length; i++ ){
        for( let j = i + 1; j < number.length; j++ ){
            if(number[i] > number[j]){
                number[i] = number[i] + number[j]
                number[j] = number[i] - number[j]
                number[i] = number[i] - number[j]
            }
        } 
    }
    return number
  }
console.log(sortNumber(a, b, c))