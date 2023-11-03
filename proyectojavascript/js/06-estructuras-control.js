//COMPARADORES Y CONDICIONALES
//IF y SWITCH

let numeroJM = "900"; //un solo igual asignamos valor a una variable
if (numeroJM === 900) {
    console.log(`Tu número es 900`)

}
else {
    console.log("numero no es 900")
}

//EJERCICIO DE ESTRUCTURA DE CONTROL QUE COMPRUEBE SI EL PIN ES CORRECTO
let pinCorrecto = 1234;
let pinIntroducido = 1234
if (pinCorrecto === pinIntroducido) {
    console.log("PIN correcto")
}
else {
    console.log("PIN incorrecto")
}

//ESTRUCTURA DE CONTROL QUE COMPRUEBE SI PUEDE RETIRAR EL DINERO
let saldo = 150;
let dineroRetirado = 100;

if (dineroRetirado < saldo) {
    console.log("Puedes retirar dinero")

}
else {
    console.log("No se puede retirar mayor que el saldo")
}

//LAS DOS JUNTAS
if (pinCorrecto === pinIntroducido) {
    console.log("PIN correcto");

    if (dineroRetirado < saldo) {
        console.log("Puedes retirar dinero")
    }
    else {
        console.log("No se puede retirar mayor que el saldo")
    }
}

else {
    console.log("PIN incorrecto")
}

//EJERCICIO COMPLETO DEL CAJERO

function cajero(pin, importeRetirar) {
    if (pinCorrecto === pin) {
        console.log("PIN correcto")

        if (importeRetirar < saldo) {
            console.log("Puedes retirar dinero")
        }
        else {
            console.log("No se puede retirar mayor que el saldo")
        }
    }
    else {
        console.log("PIN incorrecto")
    }
}
cajero(234, 50)

//USO DE ELSE IF, PARA HACER MÚLTIPLES COMPARACIONES

const rol = "Editor";
if (rol === "Administrador") {
    console.log("Acceso a todo el sistema")
} else if (rol === "Editor") { //SI NO SE CUMPLE EL IF, PERO SE CUMPLE EL ELSE IF
    console.log("Solo puedes editar pero no crear")
}
else if (rol === "Gestor") {
    console.log("Eres el gestor")
} else { //SI NO SE CUMPLE NADA DE LO ANTERIOR
    console.log("No eres nadie")
}

//EJERCICIO QUE COMPARE EN QUE ESTACION DEL AÑO ESTAMOS Y DIGA CUAL ES LA SIGUIENTE
let estacionActual = "Verano";

if (estacionActual === "Otoño") {
    console.log("Es otoño y luego invierno")
}
else if (estacionActual === "Invierno") {
    console.log("Es invierno y luego primavera")
}
else if (estacionActual === "Primavera") {
    console.log("Es primavera y luego verano")
}
else if (estacionActual === "Verano") {
    console.log("Es verano y luego otoño")
}
else {
    console.log("Eso no es una estación")
}

//CREAR UNA ESTRUCTURA DE CONTROL QUE ME DIGA SI LA NOTA DE UN EXAMEN ES SOBRESALIENTE, NOTABLE, SUFICIENTE Y SUSPENSO
let notaExamen = 8.5;
if (notaExamen >= 9 && notaExamen <= 10) {
    console.log("Sobresaliente")
}
else if (notaExamen >= 7 && notaExamen < 9) {
    console.log("Notable")
}
else if (notaExamen >= 5 && notaExamen < 7) {
    console.log("Suficiente")
}
else if (notaExamen < 5) {
    console.log("Suspenso")
}


//SWITCH SIMPLIFICA

// let metodoPago = prompt("Introduce tu método de pago" , "Escibe aquí");
let metodoPago = "Tarjeta";
switch (metodoPago) {
    case "Tarjeta": console.log("Pagaste con tarjeta");// caso 1
        break; //cierre caso 1
    case "Efectivo": console.log("Pagaste con efectivo");
        break;
    case "Bizum": console.log("Pagaste con bizum");
        break;
    default: console.log("Pendiente de pago"); //Si no se cumple nada de lo anterior
        break; //necesita un break tb
}

//ESTRUCTURA DE CONTROL QUE ME COMPARE SI UN NUMERO AL MULTIPLICARLO POR SI MISMO ES MENOR QUE 100. SI ES MENOR QUE 200 Y SI NO CUMPLE LAS ANTERIORES

