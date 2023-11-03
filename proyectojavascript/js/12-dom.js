/* FORMAS DE SELECCIONAR CODIGO DE HTML CON JAVASCRIPT 

QUERYSELECTOR (el primero, UNO O NINGUNO) puedo seleccionar todos los tipos de selectores = css
    document hace referencia a todo el documento html

QUERYSELECTORALL (todos los enlaces)
QUERYELEMENTBYID

Ejercicio:
seccion con h1, una imagen de fondo, un boton 
y un div con 3 enlaces con clase enlace y el div con la clase navPrincipal
Darle a la seccion la clase seccionPrincipal
Darle al boton un ID botonPrincipal*/

const heading = document.querySelector(".seccionPrincipal h1")//se puede hacer cadena descendiente, retorna 0 o 1 elemento
console.log(heading)

const boton = document.querySelector("#botonPrincipal")
console.log(boton)

heading.textContent="Nuevo título" // la consola muestra también el nuevo nombre por las dos etapas de javaScript

//AÑADIR Y ELIMINAR CLASES USANDO .CLASSLIST
//NO HACE FALTA PONER EL . EN LA CLASE, YA LE ESTAMOS DIENDO QUE ES UNA CLASE
//objetivo: clase ya creada en css y le damos los estilos así y lo modifica directamente

heading.classList.add("NuevaClaseDesdeJS") //AÑADIR
heading.classList.remove("NuevaClaseDesdeJS") //ELIMINAR

const enlacesJS = document.querySelector("div a") //solo selecciona el primer enlace
console.log(enlacesJS)

const enlacesJS2= document.querySelectorAll("div a") //ahora muestra todos los enlaces
console.log (enlacesJS2)//lo muestra como un array
console.log(enlacesJS2[0]);

//podemos modificar tambien los enlaces en sí
enlacesJS2[0].href="https://google.com"

//EJERCICIO 
//modificar el contenido y el href del segundo enlace unicamente con queryselectorall
//poner contenido modificado con queryselectorall. y llevar a otro enlace externo

enlacesJS2[1].classList.add("enlace2")
enlacesJS2[1].href="https://tucarreradigital.com"
console.log (enlacesJS2[1])

//GETELEMENTBYID, se usa menos

const botonJS = document.getElementById(".botonPrincipal")

//COMO GENERAR CODIGO EN HTML DESDE JAVASCRIPT
const nuevoEnlace = document.createElement("A") //recomendado que sea en mayusculas

//agregar href
nuevoEnlace.href = "#";

//agregar texto

nuevoEnlace.textContent = "Nuevo enlace 4"

//agrega clase
nuevoEnlace.classList.add("enlace")
console.log(nuevoEnlace)

//lo agregamos al documento

const enlacesJS3 = document.querySelector(".navPrincipal");//como tal no hace falta almacenarlo 
//en una variable pero es más facil al tenerla seleccionada
enlacesJS3.appendChild(nuevoEnlace)//lo coloca siempre al final

//EJERCICIO
//crear otro enlace que se llame ejercicioEnlace con el mismo estilo que los anteriores y que esté en el div

const ejercicioEnlace = document.createElement("A")
ejercicioEnlace.href="#"
ejercicioEnlace.textContent="Ejercicio Enlace"
ejercicioEnlace.classList.add("enlace")
document.querySelector(".navPrincipal").appendChild(ejercicioEnlace)//sin necesidade de crear variable

console.log(ejercicioEnlace)