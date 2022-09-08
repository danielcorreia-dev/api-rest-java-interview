const addProduct = document.querySelector(".add-product")
const nameForm = document.querySelector("#inputName")
const stockForm = document.querySelector("#inputStock")
const statusForm = document.querySelector("#inputState")
const url = 'http://localhost:8080/api/product' 

if (addProduct) {
	addEventListener("submit", (e) => {
    e.preventDefault()

	console.log(nameForm.value)
	console.log(stockForm.value)
	console.log(statusForm.value)

    fetch(url, {
        method: "POST",
        //mode: 'no-cors',
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            name: nameForm.value,
            status: statusForm.value,
            stock: Number(stockForm.value)
        })
    })
    .then(() => window.location.assign("/products"));
})
}