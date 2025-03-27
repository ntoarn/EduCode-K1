// Input:
let salary = parseFloat(prompt("Nhập số tiền thu nhập:"))
function taxSalary(salary) {
    let STNT = 0;
    // Xử lý và in ra kết quả
    if( salary <= 11000000){
        document.writeln("Được miễn thuế")
        return
    } else if(salary > 11000000 && salary <= 25000000 ){
        
        STNT = (salary - 11000000) * 0.05
        document.writeln(`Số  tiền thuế bạn phải đóng là: ${STNT}`)
        return
    } else if(  salary > 25000000 && salary <= 50000000 ){
        STNT = (25000000 - 11000000) * 0.05 + ((salary - 25000000) * 0.1)
        document.writeln(`Số  tiền thuế bạn phải đóng là: ${STNT}`)
        return
    } else if(salary > 50000000 && salary <= 80000000 ){
        STNT = (25000000 - 11000000) * 0.05 + (50000000 - 25000000) *0.1 + (salary - 50000000) * 0.20
        document.writeln(`Số  tiền thuế bạn phải đóng là: ${STNT}`)
        return
    } else if( salary > 80000000 ){
        // STNT = (25000000 - 11000000) * 0.05 + (50000000 - 25000000) *0.1 + (80000000 - 50000000) * 0.20 + (salary * 0.30)
        document.writeln(`Số  tiền thuế bạn phải đóng là: ${salary * 0.30}`)
        return
    }
  }
  
  taxSalary(salary)
  // Output:
//   taxSalary(10000000); // 0
//   taxSalary(15000000); // 200.000
//   taxSalary(30000000); // 1.200.000
//   taxSalary(100000000); // 17.200.000
//   taxSalary(-10000000); // Thu nhập không hợp lệ
//   taxSalary("abc"); // Thu nhập không hợp lệ