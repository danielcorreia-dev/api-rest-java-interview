const subbtn = document.querySelector(".logbtn")

subbtn.addEventListener("click", function login(){

    let login = document.getElementById("inputLogin").value
    let password = document.getElementById("inputPass").value
    
    if (login == "admin" && password == "admin"){
        location.href = "/dashboard"
    }else {
		alert("Declined")
}
})