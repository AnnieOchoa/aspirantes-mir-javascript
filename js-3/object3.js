//Creando la variable "receta" como objeto literal vacio:
let receta = {}

//Agrenando la propiedad "nombre" al objeto "receta":
receta.nombre = "sandwich";

//Agreando la propiedad "ingredientes" al objeto "receta" como un arreglo vacio:
receta.ingredientes = [];

//agregando objeto pan al arreglo de ingredientes:
receta.ingredientes.push({
    nombre: "Pan" , 
    cantidad: 2 
});

//agregando ingredientes 2 al arreglo "ingredientes" de la receta:
receta.ingredientes.push({
    nombre: "Queso",
    cantidad: 1,
});

//imprimiendo en la consola el nombre del primer ingrediente que debe ser Pan:
console.log(receta.ingredientes[0].nombre);

/*sumando todas las cantidades de los ingredientes y mostrando el resultado en 
consola*/
let totalIngredientes = 0;
for (let i = 0; i < receta.ingredientes.length; i++) {
    totalIngredientes += receta.ingredientes[i].cantidad;
}

console.log("La cantidad total de los ingredientes es: " + totalIngredientes);