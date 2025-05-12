const apiElement = document.getElementById("api")
const searchElement = document.getElementById("searchTitle")
const sortElement = document.getElementById("sortSelect")
const preElement = document.getElementById("prev-btn")
const nextElement = document.getElementById("next-btn")
const currentElement = document.getElementById("current-page")
function handleViewProduct(product){
    let html = `<div class="row"> `
    product.map((item) => {
        html += `
<div class="col-12 col-md-6 col-lg-4 col-xl-3">
        <div class="card mb-3 " style="width: 18rem;">
          <img src=${item.thumbnail} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text text-">${item.price}$</p>
            <p class="card-text">${item.description}</p>
            <a href="#" class="btn btn-primary">Xem chi tiết</a>
          </div>
        </div>
        </div>
        `
    })
    html += `</div>`
    apiElement.innerHTML = html
}
fetch("https://dummyjson.com/products")
.then((res) => {
    return res.json()
})
    .then((data) => {
        console.log(data)
        let dataProducts = data.products
        handleViewProduct(dataProducts)

        sortElement.addEventListener("change",function (e){
            const value = e.target.value;
            let data = [...dataProducts]
            if(value === "desc"){
                data.sort((a,b) => b.price - a.price)
            }else if(value === "asc"){
                data.sort((a,b) => a.price - b.price)
            }
            handleViewProduct(data)
        })
        searchElement.addEventListener("input", function (e){
            const value = e.target.value;
            fetch(`https://dummyjson.com/products/search?q=${value}`)
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    handleViewProduct(data.products)
                })
                .catch((err) => {
                    console.log(err)
                })
        })

        let page = 1
        let limit = 12;
        let skip = (page - 1) * limit
        let totalProduct
          const fetchProduct =  async (limit = 12, skip = 0) => {
            try {
                const res = await  fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
                const { products, total } = await  res.json()
                totalProduct = total
                handleViewProduct(products)
            } catch (error) {
                console.error(error);
            }
          }
          fetchProduct()
          currentElement.innerText = page

        preElement.addEventListener("click", function (e){
            if(page > 1){
                page--
                currentElement.innerText = page ;
            }
            skip = (page - 1) * limit
            fetchProduct(limit, skip)
        })

        nextElement.addEventListener("click", function (e){
            pageMax = totalProduct / limit
            if (page < pageMax){
                page++;
                currentElement.innerText = page;
                skip = (page - 1) * limit
                fetchProduct(limit, skip)
            }
        })
     })

.catch((err) => {
    console.log(err)
})


