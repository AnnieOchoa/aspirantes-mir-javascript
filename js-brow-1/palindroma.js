const input = document.querySelector('#texto');
const resultado = document.querySelector('#resultado');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
    const texto = input.value;

    const textoAlReves = [];
    for (let i = texto.length; i >= 0; i--){
        textoAlReves.push(texto[i]);
    }
    const textoAlRevesFormateado = textoAlReves.toString().replace(/,/g, '').toLowerCase();

    if (texto === '') {
        return alert ('Debes escribir un texto')
    }

    if (textoAlRevesFormateado === texto.toLowerCase()) {
        alert ('Esto es un palindromo!')
    } else {
        alert ('Esto no es un palindromo!')
    }

})
