const arrayNumber = [1, 2, 3, 4, 3, 2, 1];
function checkSymmetricalArr(arr) {
    for(let i = 0 ; i < arr.length / 2 ;i++){
        if(arr[i] !== arr[arr.length - 1 - i]){
            return false;
        }
        if(arr.length === 1){
            console.log(` báo là Mảng có 1 phần tử, không kiểm tra được.`)
            return
        }
        if(!Array.isArray(arr)){
            console.log(`báo là Dữ liệu không hợp lệ.`)
            return
        }
    }
    return true;
  // Xử lý logic
}
const result = checkSymmetricalArr(arrayNumber);
console.log(result); //true