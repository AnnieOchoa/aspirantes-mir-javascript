const input = document.querySelector('#texto');
    const resultado = document.querySelector('#resultado');

    input.addEventListener('input' , function () {
        const texto = input.value.toUpperCase();
        resultado.textContent = texto;
    });

const btn = document.querySelector('.btn');    

    btn.addEventListener('click', function(){
        alert('Se hizo click en el boton');
    });