const addProduct = document.querySelector(".add-product")
const nameForm = document.querySelector("#inputName")
const stockForm = document.querySelector("#inputStock")
const statusForm = document.querySelector("#inputState")
const url = 'http://localhost:8080/api/product' 

addProduct.addEventListener("submit", (e) => {
    e.preventDefault()


    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: nameForm.value,
            status: statusForm.value,
            stock: Number(stockForm.value)
        })
    })
    .then(res => res.json())
    .then(() => window.location.href("/products"))
})