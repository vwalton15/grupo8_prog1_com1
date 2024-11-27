
let registro = document.querySelector("#register-form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let terms = document.querySelector("#terminos");

let eror_email = document.querySelector("#email-error");
let eror_contra = document.querySelector("#password-error");
let eror_terms = document.querySelector("#terms-error");

registro.addEventListener("submit", function (event) {
    event.preventDefault();

    let validacion = true;

    eror_email.style.display = "none";
    eror_contra.style.display = "none";
    eror_terms.textContent = "";


    if (email.value === "") {
        eror_email.style.display = "block";
        eror_email.innerText = "Por favor, complete el campo";
        validacion = false;
    }


    if (password.value === "") {
        eror_contra.style.display = "block";
        eror_contra.innerText = "Por favor, complete el campo";
        validacion = false;
    }



    if (!terms.checked) {

        eror_terms.textContent = "Debe aceptar los términos y condiciones";
        validacion = false;
    }


    if (validacion) {

        registro.submit();
    }
});