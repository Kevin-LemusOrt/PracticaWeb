const btnCambio = document.querySelector('#divCambio');
const body = document.body;

btnCambio.addEventListener('click', () => {

    body.classList.toggle('Cambio');

    if(body.classList.contains('Cambio')){
        btnCambio.textContent = 'Modo claro';
    }else{
        btnCambio.textContent = 'Modo oscuro';
    }

});