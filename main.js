const form = document.getElementById("formulario");
const username = document.getElementById("input_username");
const email = document.getElementById("input_email");
const password = document.getElementById("input_password");
const password2 = document.getElementById("check_password");

form.addEventListener("submit", e =>{
    e.preventDefault();

    checkInputs();
})

//checando os inputs do formulário
function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const checkValue = password2.value.trim();

    if(usernameValue === ""){
        setErrorfor(username, "Username não pode ficar em branco");
    }else{
        setSuccessfor(username);
    }

    if(emailValue === ""){
        setErrorfor(email, "E-mail não pode ficar em branco");
    }else if(!isEmail(emailValue)){
        setErrorfor(email, "Por favor, digite um e-mail válido");
    }else{
        setSuccessfor(email);
    }

    if(passwordValue === ""){
        setErrorfor(password, "Senha não pode ficar em branco");
    }else{
        setSuccessfor(password);
    }

    if(checkValue === ""){
        setErrorfor(password2, "Por favor, confirme sua senha");
    }else if(passwordValue !== checkValue){
        setErrorfor(password2, "As senhas não estão iguais");
    }else{
        setSuccessfor(password2);
    }
}

//função para setar erro no input
function setErrorfor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    input.className = "input error";
    formControl.className = "form-control error";
    small.innerText = message;
}

//função para setar sucesso no input
function setSuccessfor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
    input.className = "input success";
}

//validar e-mail válido
function isEmail(email){
    const validar = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return validar.test(email);
}

//dark mode
const btnTema = document.getElementById("btn_tema");
btnTema.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-mode");
})
