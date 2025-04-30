function getUserPromise(userId, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           const callback = ({ id: userId, name: "John", age: 30 });
           resolve(callback)
        }, 1000);
    })
}

function getPurchasesPromise(userId, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           const callback = ([
                { id: 1, userId: userId, product: "Laptop", price: 1000 },
                { id: 2, userId: userId, product: "Phone", price: 2000 },
            ]);
           resolve(callback)
        }, 1000);
    })
}

function getProductDetailsPromise(productId, productName, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           const callback = ({ id: productId, name: productName, price: 1000 });
           resolve(callback)
        }, 1000);
    })
}

getUserPromise(1).then((user) => {
    console.log("Bài 2 - Promise:",user)
        return getPurchasesPromise(user.id)
            .then((purchases) => {
                console.log("Bài 2 - Promise:",purchases)
                const total = purchases.reduce((acc, cur) => {
                    acc += cur.price
                    return acc
                },0)
                console.log("Bài 2 - Promise tổng giá trị sản phẩm:", total)
                return getProductDetailsPromise(purchases[0].id, purchases[0].product)
                    .then((productDetail) => {
                        console.log("Bài 2 - Promise:",productDetail)
                    })
            })
})