
let email = document.querySelector('#email')
let assunto= document.querySelector('#assunto')
let emailOk = false
let assuntoOK = false 

email.style.width = '100%'



function validaEmail(){
let txtEmail = document.querySelector("#txtEmail")
if (email.value.indexOf('@') == -1 || email.value.indexOf('.') ==-1){
txtEmail.innerHTML = 'E-mail inválido!'
txtEmail.style.color = 'black'
}
else{
txtEmail.innerHTML = 'E-mail válido!'
txtEmail.style.color = 'green'
emailOk = true
}

}

function validaAssunto(){
let txtAssunto = document.querySelector("#txtAssunto")

if(assunto.value.length <=100){
txtAssunto.innerHTML
txtAssunto.style.color = "black"
txtAssunto.style.display = "block"
}
else{
    txtAssunto.style.display = "none"
    assuntoOK = true
}
}

function enviar(){
    if(emailOK == true && assuntoOK == true){
        alert("Formulário enviado com sucesso!")
    }
    else{
        alert("Preencha o formulário corretamente antes de enviar...")
    }
}
   