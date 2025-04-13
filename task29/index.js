// Viết hàm lọc sản phẩm và trả về sản phẩm đó
// Thực hiện viết hàm filteredProductNames để lọc ra các sản phẩm co giá lớn hơn giá nhập vào và trả về các sản phẩm đó.

// Nếu không tìm đươc trả về mảng rỗng
// Ví dụ:

// Input
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Mouse", price: 50 },
  { id: 3, name: "Keyboard", price: 150 },
  { id: 4, name: "Monitor", price: 300 },
  { id: 5, name: "USB Cable", price: 25 },
  { id: 6, name: "Webcam", price: 120 },
  { id: 7, name: "Desk Lamp", price: 80 },
  { id: 8, name: "Headphones", price: 200 },
  { id: 9, name: "Speaker", price: 180 },
  { id: 10, name: "Chair", price: 250 },
];

function filteredProductNames(array, priceProduct) {
    return array.reduce((acc, cur) =>{
        if(cur.price >= priceProduct){
            acc.push(cur.name)
        }
        return acc
    },[])
  // Tính toán và in ra kết quả
}
// Output
const result = filteredProductNames(products, 200);
console.log(result); // [ 'Laptop', 'Monitor', ''Headphones, 'Chair' ]