fetch("http:localhost:8080/products/api")

.then(function(response){
    return response.json();
})

.then(function(products){
    let placeholder = document.querySelector("#table-fetch");
    let out = ""; 
    for(let product of products){
        out += `teste
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.stock}</td>
            </tr>
        `;
    }

    placeholder.innerHTML = out;
})