import { registeruser } from "../js/firebase.js";

const evento = document.getElementById("registerbtn")

async function register(){


    const user= document.getElementById("edtuser");
    const pass= document.getElementById("edtpassword");
    const ConfirmUser= document.getElementById("edtConfirmuser");
    const ConfirmPass= document.getElementById("edtConfirmPass");

    if (user.value === '' || ConfirmUser.value === ''|| pass.value === ''|| ConfirmPass.value=== ''){
        
        alert("No puede haber campos vacios")

    }
    if (user.value != ConfirmUser.value){

        alert("Los usuarios son diferente, ingrese el mismo usuario en ambos campos")

    }if (pass.value != ConfirmPass.value){

        alert("Las contraseñas son diferente, ingrese la misma cotraseña en ambos campos")

    }if (pass.value.length <5){

        alert("Las contraseñas deben ser de mas de 6 digitos")

    }if(user.value === ConfirmUser.value && pass.value === ConfirmPass.value){

        const user2= document.getElementById("edtuser").value
        const pass2= document.getElementById("edtpassword").value

        const registro = registeruser(user2,pass2)
        const validation= await registro

        if(validation != null){
            alert("el usuario "+user2+" ha sido registrado con exito")
            window.location.href="../index.html"
        }
        else
        {
            console.log("register"+user+"not validation")
            alert("Error de usuario verifique usuario y/o contraseña")
        }

    }
    
    

}

window.addEventListener('DOMContentLoaded', async()=>{

    evento.addEventListener('click',register)

})