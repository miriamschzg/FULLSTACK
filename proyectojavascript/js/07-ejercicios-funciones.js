//función que invierta una cadena.
// F: INVERTIR
// P: CADENA

function invertir(cadena) {
    let separarCadena = cadena.split("");
    let invertirCadena = separarCadena.reverse();
    let unir = invertirCadena.join("");
    console.log(unir);
}
invertir("hola")

    //otra forma
let cadenaF="";
function invertir1(cadena){
    for (i=cadena.length-1; i>=0;i--){ //se le resta uno para empezar en la última posición
        cadenaF+=cadena[i];//cadenaF=cadenaF+cadena[i] para ir avanzando hacia atras y concatenando
    }
    return cadenaF
}
    console.log(invertir1("hola"))


// función que concatene dos cadenas.
// F: CONCATENAR
// P: CADENA1, CADENA2

function concatenar(cadena1, cadena2) {
    console.log(`${cadena1}`+` ${cadena2}`)
}

concatenar("hola", "buenos días")


// función que determine si una cadena contiene una letra.
// F: CONTIENE
// P: CADENA, LETRA DEVUELVE TRUE/FALSE

function contiene(cadena, letra) {
    console.log(cadena.includes(letra))
}
contiene("hola", "a")


// función que encuentre el número más grande en un array.
// F: MAXNUM
// P: ARRAY

let num = [1, 5, 4, 7]
function maxnum(array) {
    console.log("El número mayor es", Math.max(...array));
}
maxnum(num)

function maximo(array){
    let numeroGrande=0;
    for(let i=0; i<=array.lenght-1; i++){

    }
}

// función que encuentre el número más pequeño en un array.
// F: MINNUM
// P: ARRAY

function minnum(num) {
    console.log("El número menor es", Math.min(...num));
}
minnum(num)


// función que cuente la cantidad de elementos booleanos verdadero/falso en un array.
// F: NUMBOOLEANOS
// P: ARRAY, VALOR

arrayBoo = [true, false, true, true]

let valor = 0

function NUMBOOLEANOS(arrayBoo, valor) {
    for (i = 0; i < arrayBoo.length; i++) {
        if (arrayBoo[i] === true) {
            valor++;
        }
    } console.log(`Hay ${valor} elementos true`)

}
NUMBOOLEANOS(arrayBoo, valor)

// función que determine si todos los elementos de un array son números.
// F: ARRAYNUMEROS
// P: ARRAY
// [1, "a",2]
// nos tiene que devolver true/false includes
// igualar contador=array1.length

let array1 = [1,2,3]
let contador = 0
function ARRAYNUMEROS (array1) {
    for(i=0; i<array1.length; i++){
       if (typeof array1[i] === "number"){
        contador++;
        if (contador==array1.length){
            console.log("Todos los elementos son number")
        }
       }
       else console.log ("false")
    }

}
ARRAYNUMEROS (array1)

// función que genere un número aleatorio entre N1 y N2.
// F: NUMALEATORIO
// P: N1,N2
// con parametros y no con variables

function NUMALEATORIO(n1, n2) {
    console.log(Math.floor(Math.random() * (n2 - n1)) + n1)//se suma el n1 para establecer el mínimo 
}
NUMALEATORIO(4, 9)

// función que calcule el área de un triángulo con base y altura como parámetros. Area=base*altura/2
// F: AREATRIAGULO
// P: BASE,ALTURA

function AREATRIAGULO(base, altura) {
    console.log((base * altura) / 2)
}
AREATRIAGULO(3, 4)


// función que convierta grados Celsius a Fahrenheit.
// F: GRADOS
// P: CELSIUS

function grados(celsius) {
    console.log(`${celsius}ºC equivalen a`, (celsius * 9 / 5 + 32), `ºF`)
}
grados(23)


// función que determine si un año es bisiesto.
// F: BISIESTO
// P: DIAS

function bisiesto(días) {
    if (días === 365) {
        console.log("Este año no es bisiesto")
    }
    else if (días === 366) {
        console.log("Este año es bisiesto")
    }
    else {
        console.log("Eso no es un año")
    }
}
bisiesto(366)


// función que cuente la cantidad de vocales en una cadena.
// F: VOCALES
// P: TEXTO
// if? includes a,e,i,o,u vocales++

