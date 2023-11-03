//FOR EACH Y MAP RECORREN TODOS LOS ELEMENTOS DE UN ARRAY

let carrito = [
    {
        nombre: "TV",
        precio: 750,
    },
    {
        nombre: "Tablet",
        precio: 350,
    },
    {
        nombre: "movil",
        precio: 550,
    },
    {
        nombre: "PC",
        precio: 1750
    }
];

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i])
}

carrito.forEach(function (producto) {
    console.log(producto, producto.nombre)
})

    //como arrow function
carrito.forEach(producto => console.log(producto, producto.nombre))

//IGUAL QUE EL FOREACH PERO MAP SE USA PARA CREAR NUEVOS ARRAY Y EL FOREACH PARA MOSTRAR POR PANTALLA
const arrayMap = carrito.map(producto => producto.nombre);
console.log(arrayMap);

    //OBJETIVO DEL MAP ES CREAR NUEVOS ARRAYS Y ALMACENARLO

let reserva = {
    nombre: "Pedro",
    apellido: "Sanchez",
    total: 300,
    pagado: true,
}

console.log(reserva.nombre)

//crear una nueva propiedad que sea una funcion INFORMACION y nos diga toda la informacion anterior escrita y detallada de los detalles de la reserva

reserva.informacion = function (){
    return (`El cliente ${this.nombre} ${this.apellido} tiene una reserva de ${this.total}euros. ¿Esta pagada? ${this.pagado}`)
};
console.log (reserva.informacion());

//el this accede a las propiedades que tengo dentro de un objeto


//CREAR UN OBJETO FECHA
//CON PROPIEDADES, AÑO, MES, DIA, FALTANTES ES UNA FUNCION QUE ME DICE CUANTOS DIAS QUEDAN PARA QUE FINALICE EL MES
// SI OCTUBRE TIENE 31 DÍAS

let objeto = {
    año : 2023,
    mes : "octubre",
    dia : 24,
    faltantes : function(){
        console.log(`Faltan ${31-this.dia} días para acabar el mes`);
    }
}
objeto.faltantes()


//tb 
let fecha = {
    año : 2023,
    mes : "octubre",
    dia : 24,
    faltantes : function(){
    return (`Faltan ${31-this.dia} días para acabar el mes`);
}
}
console.log(fecha.faltantes())