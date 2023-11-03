
//TRY CATCH
const numero1 = 20;
const numero3 = 40;

console.log(numero1);

//SE PARALIZA EL CODIGO, PARA EVITARLO: TRY CATCH

try { //intenta esto
    console.log(numero2)
} catch (error) { //si no funciona me duelve esto
    console.log("tienes un error en console")
}

console.log(numero3)

//esto sirve por si localizamos el error y no podemos solucionarlo pero no hay que abusar

//PROMESAS
//REFLEJAN UN VALOR QUE ESTARÁ DISPONIBLE AHORA, EN UN FUTURO O NUNCA

const autenticado = true;

const usuarioAutenticado = new Promise((resolve, reject) => {
    if (autenticado === true) {
        resolve("usuario autenticado") //El promise se cumple
    } else {
        reject("no se puede iniciar sesión") //El promise no se cumple
    }
})
console.log(usuarioAutenticado);

usuarioAutenticado.then(function (resultado) { //se ejecuta cuando el promise se cumple 
    console.log(resultado)
})
    .catch(function (resultado) { //se ejecuta cuando el promise no se cumpple
        console.log(resultado)
    })
console.log(usuarioAutenticado)

//NOTIFICACION API CON JAVASRIPT
const boton = document.querySelector("#Boton"); //para acceder a elementos de nuestro html

//Eventos con javaScript, con Addeventlistener
//Agrega un evento a la variable boton porque es donde hemos acumulado nuestro elemento
//Dos variables, primero el evento que espera recibir y después lo que quiero despues de cumplirse el evento

boton.addEventListener("click", function () {

    console.log("DISTE CLICK");

    Notification.requestPermission() // YA ES UNA PROMISA
        .then(resultado => console.log(`El resultado es ${resultado}`)); // SOLICITAR PERMISO DE NOTIFICACIONES

})

if (Notification.permission == "granted") {

    new Notification("Esto es una notificación", {
        icon: "",
        body: "Notificación tu carrera digital"
    })
}

/*ASYNC / AWAIT
SI ENTRAN DOS PERSONAS A UN RESTAURANTE. UNA PIDE UN VASO DE AGUA, OTRA UN MENÚ
NO ESPERAMOS A QUE ESTÉ LISTO EL MENU PARA SERVIRLE A LA OTRA PERSONA EL VASO DE AGUA

LO MISMO PASA EN JAVASCRIPT, SI HAGO UNA CONSULTA A LA BASE DE DATOS
LISTADO ULTIMOS 10000 CLIENTES ME VA A LLEVAR UN TIEMPO, PERO ME IRA MOSTRANDO
EL RESTO DEL SITIO WEB

SI NECESITO ESPERAR A UNA FUNCIÓN PARA PODER EJECUTAR OTRA
HAGO USO DE ASYNC AWAIT*/

//simulamos una consulta de datos

// setTimeout(function (){
//     console.log("Set time out finalizado")
// },3000)//milisegundos

// setInterval(function () { //ME EJECUTA EL CUERPO DE LA FUNCION CADA CIERTO INTERVALO
//     console.log("Set interval actuando")
// }, 4000)

function descargarNuevosClientes() {
    return new Promise(resolve => { //con resultado satisfactorio porque ha podido acceder a la base de datos
        console.log("Descargando clientes... Espere...")//inmediato

        setTimeout(() => {
            resolve("los clientes fueron descargados") //lo muestra a los 5 segundos
        }, 5000)
    });
}

async function app() { // FUNCIÓN QUE ES ASÍNCRONA, NECESITA QUE SE HAYA LLEVADO ACABO LA FUNCION DESCARGA Y QUE HAYA FINALIZADO 
    const resultadoAsync = await descargarNuevosClientes(); //ESPERAMOS (await) A QUE descargarNuevosClienets HAYA FINALIZADO
    console.log(resultadoAsync)
    console.log("ESTE CODIGO SI SE ESPERA") //bloquea a que haya terminado los clientes fueron descargados
}

app(); //no necesita parametro este tipo de funciones
console.log("este codigo no se espera")//instantáneamente antes de los 5 segundos porque está fuera del await

//EJERCICIO DE UNA FUNCION QUE ME DESCARGUE LOS PEDIDOS Y ME DE UNA RESPUESTA A LOS 3 SEGUNDOS DE QUE HAN SIDO DESCARGADOS


function descargarPedidos() {
    return new Promise((resolve) => { 
        console.log("Descargando pedidos... Espere...")

        setTimeout(() => {
            resolve("los pedidos fueron descargados") 
        }, 3000)
    });
}

console.log(descargarPedidos());

