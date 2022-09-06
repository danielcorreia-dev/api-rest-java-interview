const subbtn = document.querySelector(".logbtn")
document.getElementById("input")
subbtn.addEventListener("click", function login(){

    let login = document.querySelector(".login").value
    let password = document.querySelector(".password").value
    
    if (login == "admin" && password == "admin"){
        alert("Sucess")
    }
})
