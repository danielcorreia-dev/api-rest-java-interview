// async function loadIntoTable(url, table) {
//     const tableHead = table.querySelector("thead")
//     const tableBody = table.querySelector("tbody")
//     const response = await fetch(fetch)
//     const { headers, rows } = await response.json()

//     tableHead.innerHTML ="<tr><tr>"
//     tableBody.innerHTML =""

//     for(const headerText of headers){
//         const headerElement = document.createElement("th")

//         headerElement.textContent = headerText;
//         tableHead.querySelector("tr").appendChild(headerElement)
//     }
// }

// loadIntoTable("http:/localhost:8080/api/product", document.querySelector(table-fetch))

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow'
// };

// fetch("localhost:8080/api/product", requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

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