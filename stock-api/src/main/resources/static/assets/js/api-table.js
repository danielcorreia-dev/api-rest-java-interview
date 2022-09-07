fetch("http://localhost:8080/api/product")
.then(function(response){
  return response.json();
})
.then(function(products){
  let tableholder = document.querySelector("#data-output")
  let out = ""
  for(let product of products){
    out += `
      <tr>
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${product.status}</td>
        <td>${product.stock}</td>
        <td class = "text-center">
        <a href="#" class="btn btn-primary">
            <div class="row flex-row">
                <div class="col-2">
                    <i class="fa-solid fa-pen-to-square"></i>
                </div>
                <div class="col-8">
                    Update
                </div>
            </div>
     	</a>
     	<button onclick="deleteProduct()" value="${product.id}" class="btn btn-danger" id="delete">
     		<i class="fa-solid fa-trash-can"></i>
     	</button>
     	</td>
      </tr>
    `
  }

  tableholder.innerHTML = out;
})

function deleteProduct(product) {
	let element = document.getElementById("delete")
	element.addEventListener("click", fetch("http://localhost:8080/api/product/" + product),{
		method: 'DELETE'
	})
	.then(response => response.json());
}