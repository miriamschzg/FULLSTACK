//DECLARACIÓN DE LA FUNCIÓN

//primero creamos la función

sumar(10,20); //segundo llamamos la función

function sumar(n1,n2){ //argumento de la función, llamamos la funcion como queramos
	console.log(n1 + n2); //cuerpo de la función
};


// sumar(27,14); // se puede reutilizar



//EXPRESIÓN DE LA FUNCIÓN

const sumar2 = function(n3,n4){ //los argumentos solo tienen aplicación dentro de la función
	console.log(n3 + n4);
}
sumar2(9,8);


//IIFE

(function () {
	console.log("Esto es una función")
})();



//DIFERENCIA ENTRE MÉTODO Y FUNCTION

const numero1 = 20;
const numero2 = "20";

console.log(typeof(parseInt(numero2)));
console.log(typeof(numero1.toString()));



//EJERCICIO CREAR UNA FUNCION QUE RECIBA COMO ARGUMENTO UN COLOR Y MUESTRE "EL COLOR ELEGIDO ES"

function color (c1){
    console.log("El color elegido es", c1)
}

color("morado");



//EJERCICIO CREAR UNA FUNCION QUE RECIBA ARGUMENTOS IMPORTE Y DESCUENTO Y MUESTRE AMBOS VALORES DESCUENTO TOTAL Y PRECIO FINAL

function precioFinal(importe, descuento){
    console.log(`Èl precio final es ${((importe-(importe*descuento)/100))} y el descuento total es ${(importe*descuento)/100}`);
}

precioFinal(30,10)
precioFinal (50,20)



//CREAR UNA FUNCION QUE CUENTE LOS CARACTERES DE UN TWEET, EL ARGUMENTO DE ENTRADA ES EL TEXTO DEL TWEET

function tweet(texto){
    console.log("El numero de caracteres es", texto.length);
}

tweet("hola buenos días");



//CREAR UNA FUNCION QUE RECIBE COMO ARGUMENTO DE ENTRADA UN TEXTO Y UNA PALABRA, ME DIGA SI LA PALABRA ESTÁ CONTENIDA EN EL TEXTO

function buscar(texto, palabra){
    console.log("Buscamos la palabra en el texto, ¿está?:", texto.includes(palabra));
}

buscar("Hola buenos días", "buenos")



//CREAR UNA FUNCIÓN QUE AÑADA UN ELEMENTO AL FINAL A UN ARRAY PREVIAMENTE DEFINIDO. MOSTRARLO POR CONSOLA. RECIBE COMO ARGUMENTO DE ENTRADA EL ELEMENTO
//LA FUNCION SE LLAMARÁ AÑADIR

let frutas = ["pera", "plátano"]

function añadir(otrafruta){
    frutas.push(otrafruta);
    console.log(frutas)
}

añadir("manzana")
añadir("fresa")



//CREAR UNA FUNCION QUE ME RESTE DOS VALORES DADOS

function restar(n1,n2){
    console.log("La resta de estos valores es:", n1-n2);
}
restar(20,2)


//FUNCIONES QUE RETORNAN VALORES

function multiplicar (x,y){
	return x*y; 
}
    //ALMACENAMOS ESE RESULTADO EN UNA VARIABLE

let resultadoMultiplicar=multiplicar(2,3)
console.log (resultadoMultiplicar);



//FUNCION QUE AGREGA AL CARRITO EL IMPORTE

let totalCarrito=0;

function agregarCarrito(precioArtículo){
    return totalCarrito+=precioArtículo; //el return se puede quitar
}

agregarCarrito(50);
agregarCarrito(20);
agregarCarrito(10);
console.log(`El importe total es: ${totalCarrito}€`)

//EJERCICIO
//FUNCION QUE CALCULE EL DESCUENTO QUE SE INDIQUE DE LOS PRODUCTOS ANTERIORES UNO A UNO Y LOS SUME

let descuento=0.2;
let totalAhorro=0;

function calcularDescuento(precio){
    return totalAhorro+=(precio*descuento);
}
calcularDescuento(100);
console.log(`El ahorro total es de ${totalAhorro}€`)
calcularDescuento(120);
console.log(`El ahorro total es de ${totalAhorro}€`)
calcularDescuento(350);

console.log(`El ahorro total es de ${totalAhorro}€`)


//COMO CREAR NUESTROS MÉTODOS

let reproductor = {
    reproducir:function (x){
    console.log(`Reproduciendo Canción con ID: ${x}`)
    },

    pausar : function(){
        console.log(`Pausando canción...`)
    },

    crearPlaylist : function(nombre){
        console.log(`Creando Playlist: ${nombre}`)
    }
}

