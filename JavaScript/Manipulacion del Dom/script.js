//Manipulacion del DOM
//Nos permite interactuar con un documentos,
//modificar su estructura, estilo y contenido

//Seleccion de Elementos
//por ID
let titulo = document.getElementById("titulo");
console.log(titulo.innerText);

//por clase(Query Selector)
let parrafo = document.querySelector(".parrafo");

//Modificacion de contenido
titulo.innerText = "Nuevo Título";
parrafo.textContent = "Nuevo texto en el párrafo";

//Eventos(addEvenListener, onClick, onChange)

let boton = document.getElementById("boton");
boton.addEventListener("click", function () {
  alert("Boton Clickeado");
  titulo.innerHTML = "Este es el titulo modificado";
});
