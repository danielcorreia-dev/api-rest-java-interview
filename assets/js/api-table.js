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
      </tr>
    `
  }

  tableholder.innerHTML = out;
})