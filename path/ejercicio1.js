const path = require("path");

//Crea una variable ruta que contenga la cadena "/test/test1//2slashes/1slash/tab/..".
//Usa el módulo path para normalizar la ruta y mostrar el resultado por pantalla.
let ruta = "/test/test1//2slashes/1slash/tab/..";

console.log(path.normalize(ruta));