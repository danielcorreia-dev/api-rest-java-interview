const tableholder = document.querySelector("#data-output")

fetch("http://localhost:8080/api/order")
.then(function(response){
  return response.json();
})
.then(function(products){
  let out = ""
  for(let product of products){
    out += `
      <tr>
        <td>${product.customer}</td>
        <td>${product.delivery}</td>
        <td class="text-center" data-id=${product.id}>
        <a href="#" class="btn btn-primary ms-3" id="update">
			<i class="fa-solid fa-pen-to-square"></i>
			Update
     	</a>
     	<a href="#" class="btn btn-danger" id="delete">
     		<i class="fa-solid fa-trash-can"></i>
     	</a>
     	</td>
      </tr>
    `
  }

  tableholder.innerHTML = out;
})

const url = "http://localhost:8080/api/order"

// DELETE Method function using the data-set from parent element <td>

tableholder.addEventListener('click', (e) => {
	e.preventDefault();
	let deletePress = e.target.id == "delete"
	
	let id = e.target.parentElement.dataset.id
	if(deletePress) {
		fetch(`${url}/${id}`, {
			method: "DELETE",
			redirect: 'follow'
		})
		.then(() => window.location.reload(true))
	}
});

tableholder.addEventListener('click', (event) => {
	event.preventDefault();
	let updatePress = event.target.id == "update"
	let idPut = event.target.parentElement.dataset.id
	
	const formUpdate = document.querySelector("#pop-update")
	const closeUpdate = document.querySelector("#close-pop")
	
	if(updatePress){
		formUpdate.style.visibility = "visible"
		
		const addProduct = document.querySelector(".add-product")
		const nameForm = document.querySelector("#inputName")
		const stockForm = document.querySelector("#inputStock")
		const statusForm = document.querySelector("#inputState")
		
		if (addProduct) {
			addEventListener("submit", (e) => {
		    e.preventDefault()
		
			console.log(nameForm.value)
			console.log(stockForm.value)
			// console.log(statusForm.value)
		
		    fetch(url, {
		        method: "PUT",
		        //mode: 'no-cors',
		        headers: {
		            "Content-Type": "application/json; charset=UTF-8"
		        },
		        body: JSON.stringify({
					id: idPut,
		            name: nameForm.value,
		            status: stockForm.value,
		        })
		    })
		    .then(() => window.location.assign("/orders"));
		})
		}
	}
	
	closeUpdate.addEventListener('click', (e) => {
		e.preventDefault();
		
		formUpdate.style.visibility = "hidden"
	});
});