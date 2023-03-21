function obtenerMayor(edades){
    const divPagina = document.querySelector('#mostrar-resultados');
    const nuevoParrafo = document.createElement('p');
    const textoParrafo = document.createTextNode(`La mayor edad es: ${Math.max(...edades)}`);
    nuevoParrafo.appendChild(textoParrafo);
    divPagina.appendChild(nuevoParrafo);
    return;
}
function obtenerMenor(edades){
    const divPagina = document.querySelector('#mostrar-resultados');
    const nuevoParrafo = document.createElement('p');
    const textoParrafo = document.createTextNode(`La menor edad es: ${Math.min(...edades)}`);
    nuevoParrafo.appendChild(textoParrafo);
    divPagina.appendChild(nuevoParrafo);
    return;
}
function obtenerPromedio(edades){
    let suma = 0;
    for (let i = 0; i < edades.length; i++) {
        suma += edades[i];    
    }
    const divPagina = document.querySelector('#mostrar-resultados');
    const nuevoParrafo = document.createElement('p');
    const textoParrafo = document.createTextNode(`El promedio de las edades es: ${suma/edades.length}`);
    nuevoParrafo.appendChild(textoParrafo);
    divPagina.appendChild(nuevoParrafo);
    return;
}