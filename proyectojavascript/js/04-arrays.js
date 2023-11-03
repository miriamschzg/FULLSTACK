let variableA = "valor varA";
let variableB = "valor varB";
let variableC = "valor varC";

let Ejercicio6 = {};

Ejercicio6.variableA=variableA;
Ejercicio6.variableB=variableB;
Ejercicio6.variableC=variableC;

console.log ("mostramos ejercicio 6", Ejercicio6);

let numeros = [10,20,30,40,50];
console.log("mi primer array", numeros)
console.table(numeros);

const meses = new Array("Enero", "Febrero", "Marzo"); //Otra forma de crear arrays pero menos usada
console.table(meses);

let semana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]
console.table(semana);

console.log("Accediendo a los valores de array con el índice:", numeros [2])


//MOSTRAR SOLO LUNES Y JUEVES
console.log("accediendo a los valores de array con los índices:", semana [0], semana [3])


//CREAR UN OBJETO CON 3 PROPIEDADES DE CADA TIPOS, AÑADIR UNA PROPIEDAD AL OBJETO TIPO ARRAY Y COMO VALOR LOS DIAS DE FIN DE SEMANA (FINSEMANA), CREAR DESTRUCTURING CON CADA PROPIEDAD
let finde = {
    prop1: "string",
    prop2: 3,
    prop3: true,
}

finde.finsemana = ["sabado", "domingo"]

console.log(finde)

let {prop1, prop2, prop3, finsemana} = finde;
console.log("resultado ejercicio 5", prop1, prop2, prop3, finsemana)


//CONOCER LA EXTENSION DE UN ARRAY IGUAL QUE CON LOS STRING .LENGHT

console.log("longitud del array", semana.length) //no nos dice el numero de índices sino el número de valores que hay


//METODO PUSH añade un elemento al FINAL del array
numeros.push(70);
numeros.push(80,90,100) 

console.log(numeros)


//MÉTODO UNSHIFT añade elementos al INICIO
numeros.unshift(-10, 1290)
console.log(numeros) //no es buena práctica por que cambia la posicion del resto


//ELIMINAR ELEMENTOS DE UN ARRAY
numeros.pop(); //elimina el ultimo elemento del array
console.log(numeros)
numeros.shift(); //elima el primer elemento
console.log(numeros)


//ELIMINAR X ELEMENTOS A PARTIR DEL INDICE QUE LE INDIQUEMOS
numeros.splice(2,3);//primero es el indice y luego valores a eliminar
console.log(numeros);
console.table(numeros) //se está modificando el array original


//SPREAD OPERATOR
const nuevoArreglo = [...numeros,1560]; //NOS AÑADE TB EL OTRO VALOR
console.table(nuevoArreglo)

//EJERCICIO
//CREAR UN ARRAY QUE SE LLAME ESTACIONES EMPEZANDO SOLO CON VERANO Y TERMINAR CON EL ORDEN PRIMAVERA, VERANO, OTOÑO, INVIERNO
let estaciones = ["verano"];
estaciones.unshift("primavera");
estaciones.push("otoño", "invierno");

console.log(estaciones)

//EJERCICIO CARRITO CREAR OBJETOS DENTRO DE UN ARRAY
let carrito = [
   obj1 = {
        nombre: "nombre1",
        precio: 3
    },
   obj2= {
        nombre: "nombre2",
        precio: 6,
    },
    obj3 = {
        nombre: "nombre3",
        precio:8
    },
   obj4 = {
        nombre: "nombre4",
        precio: 11
    }
];

console.table(carrito)

//INCLUDE
let resultado;
resultado = semana.includes("Lunes");
console.log("uso de includes para buscar en array:", resultado)

//SOME IDEAL PARA ARRAY DE OBJETOS

resultado = carrito.some(function (producto){
     producto.carrito === "nombre3"
 } )

 console.log (resultado)


//COMO SABER EL TOTAL DEL CARRITO. REDUCE
resultado = carrito.reduce(function (total=0,producto){
    return total + producto.precio
},0) //valor donde inicia
console.log("uso de reduce para el precio total:", resultado)

//FILTER PARA FILTRAR
resultado = carrito.filter(function (producto) {
    return producto.precio >= 4
})
console.log(resultado)


