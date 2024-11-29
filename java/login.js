

const formulario = document.querySelector("#login-form")
const email = document.querySelector("#email")
const contraseña = document.querySelector("#password")

formulario.addEventListener("submit", function (event) {
    event.preventDefault(); 

    let verdad = true

    if(email.value === ""){
        alert("Por favor complete el campo email");
        verdad = false;
    }
    if(contraseña.value == ""){
        alert("Por favor complete el campo contraseña");
        verdad = false;
    }

    if(verdad){
        
        formulario.submit();
    }
})