let arrayListaEstudiantes = [];
console.log(arrayListaEstudiantes);

$('#generarImput').click(generarImput);
$('#mostrarLista').click(mostraListaEstudiantes);
$('#porcentajeHseTec').click(updateDropOut);
$('#porcentajeEmpleabilidad').click(filtrarEmpleabilidad);

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
        puntosHse: $('#puntoHse').val(),
        puntosTec: $('#puntoTec').val()
    };
    arrayListaEstudiantes.push(estudiante);
    console.log(arrayListaEstudiantes)
}

function mostraListaEstudiantes(l) {
    arrayListaEstudiantes.map((elemento) => {
        $('#divMostrarLista').append(`<p> Nombre: ${elemento.nombre}`, `<p>PuntosHse: ${elemento.puntosHse}</p>`,`<p>PuntosHse: ${elemento.puntosTec}</p>`)
    });
    console.log('entro')
}

function updateDropOut() {
    nuevoArrayListaEstudiantes = arrayListaEstudiantes.filter(function (alumna) {
        return (parseInt(alumna.puntosHse)+ parseInt(alumna.puntosTec))/2>= 70;
        $('#updateDropout').append(`<p> Nombre: ${alumna.nombre}`, `<p>PuntosHse: ${alumna.puntosHse}</p>`, `<p>PuntosHse: ${elemento.puntosTec}</p>`)
    });
    console.log(nuevoArrayListaEstudiantes);
}

function filtrarEmpleabilidad(){
    console.log('entra');
    nuevoArrayListaEmpleabilidad = arrayListaEstudiantes.filter(function(empleabilidad){
       return(parseInt(empleabilidad.puntosHse) + parseInt(empleabilidad.puntosTec))/2 >= 70 ; 
       $('#empleabilidad').append(`<p>Empleable</p>`)
       
    });
 }

