function login (){
    const email = document.querySelector('#email')
    const senha = document.querySelector('#password')
    const form = document.querySelector('form')

    form.addEventListener('submit' , (e)=>{
        if(email.value == '' && senha.value == ''){
            swal({
                title: "Insira seus dados",
                icon: "warning",
                button: "Tentar novamente!",
              });
              
        } else {
            console.log(email.value)
            console.log(senha.value)
        }
        e.preventDefault()
    })

    if (email.value == 'admin@admin' && senha.value == 'admin') {
        swal({
            title: "Login efetuado com sucesso!",
            text: "Seja bem-vindo",
            icon: "success",
            button: "Entrar!",
          });
    } 
    else { 
        swal({
            title: "Dados Inválidos",
            icon: "warning",
            button: "Tentar novamente!",
          });
        
    }
}

login()