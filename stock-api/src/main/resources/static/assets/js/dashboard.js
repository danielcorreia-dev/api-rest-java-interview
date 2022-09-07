fetch("http://localhost:8080/api/product")
.then(function(response){
    return response.json()
})
.then(function(product){
	
	let lastElement = product.at(-1)
    let name = document.getElementById("name")
    let status = document.getElementById("status")
    let stock = document.getElementById("stock")

    outName = `<h3>${lastElement.name}</h3>`
    outStock = `<h3>${lastElement.stock}</h3>`
    outStatus = `<h3>${lastElement.status}</h3>` 

    name.innerHTML = outName
    status.innerHTML = outStatus
    stock.innerHTML = outStock
})