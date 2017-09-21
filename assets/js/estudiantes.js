let arrayListaEstudiantes = [];
console.log(arrayListaEstudiantes);

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
    let estudiante = {
        nombre: $('#nombre').val(),
        puntosHse: $('#puntoHse').val()
    };
    arrayListaEstudiantes.push(estudiante);
    console.log(arrayListaEstudiantes)
}

function mostraListaEstudiantes(l) {
    arrayListaEstudiantes.map((elemento)=>{
       
        $('#divMostrarLista').append(`<p>${elemento.nombre}---${ elemento.puntosHse}</p>`)
    });
    console.log('entro')
}

// function mostraListaEstudiantes() {
//     arrayListaEstudiantes.map((elemento)=>{
       
//         $('#divMostrarLista').append(`<p>${elemento.nombre}---${ elemento.puntosHse}</p>`)
//     });
//     console.log('entro')
// }

