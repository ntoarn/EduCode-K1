// Input:
let km = parseFloat(prompt("Nhập số km:"))

function taxiBill(km) {
    if( km < 0 ) {
        document.writeln(`Số km không hợp lệ `)
        return
    } else if( km <= 1){
        document.writeln(`Số tiền cần trả: 10000đ`)
        return
    } else if( 1 < km && km <= 30){
        document.writeln(`Số tiền cần trả cho ${km} km là: ${ 10000 + (km - 1)*8000 }`)
        return;
    } else {
        document.writeln(`Số tiền cần trả cho ${km} km là: ${ 10000 +  (29 * 8000) + (km - 30) * 7000}`)
        // console.log(km)
        return
    } 
   
  }
taxiBill(km)
  // Test:
//   taxiBill(0.1); // Output: Số tiền cần trả: 10000đ
//   taxiBill(1); // Output: Số tiền cần trả: 10000đ
//   taxiBill(10); // Output: Số tiền cần trả: 82000đ
//   taxiBill(-5); // Output: Số km không hợp lệ
//   taxiBill("abc"); // Output: Số km không hợp lệ