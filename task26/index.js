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
  
//   function countElement(arr) {
//     // Xử lý và in ra kết quả
//   }
  
//   const result = fruits.reduce((acc, fruits) => {
//     acc[fruits] = (acc[fruits] || 0) + 1;
//     return acc;
//   }, {});
  
//   console.log(result); // { apple: 2, banana: 2, kiwi: 3, orange: 1 }
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

function countElement(arr) {
  const result = {}
  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== null){
      for(let j = 0; j < arr.length; j++){
        if(arr[i] === arr[j] ){
          result[arr[i]] = (result[arr[i]] || 0) + 1;
          arr[j] = null;
        }
      }
    }
  }
  return result
  // Xử lý và in ra kết quả
}

const result = countElement(fruits);

console.log(result); // { apple: 2, banana: 2, kiwi: 3, orange: 1 }