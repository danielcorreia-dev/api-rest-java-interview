fetch("http://localhost:8080/api/product")
.then(function(response){
    return response.json()
})
.then(function(product){
    let name = document.getElementById("name")
    let status = document.getElementById("status")
    let stock = document.getElementById("stock")

    outName = `${product.name}`
    outStatus = `${product.status}` 
    outStock = `${product.stock}`

    name.innerHTML = outName
    status.innerHTML = outStatus
    stock.innerHTML = outStock
})