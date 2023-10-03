const fs = require("fs");

/*
Eliminación de un archivo:
Elimina el archivo nuevoArchivo.txt utilizando el módulo fs.

Comprueba que el archivo se ha eliminado correctamente.*/

fs.unlink("nuevoArchivo.txt", (err)=> {
    if(err) throw err;
    else console.log("Borrado corectamente");
})