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
    // Xử lý và in ra kết quả
  }
  
  const result = fruits.reduce((acc, fruits) => {
    acc[fruits] = (acc[fruits] || 0) + 1;
    return acc;
  }, {});
  
  console.log(result); // { apple: 2, banana: 2, kiwi: 3, orange: 1 }