const btnCambio = document.querySelector('#divCambio');
const contenedorPrincipal = document.querySelector('.contenedorPrincipal');

btnCambio.addEventListener('click', () => {

    contenedorPrincipal.classList.toggle('Cambio');

    if(contenedorPrincipal.classList.contains('Cambio')){
        btnCambio.textContent = 'Modo normal';
    }else{
        btnCambio.textContent = 'Modo transparente';
    }

});