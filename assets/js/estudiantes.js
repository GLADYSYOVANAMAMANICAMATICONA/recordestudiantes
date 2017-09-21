let arrayListaEstudiantes = [];

$('#generarImput').click(generarImput);
$('#mostrarLista').click(mostraListaEstudiantes);

function generarImput(e) {
    $('#ingrasarDatosEstudiantes').append(`Nombre: <input id='nombre'></input>\
     PuntajeHSE: <input id='puntoHse'></input>\
     <button id='guardar' class='btn btn-primary'>Guardar</button> `);
    $('#guardar').click(agregarEstudiante)
}

function agregarEstudiante() {
    console.log("agregarEstuadiante")
    var estudiante = {
        nombre: $('#nombre').val(),
        puntosHse: $('#puntoHse').val()
    };
    arrayListaEstudiantes.push(estudiante);
    console.log(arrayListaEstudiantes)
}

function getFullName(item, index) {
    var fullname = [item.nombre, item.puntosHse].join(" ");
}

function mostraListaEstudiantes() {
    console.log('entro')
    $('divMostrarLista').append(arrayListaEstudiantes.map(getFullName));
}

arrayListaEstudiantes.toString();
$('divMostrarLista').append(arrayListaEstudiantes)
