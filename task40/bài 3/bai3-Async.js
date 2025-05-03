function getUserAsync(userId, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const callback = ({ id: userId, name: "John", age: 30 });
            resolve(callback)
        }, 1000);
    })
}

function getPurchasesAsync(userId, callback) {
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

function getProductDetailsAsync(productId, productName, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const callback = ({ id: productId, name: productName, price: 1000 });
            resolve(callback)
        }, 1000);
    })
}

async function getDataAsync (){
    try {
        const getUser = await getUserAsync(1)
        console.log("Bài 3 - Async/Await:", getUser)
        const getPurchases = await getPurchasesAsync(getUser.id)
        console.log("Bài 3 - Async/Await:", getPurchases)
        const total = getPurchases.reduce((acc, cur) => {
           acc += cur.price
            return acc
        },0)
        console.log("Bài 3 - Async/Await tổng giá trị sản phẩm:", total)
        const getProductDetail = await Promise.all(
            getPurchases.map((product) => {
                return getProductDetailsAsync(product.id, product.product)
            })
        )
        getProductDetail.map((products) => {
            console.log("Bài 3 - Async/Await:", products)
        })
    } catch (error) {
        console.error(error);
    }

}
getDataAsync()