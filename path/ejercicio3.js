const path = require("path");
//Resolución de rutas:
//Crea una variable archivo que contenga el nombre de un archivo, por ejemplo, "first.js".
//Usa el módulo path para resolver la ruta absoluta de ese archivo y mostrarla en la consola.
let archivo = "first.js";
console.log(path.resolve(archivo));