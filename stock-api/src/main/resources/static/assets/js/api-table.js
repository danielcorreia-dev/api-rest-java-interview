const tableholder = document.querySelector("#data-output")

fetch("http://localhost:8080/api/product")
.then(function(response){
  return response.json();
})
.then(function(products){
  let out = ""
  for(let product of products){
    out += `
      <tr>
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.status}</td>
        <td>${product.stock}</td>
        <td class="text-center" data-id=${product.id}>
        <a href="#" class="btn btn-primary ms-2">
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

const url = "http://localhost:8080/api/product"

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

