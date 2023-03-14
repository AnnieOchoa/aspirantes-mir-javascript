/* Crea una función max que reciba un arreglo de números y retorne el número máximo sin usar el método Math.max de JavaScript. Si el arreglo está 
vacío debe retornar undefined*/

function max(numbers) {
    let numeromax = 0
    if (numbers.length === 0) {
        return undefined
    } 
    numbers.forEach(number =>{
        if (number > numeromax){
            numeromax = number
        }
    })
        return numeromax
}


console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined

