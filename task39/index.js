// Viết một hàm getData nhận vào một callback và gọi callback đó sau 1 giây với dữ liệu là mảng [1, 2, 3, 4].
    function getData(callback) {
    setTimeout(() => {
        callback([1, 2, 3, 4])
    },1000)
    // Code của bạn ở đây
}

// Sử dụng
getData((data) => {
    console.log("Bài 1 callback:", data); // Sau 1 giây in ra: [1, 2, 3, 4]
});

// Viết một hàm getData như bài 1 nhưng sử dụng Promise
function getDataPromise(callbackPromise) {
    // Code của bạn ở đây
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const callbackPromise = [1, 2, 3, 4]
            resolve(callbackPromise)
        },1000)
    })
}
// Sử dụng
getDataPromise()
    .then((data) => console.log("Bài 2 Promise:", data)) // Sau 1 giây in ra: [1, 2, 3, 4]
    .catch((error) => console.error(error));

// Viết một hàm getData như bài 1 nhưng sử dụng async/await

async function getDataAsync () {
    try {
        const data = await  getDataPromise()
        console.log("Bài 3 Async/Await:", data)
    } catch (error) {
        console.error(error);
    }

}
getDataAsync()