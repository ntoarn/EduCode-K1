// Input:
const fruits = [
    "apple",
    "banana",
    "kiwi",
    "kiwi",
    "banana",
    "orange",
    "apple",
    "kiwi",
  ];
  
  function removeDuplicate(arr) {
    const result = [];
    for(i = 0; i< arr.length; i++ ){
        if(!result.includes(arr[i])){
            result.push(arr[i])
        }
    }
    return result
    // Xử lý và in ra kết quả
  }
  
  // Output:
  const result = removeDuplicate(fruits);
  
  console.log(result); // ["apple", "banana", "kiwi", "orange"]
// const fruits = [
//     "apple",
//     "banana",
//     "kiwi",
//     "kiwi",
//     "banana",
//     "orange",
//     "apple",
//     "kiwi",
//   ];
  
//   function removeDuplicate(arr) {
//     // Xử lý và in ra kết quả
//   }
  
//   const result = fruits.reduce((acc, fruits) => {
//     if(!acc.includes(fruits)) {
//         acc.push(fruits)
//     }
//      return acc;
//   }, []);
  
//   console.log(result); // ["apple", "banana", "kiwi", "orange"]