// const a = parseFloat(prompt("Nhập a:"))
// const b = parseFloat(prompt("Nhập b:"))
// const c = parseFloat(prompt("Nhập c:"))

// Input:
function findMaxNumber(a, b, c) {
    let n = a
    if (b > n){
        n = b
    }else if (c > n){
        n = c
    }
    return n
  }
  
  // Output:
  document.writeln(findMaxNumber(2, 1, 6))
console.log(findMaxNumber(2, 1, 6))