reproductor.reproducir(17);
reproductor.pausar();
reproductor.crearPlaylist("chill");

//creamos una propiedad tipo función

reproductor.borrarCanción = 
    function(id){
        console.log(`Borrando la canción con ID ${id}`)
    }
reproductor.borrarCanción(33)



//FUNCIONES DE FLECHA ARROW

let triplicar=function(x){
    return x*3;
}

console.log (triplicar(9))//se puede llamar y mostrar a la vez

//si solo hay una linea de código podemos quitar las llaves
//si solo tenemos un argumento y no está inicializado, es decir, con valor, desaparecen
//la palabra reservada función desaparece
//return desaparece también:

let triplicar2 = x => x*3;
let cuboFlecha = (numero=1) => numero*numero*numero //aqui ya está inicializado el argumento y por eso no se pueden quitar los paréntesis



//EJERCICIO QUE DEVUELVA UN NUMERO +7 Y LO ALMACENE EN UNA VARIABLE

let resultadoAprendiendo;

let aprendiendo = x => resultadoAprendiendo=(x+7);

aprendiendo(2)

console.log(resultadoAprendiendo)


//otra forma

let aprendiendo2 = x => x+7
let resultadoAprendiendo2 = aprendiendo2(3);
console.log(resultadoAprendiendo2)

//SOME IDEAL PARA ARRAY DE OBJETOS, BUSCA ESE VALOR DENTRO DEL ARRAY

let carrito = [
    {
        nombre:"TV",
        precio:750,
    },
    {
        nombre: "Tablet",
        precio:350,
    },
    {
        nombre:"movil",
        precio:550,
    },
    {
        nombre:"PC",
        precio:1750
    }
];

let resultado;
resultado = carrito.some(producto=>producto.nombre==="Tablet");
console.log("RESULTADO DE LA FUCTION SOME IDEAL CON FUNCTION ARROW", resultado)



//EJERCICIO TRANSFROMAR A ARROW
resultado = carrito.reduce(function (total,producto){
    return total + producto.precio
},0) //valor donde inicia
console.log("uso de reduce para el precio total:", resultado)


resultado = carrito.reduce((total, producto) => total+producto.precio, 0)//ES EL VALOR INICIAL DE LA VARIABLE
console.log("USO DE REDUCE", resultado)



//FILTER CON FUCTION
resultado = carrito.filter(function (producto) {
    return producto.precio >= 400
})
console.log(resultado)

//FILTER CON ARRAY
resultado=carrito.filter(producto=> producto.precio>=400)
console.log("USO DE FILTER",resultado)



//CREAR UNA FUNCION QUE SUME 3 NUMEROS DAADOS. PONERLA CON EXPRESION, DECLARACION Y COMO FUNCION ARROW.

function sumaDeclaracion(n1,n2,n3){
    console.log(n1+n2+n3)
}
sumaDeclaracion(2,3,2)


let sumaExpresion = function(n1,n2,n3){
    console.log(n1+n2+n3)
}
sumaExpresion(2,2,2)


let sumaFlecha=(n1,n2,n3)=> n1+n2+n3;
    console.log(sumaFlecha(2,2,2))

let sumaFlecha1=(n1,n2,n3)=> console.log(n1+n2+n3); //solo aparace en inspector
    sumaFlecha1(2,5,7)



//CREAR UNA FUNCION QUE BUSQUE ELEMENTOS DE UN ARRAY NUMEROS. PONERLA CON EXPRESION, DECLARACION Y COMO FLECHA.

let numeros=[10,20,30]

function buscaExpresion(array,n1){
    console.log (numeros.includes(n1))
}
buscaExpresion(numeros,10)

let buscaDeclaracion = function(array,n1){
   return array.includes(n1)
}
console.log (buscaDeclaracion (numeros,10))

let buscaFlecha = (array,n1) => (array.includes(n1))
    console.log(numeros.includes(20))


//CREAR UNA FUNCION DE FLECHA QUE DADOS 2 PARÁMETROS ME DE 10 VECES LA SUMA DE AMBOS

let suma10 = (x,y) => 10*(x+y)
console.log (suma10(2,3))

//FUNCION DE FLECHA QUE DADO DOS PARAMETROS ME INDIQUE EL NUMERO DE CARACTERES DE LOS DOS

let caracteres = (x,y) => (x.length)+(y.length);

console.log (caracteres("hola buenas", "que tal"))

//FUNCIÓN DE FLECHA QUE QUITE EL ULTIMO ELEMENTO DEL FINAL DE UN ARRAY QUE CREEMOS CADA VEZ QUE LA LLAMAMOS


let eliminar = array => array.pop();
let elementos = [1,2,3,4,5]
eliminar(elementos)
console.log(elementos)