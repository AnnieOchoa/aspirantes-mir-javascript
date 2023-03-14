/*Crea una función maxIndex que reciba una arreglo de números y retorne el índice donde se encuentra el mayor. Si el arreglo está vacío debe 
retornar -1.*/

function maxIndex(numeros) {
    let maxIndex = 0
    let maxIndexNumero = 0
    if (numeros.length === 0) {
        return -1;
    }
    numeros.forEach(num => {
        if (num > maxIndex) {
            maxIndex = num
            maxIndexNumero = numeros.indexOf(num)
        }
    })

    return maxIndexNumero
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1