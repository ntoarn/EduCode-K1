// Cho trước mảng các số nguyên, hãy viết hàm sortArrNumber(arr) sắp xếp mảng theo thứ tự tăng dần mà không sử dụng phương thức sort().

const number = [4, 2, 7, 6, 5, 8, 2, 1];

function sortArrNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                arr[i] = arr[i] + arr[j]
                arr[j] = arr[i] - arr[j]
                arr[i] = arr[i] - arr[j]
            }
        }
    }
    return arr
    // Xử lý và in ra kết quả
}

const result = sortArrNumber(number);
console.log(result); // [1,2,2,4,5,6,7,8]