const fs = require("fs");


/*
Creación de un archivo:
Crea un archivo llamado nuevoArchivo.txt utilizando el módulo fs.
Escribe el texto "Hola, mundo" en el archivo.
Verifica que el archivo se ha creado correctamente.
*/
fs.writeFile('nuevoArchivo.txt','Hola mundo',(error) => {
    if(error) throw error;
    console.log("Archivo creado correctamente.");
});