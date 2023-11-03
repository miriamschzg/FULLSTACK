"use strict"; //CORRER JS EN MODO ESTRICTO

let producto = {
    nombreProducto: "Ordenador",
    precio: 500,
    disponible : true,
}

console.log("Mi primer objeto:", producto);
console.log(`Mi primer objeto con template string ${producto}`, producto);

console.log("USO DE SINTAXIS DE PUNTO producto.precio:", producto.precio);
console.log(`USO DE SINTAXIS DE PUNTO CON TEMPLATE STRING: ${producto.precio}`);
console.log("USO DE CORCHETES", producto["precio"]);

producto.categoria = "informática";

console.log("AÑADIR CATEGORÍA A PRODUCTO", producto);

delete producto.disponible;

console.log("Eliminar disponible", producto);

const precioProducto = producto.precio;

console.log("CREAMOS VARIABLES A PARTIR DE LA PROPIEDAD PRECIO DE PRODUCTO;", precioProducto)

//EJERCICIO: ALMACENAR EN UNA VARIABLE nombreProducto EL VALOR DE LA PROPIEDAD nombreProducto DEL OBJETO producto
//SE PUEDE LLAMAR IGUAL LA VARIABLE Y LA PROPIEDAD, NO PASA NADA PORQUE SON DOS COSAS TOTALMENTE DISTINTAS

const nombreProducto = producto.nombreProducto;

console.log("Creamos variables a partir de la porpiedad nombre producto:", nombreProducto);

//DESTRUCTURING DE OBJETOS ES SACAR DE UNA ESTRUCTURA
//CREAMOS LA VARIABLE Y EXTRAE EL VALOR EN UN SOLO PASO

let {precio, categoria} = producto;

console.log("Destructuring de variables:", precio, "e", categoria);
console.log(`Destructuring de variables por template string: ${precio} e ${categoria}`);

//EJERCICIO HACER DESTRUCTURING A LAS PROPIEDADES Y MOSTRAR LA INFO POR CONSOLA
const playa = {
    nombrePlaya : "la Carolina",
    ubicacion : "Murcia",
    recomendable : true,
    temperaturaAgua : 24,
}

let {nombrePlaya, ubicacion, recomendable, temperaturaAgua} = playa;

console.log(`En la playa ${nombrePlaya} que está en ${ubicacion} el agua está a ${temperaturaAgua} grados. Te la recomiendo: ${recomendable}`);

playa.heEstado = true;

console.log("ver si puedo añadir una propiedad con variable const", playa)

Object.freeze(producto);

// producto.congelado = "intentamos congelarlo";
console.log("INTENTO AÑADIR UNA PROPIEDAD TRAS EL FREEZE", producto);
//no se añade, la variable está congelada pero tampoco da error, solo si corremos el modo stricto

console.log("ESTA CONGELADO??", Object.isFrozen(producto));

//EJERCICIO APLICAR MÉTODO SEAL
let medidas = {
    peso: 3,
    alto: 25,
    ancho: 40,
    profundidad: 22,
}

Object.seal(medidas);

medidas.alto = 27;

console.log("medidas modificadas con seal:", medidas)//nos permite modificar la propiedad

let nuevoProducto = {...producto, ...medidas}
console.log("NUEVO OBJETO CON SPREAD OPERATOR:", nuevoProducto)
