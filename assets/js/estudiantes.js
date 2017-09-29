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
    limpiar()
}

function agregarEstudiante() {
    console.log("agregarEstuadiante")
    let estudiante = {
        nombre: $('#nombre').val(),
        puntosHse: $('#puntoHse').val(),
        puntosTec: $('#puntoTec').val(),
    };
    
    arrayListaEstudiantes.push(estudiante);
    limpiar();
    console.log(arrayListaEstudiantes)

}

function mostraListaEstudiantes(l) {
    arrayListaEstudiantes.map((elemento) => {
        $('#divMostrarLista').append(`<p> Nombre: ${elemento.nombre}`, `<p>PuntosHse: ${elemento.puntosHse}</p>`,`<p>PuntosHse: ${elemento.puntosTec}</p>`)
    });
    console.log('entro')
}

function updateDropOut(e) {
    nuevoArrayListaEstudiantes = arrayListaEstudiantes.filter(function (alumna) {
        if ((((parseInt(alumna.puntosHse))+ (parseInt(alumna.puntosTec)))/2)>= 70){
            $('##divMostrarLista').append(`<p> Nombre: ${alumna.nombre}`, `<p>PuntosHse: ${alumna.puntosHse}</p>`, `<p>PuntosHse: ${alumna.puntosTec}</p>`)                    
        }        
    });
}

function filtrarEmpleabilidad(){
    console.log('entra');
    nuevoArrayListaEmpleabilidad = arrayListaEstudiantes.filter(function(empleabilidad){
       if((((parseInt(empleabilidad.puntosHse)) + (parseInt(empleabilidad.puntosTec)))/2)>= 70){
        $('#divMostrarLista').append(`<p>Empleable</p>`)
       }       
    });
 }

function limpiar() {
  $("#nombre").val(" ");
  $('#puntoHse').val(" "),
  $('#puntoTec').val(" ")
}
