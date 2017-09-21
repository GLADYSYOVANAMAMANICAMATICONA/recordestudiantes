let arrayListaEstudiantes = [];
console.log(arrayListaEstudiantes);

$('#generarImput').click(generarImput);
$('#mostrarLista').click(mostraListaEstudiantes);
$('#porcentajeHse').click(updateDropOut);

function generarImput(e) {
    $('#ingrasarDatosEstudiantes').append(`Nombre: <input id='nombre'></input>\
     PuntajeHSE: <input id='puntoHse'></input>\
     PuntajeTEC: <input id='puntoTec'></input>\
     <button id='guardar' class='btn btn-primary'>Guardar</button> `);
    $('#guardar').click(agregarEstudiante)
}

function agregarEstudiante() {
    console.log("agregarEstuadiante")
    let estudiante = {
        nombre: $('#nombre').val(),
        puntosHse: $('#puntoHse').val()
    };
    arrayListaEstudiantes.push(estudiante);
    console.log(arrayListaEstudiantes)
}

function mostraListaEstudiantes(l) {
    arrayListaEstudiantes.map((elemento) => {
        $('#divMostrarLista').append(`<p> Nombre: ${elemento.nombre}`, `<p>PuntosHse: ${elemento.puntosHse}</p>`)
    });
    console.log('entro')
}

function updateDropOut() {
    nuevoArrayListaEstudiantes = arrayListaEstudiantes.filter(function (alumna) {
        return (parseInt(alumna.puntosHse)) >= 70;
        $('#updateDropout').append(`<p> Nombre: ${alumna.nombre}`, `<p>PuntosHse: ${alumna.puntosHse}</p>`)
    });
    console.log(nuevoArrayListaEstudiantes);
}



