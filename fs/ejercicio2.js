const fs = require("fs");

/*
Lectura de un archivo:
Lee el contenido del archivo nuevoArchivo.txt que creaste en el ejercicio anterior utilizando el módulo fs.

Muestra el contenido del archivo por pantalla.
*/
fs.readFile("nuevoArchivo.txt",(err, data)=> {
    console.log(data.toString());
});