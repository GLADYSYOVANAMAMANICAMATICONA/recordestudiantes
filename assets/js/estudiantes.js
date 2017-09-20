
let arrayListaEstudiantes = []
$('#generarImput').click(generarImput)

function generarImput(e) {
    $('#ingrasarDatosEstudiantes').append(`Nombre: <input id='nombre'></input>\
     PuntajeHSE: <input id='puntoHse'></input>\
     <button id='guardar' class='btn btn-primary'>Guardar</button> `);
    $('#guardar').click(agregarEstudiante)

};

function agregarEstudiante() {
    console.log("agregarEstuadiante")
    var estudiante = {
        nombre: $('#nombre').val(),
        puntosHse: $('#puntoHse').val()
    };
    arrayListaEstudiantes.push(estudiante);
    console.log(arrayListaEstudiantes)
    $('#mostrarLista').click(mostraListaEstudiantes)

};

function mostraListaEstudiantes() {
    
        // x = $('#divMostrarLista')
        // x.$('#divMostrarLista') = arrayListaEstudiantes.map();

F        //     x = document.getElementById("demo")
        //     x.innerHTML = numbers.map(Math.sqrt);
        // }
    // var lista = mostraListaEstudiantes.map();
    // $('#divMostrarLista').append(lista)

    // let muestra = " ";
    //     for (let i in arrayListaEstudiantes) {
    //         muestra += (arrayListaEstudiantes[i]);

    //     }
};




// let alumnasMayoresPorcentajes = arrayListaEstudiantes.filter(function (arrayListaEstudiantes) {
//     if (puntosHse <= 80) {
//        $()
//     }
// });




// function guardarDatos(f) {
//     let nuevoNombre = $('#nombre').val();
//     let nuevoPuntoHse = $('#puntoHse').val();
//     arrayListaEstudiantes.push(nuevoNombre,nuevoPuntoHse);   
// }
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado

