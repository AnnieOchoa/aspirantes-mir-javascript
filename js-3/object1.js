//Creacion del objeto

let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"]
}

//Impresion del valor de la llave edad
console.log(pedro.edad);


//Agregando propiedad con llave estatura y valor 1.8 
pedro.estatura = 1.8

//Eliminando la propiedad con llave activo
delete pedro.activo;

//Recorriendo todas las propiedades e imprimiendo en consola --- REVISARRRRRRR
for (let propiedad in pedro) {
    if (pedro.hasOwnProperty(propiedad)) {
        console.log(pedro[propiedad]);
    }
}

//Agregando funcion saluda al objeto
pedro.saluda = function (saludando){
    return 'Hola, me llamo ' + pedro.nombre;
}

//Llamamos la funcion saluda y verificamos el resultado
console.log(pedro.saluda());



