const a = parseFloat(prompt("Nhập a:"))
const b = parseFloat(prompt("Nhập b:"))
function isSameSign(a, b) {
    if(a >= 0 && b >= 0){
        return true;
    }else if (a <= 0 && b <= 0 ){
        return true
    }
    return false
    // Viết logic kiểm tra 2 số cùng dấu ở đây
  }
  document.writeln(isSameSign(a, b))
  // Test cases
//   isSameSign(10, 20); // true
//   isSameSign(-10, -20); // true
//   isSameSign(10, -20); // false