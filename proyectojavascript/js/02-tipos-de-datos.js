const producto1 = "Juego de mesa EL PUEBLO DUERME";
const producto2 = String("DOOBLE");
const producto3= new String("UNO");

console.log("producto:", producto1);
console.log("producto con string",producto2);
console.log("producto3 con new string", producto3);

console.log("producto:", typeof producto1);
console.log("producto con string",typeof producto2);
console.log("producto3 con new string", typeof producto3);

let numero100,
    numero200;

numero100 = 100;
numero200 = "200"

console.log(typeof numero100);
console.log(typeof numero200)

console.log("METODO LENGHT:", producto1.length);

console.log("METODO INDEXOF:", producto1.indexOf("DUERME"));

console.log("MÉTODO INCLUDES:", producto1.includes("DUERME"));

let ejString1="EJERCICIO STRING",
    ejString2=" HOLA EJERCICIO STRING",
    ejString3="EJERCICIO STRING 2";

console.log("Método lenght ejercicio:", ejString1.length);
console.log("Método indexof ejercicio", ejString2.indexOf("EJERCICIO"));
console.log("Método includes ejercicio", ejString3.includes("STRING"));


/*EJERCICIO
    CREAR UNA VARIABLE QUE SE LLAME RESULTADO Y QUE 
    ALMACENE UN NUMERO ALEATORIO ENTRE 0-1
    Y MOSTRATRARLA POR PANTALLA
*/

let resultado = Math.random();

console.log("USO DE METODO RANDOM():",resultado);


//EJERCICIO CREAR UN DADO
let dado = Math.round(1+Math.random()*5);

console.log("Resultado dado:", dado);

//EJERCICIO
//NUMERO ALEATORIO ENTERO ENTRE 0 Y 30 ENTERO

    resultado = Math.round(Math.random()*30);
    console.log("NUMERO ALEATORIO ENTERO ENTRE 0 Y 30",resultado);
    Math.floor( Math.random()*30); //para que nos de un numero entero


//INCREMENTOS/DECREMENTOS
//EJEMPLO REALES, EL NUMERO DE ME GUSTAS EN INSTAGRAM
    
    let meGusta=10;

    megusta-=6; // megusta=megusta-6;
    megusta++// meGusta=meGusta+1;
    
    console.log("USO DE INCREMENTOS, ME GUSTA:",meGusta);
    console.log("USO DE INCREMENTOS, ME GUSTA 2:",meGusta++);