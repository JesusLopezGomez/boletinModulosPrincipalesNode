const fs = require("fs");

/*Actualización de un archivo:
Abre el archivo nuevoArchivo.txt en modo de escritura y añade el texto "¡Esto es genial!" al contenido existente.

Verifica que el archivo se ha actualizado correctamente.*/

fs.appendFile("nuevoArchivo.txt",' Esto es tremendo',(err)=> {
    if(err) throw err;
    else fs.readFileSync("nuevoArchivo.txt","utf-8");
}
)