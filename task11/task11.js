const a = parseFloat(prompt("Nhập cạnh a:"))
const b = parseFloat(prompt("Nhập cạnh b:"))
const c = parseFloat(prompt("Nhập cạnh c:"))
function isTriangle(a, b, c) {
    // Viết logic trả về true hoặc false ở đâyđây
    if (a <= 0 || b<= 0 || c <= 0 ) {
        return false
    }else if (a + b <= c ) {
        return false
    }else if(a + c <= b){
        return false
    }else if(b + c <= a){
        return false
    }
    return true
  }
  console.log(isTriangle(a, b, c))
//   // Test cases:
//   console.log(isTriangle(3, 4, 5)); // true
//   console.log(isTriangle(3, 4, 7)); // false