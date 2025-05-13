    const apiElement = document.getElementById("api")
    const searchElement = document.getElementById("searchTitle")
    const sortElement = document.getElementById("sortSelect")
    const preElement = document.getElementById("prev-btn")
    const nextElement = document.getElementById("next-btn")
    const currentElement = document.getElementById("current-page")
    let dataProducts = []
    let page = 1
    let limit = 12;
    let skip = (page - 1) * limit
    let totalProduct = 0
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
    currentElement.innerText = skip / limit + 1

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


    function getDetail(id){
    fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            apiElement.innerHTML = ''
            apiElement.innerHTML = `
        <div class="container mt-4">
            <div class="card shadow-sm">
                <div class="row g-0">
                    <div class="col-md-5">
                        <img src="${data.thumbnail}" class="img-fluid rounded-start w-100 h-100" 
                             alt="${data.title}" style="object-fit: cover;">
                    </div>
                    <div class="col-md-7">
                        <div class="card-body p-4">
                            <h3 class="card-title mb-3">${data.title}</h3>
                            <p class="card-text text-success fs-4 mb-3">${data.price.toFixed(2)} VNĐ</p>
                            <p class="card-text text-muted">${data.description}</p>
                            <div class="mb-3">
                                <span class="badge bg-primary">Danh mục: ${data.category}</span>
                                <span class="badge bg-info">Tồn kho: ${data.stock}</span>
                            </div>
                            <div class="d-flex gap-2">
                                <button class="btn btn-primary" ">
                                    Thêm vào giỏ hàng
                                </button>
                                <button onclick="reset()" class="btn btn-outline-secondary">
                                    Quay lại danh sách sản phẩm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
            `
        })
    }

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
                <button  class="btn btn-primary " onclick="getDetail(${item.id})">Xem chi tiết</button>
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
             dataProducts = data.products
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

         })

    .catch((err) => {
        console.log(err)
    })

    function reset(){
        apiElement.innerHTML = ''
        searchElement.value = ''
        sortElement.value = ''
        preElement.disabled = true
        nextElement.disabled = true
        currentElement.innerText = ''
        handleViewProduct(dataProducts)
    }