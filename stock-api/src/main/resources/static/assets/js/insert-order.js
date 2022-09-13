const addProduct = document.querySelector(".add-product")
const nameForm = document.querySelector("#inputName")
const stockForm = document.querySelector("#inputStock")
const url = 'http://localhost:8080/api/order' 

if (addProduct) {
	addEventListener("submit", (e) => {
    e.preventDefault()

    fetch(url, {
        method: "POST",
        //mode: 'no-cors',
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
        	customer: nameForm.value,
        	delivery: stockForm.value,
        })
    })
    .then(() => window.location.assign("/orders"));
})
}