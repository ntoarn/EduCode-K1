// Input:
const users = [
    { fullname: "Nguyen Van A", age: 20, address: "LangSon" },
    { fullname: "Nguyen Van B", age: 22, address: "BacGiang" },
    { fullname: "Nguyen Van C", age: 21, address: "HaNoi" },
    { fullname: "Nguyen Van D", age: 22, address: "HaNoi" },
    { fullname: "Nguyen Van E", age: 32, address: "LangSon" },
  ];
  
  function groupBy(arr, key) {
    return arr.reduce((acc, cur) => {
        const value = cur[key]
            if(!acc[value]){
                acc[value] = []
            }
            acc[value].push(cur)
            return acc
    },{})
    // Xử lý và in ra kết quả
  }
  
  // Output:
  const result1 = groupBy(users, "age"); // nhóm theo tuổi
  
  console.log(result1);
  
  // {
  // 	20: [
  // 		{ fullname: "Nguyen Van A", age: 20, address: "LangSon" }
  // 	],
  // 	21: [
  // 		{ fullname: "Nguyen Van C", age: 21, address: "HaNoi" }
  // 	],
  // 	22: [
  // 		{ fullname: "Nguyen Van B", age: 22, address: "BacGiang" },
  // 		{ fullname: "Nguyen Van D", age: 22, address: "HaNoi" }
  // 	],
  // 	32: [
  // 		{ fullname: "Nguyen Van E", age: 32, address: "LangSon" }
  // 	]
  // }
  
  const result2 = groupBy(users, "address"); // nhóm theo địa chỉ
  
  console.log(result2);
  
  // {
  // 	"LangSon": [
  // 		{ fullname: "Nguyen Van A", age: 20, address: "LangSon" },
  // 		{ fullname: "Nguyen Van E", age: 32, address: "LangSon" }
  // 	],
  // 	"BacGiang": [
  // 		{ fullname: "Nguyen Van B", age: 22, address: "BacGiang" }
  // 	],
  // 	"HaNoi": [
  // 		{ fullname: "Nguyen Van C", age: 21, address: "HaNoi" },
  // 		{ fullname: "Nguyen Van D", age: 22, address: "HaNoi" }
  // 	]
  // }
