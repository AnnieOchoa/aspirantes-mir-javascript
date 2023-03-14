/* Crea una función sum que reciba un arreglo de números y retorne la suma de todos los elementos: */

function sum(numbers) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i]
    }

        return result;
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0
