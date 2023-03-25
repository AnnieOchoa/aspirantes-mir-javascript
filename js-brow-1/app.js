const input = document.querySelector('#texto');
const resultado = document.querySelector('#resultado');
const resultadoMayuscula = document.querySelector('#resultadoMayusculas');
let mayusculas = 'Convertir mensaje a mayúsculas'
let minusculas = 'Convertir mensaje a minúsculas'

    input.addEventListener('input' , function () {
        const texto = input.value;
        resultado.textContent = texto;
        resultadoMayuscula.textContent = texto.toUpperCase();
    });

const btn = document.querySelector('.btn');    

    btn.addEventListener('click', function(e){
        resultadoMayuscula.classList.toggle('hide')
        resultado.classList.toggle('hide')
        e.target.textContent === minusculas ? 
        e.target.textContent = mayusculas :
        e.target.textContent = minusculas
    });