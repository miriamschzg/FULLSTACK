//PROGRAMACIÓN ORIENTADA A OBJETOS

//objet literal, crear objetos de manera manual (lo que hemos estaod haciendo)
const producto = {
    nombre: "tablet",
    precio: 750,
}

//objet construct, crea objetos de manera dinámica
//clases (contenedor de datos) se asimilan bastante a las funciones

// FORMAS DE CREAR CLASES
//SIEMPRE EMPIEZAN POR MAYUSCULA
function ProductoClase(nombre, precio, disponibilidad=false,categoria="play"){ //entre parentesis los parametros que queremos que sean propiedades
    this.nombreObjeto = nombre; //puedo usar el mismo nombre del parametro porque ahora es propiedad pero puede ser el que quiera
    this.precioObjeto = precio;
    this.categoria = categoria;
    this.disponibilidad = disponibilidad;
}

//creamos una instancia que es llamar y evaluar a la clase
const producto2 = new ProductoClase("Monitor", 800, true, "tech") //mismo orden que al crear la clase(funcion) para que se asignen los parámetros
const producto3 = new ProductoClase("PC", 1800) //si no añado todos, se quedan igual
const producto4 = new ProductoClase("Reloj", 800)

console.log(producto2)
console.log(producto3)
console.log(producto4)

//CREAR UN OBJETO CON OBJECT CONSTRUCTOR LLAMADO FECHA CON P: AÑO, MES, DIA
//DAR 4 VALORES DISTINTOS

function Fecha(año=2023, mes, dia){
    this.año=año;
    this.mes =mes;
    this.dia = dia;
}

const fecha2 = new Fecha(2023, 10, 25)
const fecha3 = new Fecha(2023, 10, 26)
const fecha4 = new Fecha(2023, 10, 27)
const fecha5 = new Fecha (2024, 10, 28)

console.log(fecha2)
console.log(fecha3)
console.log(fecha4)
console.log(fecha5)

//SI QUEREMOS CREAR UNA FUNCION DENTRO, NO SE PUEDE DIRECTAMENTE
//PARA ELLO, NACE EL PROTOTYPE, SOLO SON FUNCIONES QUE SE UTILIZAN EN UN OBJETO ESPECIFICO

ProductoClase.prototype.formatearProducto = function(){ //esa funcion se crea solo para ese objeto
    return(`El producto ${this.nombreObjeto} tiene un precio de ${this.precioObjeto}€`)
}

//CREAR INSTANCIAS PARA PRODUCTO5, 6, 7
const producto5 = new ProductoClase ("Switch", 300)
const producto6 = new ProductoClase ("iPhone 14", 879)
const producto7 = new ProductoClase ("iPad", 569)

console.log(producto5.formatearProducto(producto5))
console.log(producto6.formatearProducto(producto6))
console.log(producto7.formatearProducto(producto7))

//la lllamamos como . porque es una propiedad nueva que hemos creado arriba con el prototype



//OTRA FORMA DE CREAR OBJETOS MEDIANTE CONSTRUCTORES pero asi no se pueden añadir propiedades mas tarde, hay que atacar directamente en ella

class ProductoClase2{
    constructor(nombre,precio){ //ES UNA FUNCIÓN EN SI, constructor para propiedades simples, las funciones van fuera de este
        this.nombreObjeto2 = nombre;
        this.precioObjeto2 = precio;
    }
    formatearProducto2(){ //es una propiedad igual
        return(`El producto ${this.nombreObjeto2} tiene un precio de ${this.precioObjeto2}€`)
    }
    calcularDescuento1(){
        return (`Precio de ${this.nombreObjeto2} con descuento es ${this.precioObjeto2 * (1-0.2)}`)

    }
}

const producto8 = new ProductoClase2 ("televisor", 300)
console.log(producto8.formatearProducto2(producto8))
console.log(producto8.calcularDescuento1(producto8))

//EJERCICIO DESCUENTO DEL 20%


//con prototype:
ProductoClase2.prototype.calcularDescuento = function (){
    return (`Precio de ${this.nombreObjeto2} con descuento es ${this.precioObjeto2 * (1-0.2)}`)
}

console.log(producto8.calcularDescuento(producto8))


//HERENCIA

//object constructor con propiedades, nombre, precio e isbn
//haciendo uso del constructor y genera una instacia al menos

class Libro{
    constructor (nombre, precio, isbn){
    this.nombre = nombre;
    this.precio=precio;
    this.isbn=isbn 
    }
}
const libro1 = new Libro ("Jane Eyre", 15.99, 8237472) //crea objeto nuevo (libro1) en la clase Libro
const libro2 = new Libro ("Orgullo y Prejuicio", 14.99, 2934723)

console.log(libro1.precio)
console.log(libro1)

//LA HERENCIA SE USA PARA COPIAR PROPIEDADES DE UNA CLASE A OTRA Y SE PUEDEN AÑADIR COSAS, DEJANDO LA ORIGINAL IGUAL

class Biblioteca extends Libro{ //dice de que clase vamos a heredar
    constructor(nombre,precio,isbn,categoria){ //se ponen todas las que queramos heredar
        super(nombre,precio,isbn) //añadir las categorias heredadas
        this.categoria=categoria; //definir la nueva
    }
    formatearProducto3(){
        console.log(`El libro ${this.nombre} pertenece a la categoria ${this.categoria}`)
    }
}

// LOS METODOS NO SE PUEDEN HEREDAR PORQUE DEPENDEN DEL CONTRUCTOR

/*CREAR UN OBJET CONSRUCTOR COCHE
CON PROPIEDADES MARCA, AÑOCOMPRA, MOTOR, MATRICULA
UNA FUNCION/METODO QUE ME DIGA EL NUMERO DE AÑOS QUE TIENE EL COCHE
CREAR DOS INSTANCIAS, UNO PARA TU COCHE Y OTRA PARA EL DE TU PADRE*/

class Coche {
    constructor (marca, añocompra, motor, matricula){
        this.marca=marca;
        this.añocompra=añocompra;
        this.motor=motor;
        this.matricula=matricula;
    }
}

const micoche = new Coche ("opel",2005, "diesel", "28344DTR")
const cochePadre = new Coche ("kia", 2022, "hibrido", "48475MSG")

console.log(micoche)
console.log(cochePadre)

//CREAR OTRO CONSTRUCTOR DE OBJETOS ITV QUE HEREDE LA CLASE COCHE EL AÑOCOMPRA, MATRICULA Y AÑADIR AÑOITV
// Y ME DE UN METODO CON EL TIEMPO QUE ME FALTA PAR LA PROXIMA ITV

class ITV extends Coche {
    constructor (añocompra, matricula,añoitv){
        super(añocompra, matricula)
        this.añoitv=añoitv;
    }
    proximaITV(){
        let añoActual = new Date().getFullYear();
        if (this.añoitv>añoActual){
            console.log (`Para la proxima ITV quedan ${this.añoitv-añoActual} años`)
        }
        else {
            console.log("Tienes que pasar la ITV este año")
        }
    }
}

const micoche1 = new ITV (2005, "28344DTR", 2023)
const cochePadre1 = new ITV (2022, "48475MSG", 2026)

// console.log(micoche1.proximaITV(micoche1))
micoche1.proximaITV(micoche1)
cochePadre1.proximaITV(cochePadre)
