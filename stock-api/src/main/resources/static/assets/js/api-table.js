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
     	</td>
      </tr>
    `
  }

  tableholder.innerHTML = out;
})