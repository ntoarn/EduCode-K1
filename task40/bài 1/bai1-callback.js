// Yêu cầu: Thực hiện tuần tự theo các bước
//
// Viết các hàm lấy thông tin user
// Lấy danh sách các sản phẩm đã mua sau 1s (dựa theo user đó)
// Sau khi có danh sách sản phẩm thì lấy chi tiết từng sản phẩm
// Tính tổng các giá trị sản phẩm
function getUser(userId, callback) {
    setTimeout(() => {
        callback({ id: userId, name: "John", age: 30 });
    }, 1000);
}

function getPurchases(userId, callback) {
    setTimeout(() => {
        callback([
            { id: 1, userId: userId, product: "Laptop", price: 1000 },
            { id: 2, userId: userId, product: "Phone", price: 2000 },
        ]);
    }, 1000);
}

function getProductDetails(productId, productName, callback) {
    setTimeout(() => {
        callback({ id: productId, name: productName, price: 1000 });
    }, 1000);
}

getUser(1, (user) => {
    console.log("Bài 1 callback:",user)
    getPurchases(user.id, (purchases) => {
        console.log("Bài 1 callback:",purchases)
        const total = purchases.reduce((acc, cur) => {
            acc += cur.price
            return acc
        },0)
        console.log("Bài 1 callback tổng giá trị sản phẩm:", total)
        getProductDetails(purchases[0].id, purchases[0].product, (productDetail) =>{
            console.log("Bài 1 callback:",productDetail)
        })
    })
})