function vocales(texto) {
    let contador = 0;
    v = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < texto.length; i++) {
        if (v.includes(texto[i])) {
            contador++;
        }
    }
    console.log(contador)
}

vocales("hola")


// función que cuente la cantidad de palabras en una cadena.
// F: PALABRAS
// P: TEXTO
// numero de espacios+1

function palabras(texto) {
    let contador = 0;
    for (let i = 0; i <= texto.length; i++) {
        if (texto[i]=== " ") {
            contador++;
        }
    }
    console.log(contador+1);
}

palabras("hola buenas hello")


// función que elimine los elementos duplicados de un array.
// F: ELIMINADUPLICADOS
// P: ARRAY

function eliminarDuplicados(array) {
    const conjunto = new Set(array); //En esta función, eliminarDuplicados, primero creamos un Set a partir del array arr. 
    const arraySinDuplicados = Array.from(conjunto); //Luego, convertimos el Set nuevamente en un array utilizando Array.from, lo que nos da un array que contiene solo los elementos únicos.
    //Los Sets en JavaScript solo permiten valores únicos, por lo que automáticamente eliminan los duplicados. 
    console.log(arraySinDuplicados);
}

array = [1, 1, 1, 3, 3, 4, 5]
eliminarDuplicados(array)


// función que ordene un array de números de forma ascendente.
// F: ORDENARARRAY
// P: ARRAY
// menor a mayor

const arr = [3, 1, 4, 1, 8, 5, 3, 5];
function ordenarAscendentemente(arr) {
    // Utiliza el método sort para ordenar el array en orden ascendente
    arr.sort(function (a, b) {
        return a - b;
    });
}
ordenarAscendentemente(arr);
console.log("Array ordenado de forma ascendente:", arr);

    //OTRA FORMA
function ordenar1(arr){

}


// función que muestre la tabla de multiplicar de un numero.
// F: TABLAMULTIPLICAR
// A: NUMERO
// numero* ++

function tablamultiplicar(numero) {
    multiplicador = 1
    while (multiplicador <= 10) {
        console.log(multiplicador * numero);
        multiplicador++
    }
}
tablamultiplicar(9)


// función que tome un número del 1 al 12 y devuelva el nombre del mes
// correspondiente utilizando una declaración switch
// F: NOMBREMES
// P: NUMMES

function nombremes(nummes) {
    switch (nummes) {
        case 1: console.log("Enero");
            break;
        case 2: console.log("Febrero");
            break;
        case 3: console.log("Marzo");
            break;
        case 4: console.log("Abril");
            break;
        case 5: console.log("Mayo");
            break;
        case 6: console.log("Junio");
            break;
        case 7: console.log("Julio");
            break;
        case 8: console.log("Agosto");
            break;
        case 9: console.log("Septiembre");
            break;
        case 10: console.log("Octubre");
            break;
        case 11: console.log("Noviembre");
            break;
        case 12: console.log("Diciembre");
            break;
    }
}
nombremes(1)
nombremes(4)


// función que determine si una contraseña es segura basándose en
// longitud>8,
// mayúsculas y minusculas
// números
// F: CONTRASEÑASEGURA
// P: CONTRASEÑA

function CONTRASEÑASEGURA(contraseña){
     if (contraseña.length>=8 && 
        (/[A-Z]/).test(contraseña) && 
        (/[a-z]/).test(contraseña)&& 
        (/\d/).test(contraseña)) { //por que es al reves el método?
         console.log("Contraseña segura")
     }
     else{
         console.log("Contraseña no segura")
     }
 }
CONTRASEÑASEGURA("Buenosdias1")


// función que tome una cadena y reemplace todas las letras 'LETRA1' por 'LETRA2'.
// F: REEMPLAZAR
// P: TEXTO, LETRA1, LETRA2;*/

function REEMPLAZAR(texto, letra1, letra2) {
    if (texto.includes (letra1)){
        texto.replace(letra1, letra2);
        console.log("Esto es una cadena modificada", REEMPLAZAR)
    }
    
}

REEMPLAZAR("Hola", "o", "a")


function reemplazo(texto, letra1, letra2){
    texto.replace(letra1,letra2);
    console.log("Esto es una cadena modificada", reemplazo)
    }
reemplazo("o", "o", "a")