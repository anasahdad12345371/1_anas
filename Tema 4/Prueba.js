//soy un comentario en JavaScript
// alert('prueba de código');
var mensaje = 'hola mundo quetal';
console.log(mensaje);
console.log(document);
console.log(localStorage);
var esViernes = true;
console.log('esViernes y queremos irnos: ' + esViernes);
if (esViernes == true) {
    console.log('es viernes, nos vamos de fiesta');
}

// var  nombreUsuario = prompt('Introduce su nombre: ');

function comprobarPass() {
    var pass1 = document.getElementById('pass1').value;
    var pass2 = document.getElementById('pass2').value;
    return pass1 == pass2;
}

function enviarFormulario() {
    console.log('Llamando a la funciion enviarFormulario');
    div = document.getElementById("mensajes");

    //las pass coinciden 
    if(comprobarPass()){
        var nombre = document.getElementById('nombre').value;
        div.innerHTML = nombre + "Password OK";
        div.style.backgroundColor = "green";

        //document.writeln("<h1>" + nombre + "</h1>");
        //decoment.writeln("<h1>Password OK</h1>");
    } else{
        //document.writeln("<h1>Error: Las contraseñas no coinciden </h1>");
        div.innerHTML = "Error: Las contraseñas no coinciden";
         div.style.backgroundColor = "red";

    }

}

function cambiaColor(color){
    var div = document.getElementById("mensajes");
    div.style.backgroundColor = color;
}