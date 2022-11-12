import { registeruserdoc } from "../js/firebase.js";
import { registeruser } from "../js/firebase.js";



const formulario = document.getElementById("formulario")


/*const confirmaremail=document.getElementById("con_email").value
const conpassword=document.getElementById("con_pass").value*/


async function registro(user,pass,nombre,direccion,telefono,ciu,dep,rh,gene){

    try{
        const autentication = await registeruser(user,pass)
        registeruserdoc(
            nombre,
            direccion,
            telefono,
            dep,
            ciu,
            rh,
            gene,
            user
            )

        alert("el usuario "+user+" ha sido registrado con exito")
        console.log(nombre,
            direccion,
            telefono,
            dep,
            ciu,
            rh,
            gene,
            user)
        window.location.href="../index.html"    
    } catch(error){
        console.log(error.code);
    }

    
}

formulario.addEventListener('submit', (evento)=>{

    evento.preventDefault();

    
    const user= document.getElementById("email").value
    const pass= document.getElementById("pass").value
    const nombre=document.getElementById("User_Name").value
    const direccion=document.getElementById("direccion").value
    const telefono=document.getElementById("telefono").value
    const ciudad=document.getElementById("Ciudad")
    const ciu=ciudad.options[ciudad.selectedIndex].value
    const departamento=document.getElementById("Departamento")
    const dep=departamento.options[departamento.selectedIndex].value
    const rh=document.getElementById("rh").value
    const genero=document.getElementById("Genero")
    const gene=genero.options[genero.selectedIndex].value
    const ConfirmUser= document.getElementById("con_email").value
    const ConfirmPass= document.getElementById("con_pass").value
    console.log(user,ConfirmUser)

    if (user === '' || ConfirmUser === ''|| pass === ''|| ConfirmPass=== ''){
        
        alert("No puede haber campos vacios")
        
    }
    if (user != ConfirmUser){

        alert("Los usuarios son diferente, ingrese el mismo usuario en ambos campos")

    }if (pass != ConfirmPass){

        alert("Las contraseñas son diferente, ingrese la misma cotraseña en ambos campos")

    }if (pass.length <5){

        alert("Las contraseñas deben ser de mas de 6 digitos")

    }if(user === ConfirmUser && pass === ConfirmPass){
        
        registro(user,pass,nombre,direccion,telefono,ciu,dep,rh,gene,ConfirmUser,ConfirmPass)

    }
    


})
