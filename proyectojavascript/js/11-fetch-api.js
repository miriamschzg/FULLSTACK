function obtenerEmpleados(){
    fetch("empleados.json") //puede ser una url externa, la que tenga la api
        .then(resultado =>{ //promesa
            return resultado.json() //si el resultado de la promesa es satisfactorio, me devuelve resultado.json
        })

        .then(datos =>{ //cuando nos devuelve el resultado (se cumple la anterior promesa), se trabaja con los datos que es un array
            const{empleados} = datos; //destructuring para crear variables a partir de las propiedades, las respuestas son arrays de objetos
            //empleados es una variable nueva y recibe los datos de datos
            console.log(empleados);

            empleados.forEach(empleado => {
                console.log(empleado)
                console.log(empleado.id)
                console.log(empleado.nombre)
                console.log(empleado.puesto)
            })

        })
}

obtenerEmpleados();

//otra forma con async
async function obtenerEmpleados2(){ //porque va a depender del fetch que le hacemos antes a la base de datos

    const resultado = await fetch ("empleados.json"); //aceso al json y lo acumula en resultado
    const datos = await resultado.json(); // acumula la variable resultado en datos
    
    console.log(datos)//empleados:array(4) en consola

    const{empleados} = datos; //hay que hacer destructuring para acceder al array empleados
    empleados.forEach(empleado => {
        console.log(empleado)
        console.log(empleado.id)
        console.log(empleado.nombre)
        console.log(empleado.puesto)
    })
} 

obtenerEmpleados2();