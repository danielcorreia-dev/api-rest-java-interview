const tableholder = document.querySelector("#data-output")

fetch("http://localhost:8080/api/brand")
.then(function(response){
  return response.json();
})
.then(function(products){
  let out = ""
  for(let product of products){
    out += `
      <tr>
        <td>${product.name}</td>
        <td>${product.status}</td>
        <td class="text-center" data-id=${product.id}>
        <a href="#" class="btn btn-primary ms-3">
            <div class="row flex-row">
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

const url = "http://localhost:8080/api/brand"

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
