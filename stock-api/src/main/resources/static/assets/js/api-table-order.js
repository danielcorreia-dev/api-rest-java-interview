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
        <a href="#" class="btn btn-primary ms-3">
            <div class="row flex-row" id="update">
                <div class="col-2">
                    <i class="fa-solid fa-pen-to-square"></i>
                </div>
                <div class="col-8">
                    Update
                </div>
            </div>
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
	let id = event.target.parentElement.dataset.id
	let formUpdate = document.getElementById("pop-update")
	let closeUpdate = document.getElementById("close-pop")
	
	if(updatePress) {
		if(closeUpdate.addEventListener('click', () => closeUpdate.style.visibility = 'hidden'))
		formUpdate.style.visibility = "visible"
		
	}
});