function múltiplo(numeroEj4) {
    if ((numeroEj4 * numeroEj4) < 100) {
        console.log("menor que 100");
    }
    else if ((numeroEj4 * numeroEj4) < 200) {
        console.log("menor que 200");
    }
    else {
        console.log("No es ninguna de las opciones")
    }
}

múltiplo(2)

//CREAR UNA ESTRUCTURA DE CONTROL CON SWITCH CON PROMPT QUE COMPARE QUE SI UN NUMERO + 10 ES  COGER LA INFO DE =9, =12, =15, =100 Y RESTO

// let número10 = parseInt(prompt("dime tu número"));
// switch (número10+10) {
//     case 9: console.log("Es igual a 9");
//         break;
//     case 12: console.log("Es igual a 12");
//         break;
//     case 15: console.log("Es igual a 15");
//         break;
//     case 100: console.log("Es igual a 100");
//         break;
//     default: console.log("no es igual a ninguno de los casos");
//         break;
// }

//ITERADORES Y BUCLES 

for (let indice = 0; indice <= 3; indice++) {
    console.log(indice + 1)
}

//mostrar por partalla del numero 100 al 200
for (let x = 100; x <= 200; x++) {
    console.log(x)
}

for (let i = 2; i <= 49; i += 2) {
    console.log(i)
}


for (let i = 100; i >= 0; i -= 5) {
    console.log(i)
}

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

//mostrar cada uno de los elementos del array
let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < arrayNumeros.length; i++) {
    console.log(i)
}//este muestra solo los indices

for (let i = 0; i < arrayNumeros.length; i++) {
    console.log(arrayNumeros[i])
}//este muestra todos los elementos


//VAMOS A RECORRER EL CARRITO DE COMPRAS Y MOSTRAR LOS OBJETOS DE UNO EN UNO Y OTRO LA PROPIEDAD NOMBRE DE CADA UNO

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
    console.log(carrito[i].nombre)
}   //el array es de carrito y luego se accede a la propiedad nombre


//WHILE

let i = 0; //variable global
while (i < 100) {
    console.log(i);
    i++; //actualizador al final de la función porque si no se actualizaría antes, en este caso empezaria por 1 en vez de 0
}

let k = 1
while (k <= 20) {
    if (k % 2 === 0) {
        console.log(k);
    }
    k++;
}

//DO WHILE

let j = 0;
do {
    console.log(j);
    j++
} while (j < 2); //asegura que al menos una vez se va a ejecutar el código aunque no cumpla porque la condición está al final


//CREAR UNA FUNCIÓN QUE DADO UN ARGUMENTO ME DIGA SI ES POSITIVO, NEGATIVO O 0;

function numeroP(y) {
    if (y > 0) {
        console.log(`Tu numero es positivo`)
    }
    else if (y < 0) {
        console.log("Tu numero es negativo")
    }
    else if (y == 0) {
        console.log("tu numero es 0")
    }
}

numeroP(0)

//CREAR UNA FUNCION QUE RECIBE COMO ARGUMENTO UN NUMERO ENTERO Y TE HACE UNA CUENTA ATRAS HASTA EL 0

function regresion(x) {
    for (let i = x; i >= 0; i--) {
        console.log(i)
    }
}
regresion(8)

//CREAR UNA FUNCION QUE DADO UN ARGUMENTO ME DA LA SUMA DE TODOS LOS NUMEROS ENTRE 0 Y N

let totalAcumulación = 0

function acumulación(x) {
    for (let i = x; i >= 0; i--) {
        totalAcumulación = totalAcumulación + i;
    } console.log(totalAcumulación)
}
acumulación(6)

//otra forma ¿?

let totalAcumulación2 = 0
function acumulación2(x) {
    for (let i = 0; i <= x; i++) {
        totalAcumulación = totalAcumulación + i;
    } console.log(totalAcumulación2)
}
acumulación2(6)

//FUNCION RECIBE ARGUMENTO QUE CALCULA LA MEDIA DE LA SUMA DE TODOS LOS VALORES usando while

function media(n) {
    let b = 0;
    while (b<=n) {
        totalAcumulación = totalAcumulación + b;
        b++;
    } console.log(totalAcumulación/b+1);
}
media(6)