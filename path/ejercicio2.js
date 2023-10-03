const path = require("path");

//Unión de rutas:
//Crea variables ruta1, ruta2, ruta3, ruta4 que contengan las cadenas "/first", "second", "something" y "then", respectivamente.

let ruta1 = "/first";
let ruta2 = "second";
let ruta3 = "something"
let ruta4 = "then";
console.log(path.join(ruta1,ruta2,ruta3,ruta4));