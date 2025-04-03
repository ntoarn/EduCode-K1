function cleanFalsyValues(arr) {
    // Xử lý và in ra kết quả
    const newArr = []
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i]){
            newArr.push(arr[i])
        }
    }
    return newArr
  }
  
  // Test
 document.writeln(cleanFalsyValues([1, 0, "", null, "hello", undefined, NaN, 2, 3]))
 ; // Output: [1, "hello", 2, 3]

//  document.writeln(`----------------------------------------------------------------`)

 function filterEvenNumbers(arr) {
    const oddNumbers = []
    for(let i =0 ; i < arr.length; i++){
        if( i % 2 == 1){
            oddNumbers.push(arr[i])
        }
    }
    return oddNumbers
    // Xử lý và in ra kết quả
  }
  
  // Test
  
 console.log( filterEvenNumbers([1, 2, 3, 4, 5, 6])) ; // Output: [2, 4, 6]
//   filterEvenNumbers([1, 3, 5, 7]) ; // Output: []
//   filterEvenNumbers([]) ; // Output: []
//   filterEvenNumbers([-2, -1, 0, 1, 2]) ; // Output: [-2, 0, 2]

function filterLongStrings(arr) {
    const longString = []
    for(let i = 0; i < arr.length ; i++){
        if(arr[i].length > 5 ){
            longString.push(arr[i])
        }
    }
    return longString
	// Xử lý và in ra kết quả
}

// Test
console.log(filterLongStrings(["hello", "world", "javascript", "nodejs"]))
; // Output: ["javascript", "nodejs"]
filterLongStrings(["hi", "hello world", "a b c", "goodbye!!"]); //Output: ["hello world", "goodbye!!"]
filterLongStrings(["hi", "bye", "yes"]); //Output: []


function findMinMaxAverage(arr) {
    let max = arr[0];
    let maxIndex = 0
    let min = arr[0];
    let minIndex = 0
    let sum = 0
    for(let i =0 ; i < arr.length; i++) {
        if(arr[i] > max){
            max = arr[i];
            maxIndex = i
        }
        if(arr[i] < min){
            min = arr[i];
            minIndex = i
        }
        if(Math.sqrt(i) * Math.sqrt(i) == i){
            
        }
    }
    return { max , maxIndex, min, minIndex}
	// Xử lý và in ra kết quả
}

// Test
console.log(findMinMaxAverage([3, 1, 4, 1, 5, 9, 2, 6])); // Output: {max: 9, maxIndex: 5, min: 1, minIndex: 1, primeAverage: 3.25 }
findMinMaxAverage([5, 5, 2, 2, 1]); // Output: {max: 5, maxIndex: 0, min: 1, minIndex: 4, primeAverage: 3.5 }
findMinMaxAverage([-3, 7, -8, 11, 0]); // Output: {max: 11, maxIndex: 3,min: -8, minIndex: 2,primeAverage: 9 }