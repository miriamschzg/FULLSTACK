//CREAR UNA PANTALLA EMERGENTE QUE ME PIDA INFORMACION SOBRE EL NOMBRE
//AÑADIR ESTE NOMBRE AL TÍTULO H1 QUE TENIAMOS CREADO AYER

// const nombre = prompt ("Dime tu nombre","Escribe aquí")
// console.log(nombre)

// const nuevoTitulo = document.querySelector("h1")

// nuevoTitulo.textContent = nombre;



//LOAD
window.addEventListener("load",function(){
    console.log("se ha cargado htm, css, js")
})

//IGUAL PERO SOLO ESPERA A HTML, DOMContentLoaded
document.addEventListener("DOMContentLoaded",function(){
    console.log("se ha cargado html")
})

console.log(2)

//SCROLL
window.addEventListener("scroll", function(){
    console.log("scrolling...")
})

//CLICK
const botonNotificacion = document.querySelector("#botonPrincipal");
botonNotificacion.addEventListener("click", function(evento){
    console.log(evento);
    evento.preventDefault(); //para evitar que en los formularios me recargue la página sola
    console.log("mostrando notificación...")
})

//CREAR UN FORMILARIO DE CONTACTO QUE RECIBA UN NOMBRE, CORREO, MENSAJE, BOTON ENVIAR

//EVENTOS CON EL TECLADO: INPUT Y TEXTAREA

const nombre = document.querySelector("#Nombre");

//EVENTO CHANGE
nombre.addEventListener("change", function(){ //hasta que no pincho fuera del nombre no aparece
    console.log("Se ha completado el nombre")
})

//EVENTO INPUT


let nombre1;
nombre.addEventListener("input", function(evento){
    // console.log("Escribiendo nombre con input..."); //a tiempo real
    // console.log(evento)
   nombre1 = evento.target.value //acceso a lo que se está escribiendo
   leertexto(evento);

})

//EJERCICIO
//CREAR EL EVENTO DE INPUT AL CORREO Y MENSAJE DEL FORMULARIO
//DEBAJO DEL FORMULARIO CREAR UN ELEMENTO TIPO PARRAFO: 
//ESTA ES LA WEB DE (NOMBRE) CON CON CORREO(CORREO) Y SU PROPUESTA ES (MENSAJE)

const correo = document.querySelector("#Email")
const propuesta = document.querySelector("#Mensaje")
let correo1,
    propuesta1;

correo.addEventListener("input", function(evento){
    correo1 = evento.target.value //acceso a lo que se está escribiendo
    leertexto(evento);
})
propuesta.addEventListener("input", function(evento){
    propuesta1 = evento.target.value //acceso a lo que se está escribiendo
    leertexto(evento);

})

const nuevoP = document.querySelector(".parrafo") //recomendado que sea en mayusculas

const botonFormulario = document.querySelector(".botonFormulario");
botonFormulario.addEventListener("click", function(){
    // console.log(`Esta es la web de ${nombre1} con correo ${correo1} y su propuesta es ${propuesta1}`)
    nuevoP.textContent = `Esta es la web de ${nombre1} con correo ${correo1} y su propuesta es ${propuesta1}`
    
})

//CREAR UN OBJETO DATOS, CON PROPIEDADES NOMBRE, EMAIL, MENSAJE
// E IR ALAMACENANDO LOS RESULTADOS DEL FORMULARIO

const datos = { 
    Nombre, //importante que las propiedades sean iguales que el ID
    Email,
    Mensaje,
}

function leertexto(evento){
    datos[evento.target.id] = evento.target.value
    console.log(datos)
}

//EVENTOS SUBMIT
const formulario = document.querySelector("form")
formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    console.log("Enviando formulario...")
})

//EJERCICIO
/*NUEVO ARCHIVO.JSON  QUE ALMACENE LA INFOR DE ZONAS TUCARRERADIGITAL
CREAR UN FETCH QUE ME LEA LA INFO Y ME LA MUESTRE POR PANATALLA EN EL MISMO FORMATO QUE SE MUESTRA*/

function obtenerZonas(){
    fetch("zonas.json") //puede ser una url externa, la que tenga la api
        .then(resultado =>{ //promesa
            return resultado.json() //si el resultado de la promesa es satisfactorio, me devuelve resultado.json
        })

        .then(datos =>{ //cuando nos devuelve el resultado (se cumple la anterior promesa), se trabaja con los datos que es un array
            const{zonas} = datos; //destructuring para crear variables a partir de las propiedades, las respuestas son arrays de objetos
            //empleados es una variable nueva y recibe los datos de datos
            console.log(zonas);

            zonas.forEach(zonas => {
                console.log(zonas.id)
                console.log(zonas.zona)
                console.log(zonas.ciudades)
                console.log(zonas.enlaceZonas)
                console.log(zonas.enlaceCursos)
            })
            zonas.forEach(zonas =>{
                const sectionZonas = document.querySelector(".zonas")
                const divZonas = document.createElement("DIV")
                const texto = document.createElement("P")
                const texto1 = document.createElement("P")
                const divEnlaces = document.createElement("DIV")
                const enlace1 = document.createElement("A")
                const enlace2 = document.createElement("A")
            
                sectionZonas.appendChild(divZonas)
                divZonas.appendChild(texto)
                divZonas.appendChild(texto1)
                divZonas.appendChild(divEnlaces)
                divEnlaces.appendChild(enlace1)
                divEnlaces.appendChild(enlace2)
            
                enlace1.href= (zonas.enlaceZonas)
                enlace1.textContent = "IR A PÁGINA DE ZONA"
                enlace2.href= (zonas.enlaceCursos)
                enlace2.textContent = "VER CURSOS EN ESTA ZONA"
                texto.textContent = (zonas.zona)
                texto1.textContent = (zonas.ciudades)

                divEnlaces.classList.add("estiloEnlaces")
                divZonas.classList.add("fichas")
        })
})}
obtenerZonas();