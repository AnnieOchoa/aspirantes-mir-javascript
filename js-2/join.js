/*Crear una función join que reciba un arreglo y retorne un string con todos los elementos separados por espacio sin usar el método join de los 
arreglos.*/

function join(arreglo) {
    let str = ""; 
    for (let i = 0; i < arreglo.length; i++) {
        str += arreglo[i];

        if (i !== arreglo.length - 1) {
            str += " ";
        }
    }

    return str;
}

console.log(join(['Esta', 'funcion', 'es', 'una', 'prueba', 'de', 'texto']))
console.log(join([30, 31, 'y', 28, 'son', 'la', 'cantidad', 'de', 'dias', 'de', 'algunos', 'meses', 'del', 'año']))
console.log(join(['Me', 'ire', 'de', 'viaje']))

