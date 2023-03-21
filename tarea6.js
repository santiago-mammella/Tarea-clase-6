document.querySelector('#mostrar').onclick = function(){
    borrarIntegrantes();
    const $cantidadPersonas = document.querySelector('#cantidad-personas').value;
    crearIntegrantes($cantidadPersonas);

    return false;
}

function crearIntegrantes($cantidadPersonas){
    for (let i = 0; i < $cantidadPersonas; i++) {
        crearIntegrante(i);
    }
    document.querySelector('#calcular').className = 'activo';
}

function crearIntegrante(indice) {
    const $div = document.createElement('div');
    $div.className = 'integrante';

    const $label = document.createElement('label');
    $label.textContent = 'Edad del integrante #: ' + (indice + 1);
    const $input = document.createElement('input');
    $input.type = 'number';

    $div.appendChild($label);
    $div.appendChild($input);

    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($div);
}

document.querySelector('#calcular').onclick = function(){
    const edades = obtenerEdades();
    obtenerMayor(edades);
    obtenerMenor(edades);
    obtenerPromedio(edades);
    document.querySelector('#calcular').className = 'oculto';
    return false;
}

function obtenerEdades(){
    const $integrantes = document.querySelectorAll('.integrante input');
    const edades = [];
    for (let i = 0; i < $integrantes.length; i++) {
        edades.push(Number($integrantes[i].value));       
    }
    return edades;
}

document.querySelector('#reiniciar').onclick = borrarIntegrantes();

function borrarIntegrantes() {
    const $integrantes = document.querySelectorAll('.integrante');
    for (let i = 0; i < $integrantes.length; i++) {
        $integrantes[i].remove();
    }
    return
}
