console.log("-----------------------Bài 1--------------------------")

function cleanFalsyValues(arr) {
    // Xử lý và in ra kết quả
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

// Test
console.log(cleanFalsyValues([1, 0, "", null, "hello", undefined, NaN, 2, 3]))

//  document.writeln(`----------------------------------------------------------------`)
console.log("-----------------------Bài 2--------------------------")

function filterEvenNumbers(arr) {
    const oddNumbers = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            oddNumbers.push(arr[i])
        }
    }
    return oddNumbers
    // Xử lý và in ra kết quả
}

// Test
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]
  console.log(filterEvenNumbers([1, 3, 5, 7])) ; // Output: []
  console.log(filterEvenNumbers([])) ; // Output: []
  console.log(filterEvenNumbers([-2, -1, 0, 1, 2])) ; // Output: [-2, 0, 2]
console.log("-----------------------Bài 3--------------------------")

function filterLongStrings(arr) {
    const longString = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 5) {
            longString.push(arr[i])
        }
    }
    return longString
    // Xử lý và in ra kết quả
}

// Test
console.log(filterLongStrings(["hello", "world", "javascript", "nodejs"]))
    ; // Output: ["javascript", "nodejs"]
console.log(filterLongStrings(["hi", "hello world", "a b c", "goodbye!!"])); //Output: ["hello world", "goodbye!!"]
console.log(filterLongStrings(["hi", "bye", "yes"])); //Output: []


console.log("-----------------------Bài 4--------------------------")
// Bài 4
function isPrime(n) {
    if (n < 2) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }

    }
    return true
}
function findMinMaxAverage(arr) {
    let max = arr[0];
    let maxIndex = 0
    let min = arr[0];
    let minIndex = 0
    // let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            maxIndex = i
        }
        if (arr[i] < min) {
            min = arr[i];
            minIndex = i
        }
    }
    const primeNumbers = arr.filter(isPrime)
    // console.log(primeNumbers)
    if (primeNumbers.length === 0) return 0
    const sum = primeNumbers.reduce((acc, val) => acc + val, 0  )
    return { max, maxIndex, min, minIndex, primeAverage: sum / primeNumbers.length }
    // Xử lý và in ra kết quả
}

// Test
console.log(findMinMaxAverage([3, 1, 4, 1, 5, 9, 2, 6])); // Output: {max: 9, maxIndex: 5, min: 1, minIndex: 1, primeAverage: 3.25 }
console.log(findMinMaxAverage([5, 5, 2, 2, 1])); // Output: {max: 5, maxIndex: 0, min: 1, minIndex: 4, primeAverage: 3.5 }
console.log(findMinMaxAverage([-3, 7, -8, 11, 0])); // Output: {max: 11, maxIndex: 3,min: -8, minIndex: 2,primeAverage: 9 }




// Bài 5

// Cho trước một mảng chưa được sắp xếp.
// Hãy sắp xếp lại mảng theo thứ tự tăng dần và loại bỏ toàn bộ giá trị không phải là số hoặc là NaN của mảng.
// Viết hàm insertNumber(arr, num) để chèn số num vào mảng arr mà không làm thay đổi thứ tự tăng dần của mảng.
// Ví dụ:

console.log("-----------------------Bài 5--------------------------")
function insertNumber(arr, num) {
    const newInsertNumber = arr.filter((item) => {
    return typeof item === "number" && !isNaN(item)
    
    })
    if(typeof num === "number" && !isNaN(num)){
        newInsertNumber.push(num)
    }

    for (let i = 0; i < newInsertNumber.length; i++) {
        for(let j = i + 1; j < newInsertNumber.length; j++){
            if(newInsertNumber[i] > newInsertNumber[j]){
                newInsertNumber[i] = newInsertNumber[i] + newInsertNumber[j]
                newInsertNumber[j] = newInsertNumber[i] - newInsertNumber[j]
                newInsertNumber[i] = newInsertNumber[i] - newInsertNumber[j]            
            }
        }
    }
    return newInsertNumber
    // Xử lý và in ra kết quả
}

// Test
console.log(insertNumber([1, 3, 5, 7, 9], 6))
    ; // Output: [1, 3, 5, 6, 7, 9]
console.log(insertNumber([3, "hello", 1, NaN, 4, null], 2)); // Output: [1, 2, 3, 4]
console.log(insertNumber([], 5)); // Output: [5]
console.log(insertNumber([-1, 10, -5, "abc"], -3)); // Output: [-5, -3, -1, 10]
console.log(insertNumber([5, 2, 8], NaN)); // Output: [2, 5, 8]