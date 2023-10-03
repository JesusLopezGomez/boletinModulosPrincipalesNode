const fs = require("fs");
//Listado de archivos en un directorio:
//Crea un programa que utilice el módulo fs para listar todos los archivos y directorios en un directorio específico.

//Muestra la lista de archivos y directorios por pantalla.
fs.readdir("D:\\boletinModulosPrincipalesNode\\path",function(err,archivos){
    if(err) throw err;
    console.log(archivos);
})