const body = document.querySelector("body");
const text = document.querySelector("h1");
const input = document.querySelector("input");

alert("actualmente usted esta en el modo claro, para cambiar el modo presione los botones") // informacion

function darkMode(){
    confirm("quiere cambiar a modo oscuro?")
    body.style.backgroundColor="black";
    text.style.color="white";
   console.log("modo oscuro seteado")
}

function lightMode(){
    confirm("quiere cambiar a modo claro?")
    body.style.backgroundColor="white";
    text.style.color="black";
    console.log("modo claro seteado")
}

function nuevoTitulo(){
    const titulo = prompt("decime un titulo");
    text.innerText = titulo;
}