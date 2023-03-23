//creando un objeto literal llamado persona con sus respectivas propiedades:
let persona = {
    nombre: "Annie",
    edad: 29,
    ciudad: "Armenia",
    profesion: "Developer"
}

//Imprimiendo en consola el objeto "persona" completo:
console.log(persona);

//creando funcion llamada "presentacion"
function presentacion(person) {
    return "Hola, mi nombre es " + persona.nombre + " tengo " + persona.edad + " años y vivo en " + persona.ciudad + ".";
}

//llamando la funcion "presentacion" y almancenando el resultado en una variable llamada "mensaje":
let mensaje = presentacion(persona);

//imprimiendo el valor de la variable mensaje en consola:
console.log(mensaje);

//agregando propiedad "hobbies" al objeto "persona":
persona.hobbies = ["leer", "jugar futbol", "viajar"];

//imprimiendo en consola la propiedad "hobbies" del objeto "persona"
console.log(persona.hobbies);

//utilizando ciclo for para imprimir en la consola cada elemento del arreglo hobbies:
for(let i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
}