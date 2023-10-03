const process = require("process");
//Escucha de eventos:
//Crea un script que escuche el evento de salida del proceso ('exit') usando process.on().
//Cuando se dispare el evento, muestra un mensaje en la consola indicando que el proceso está saliendo.
process.on('exit', (code) => {
    console.log("El proceso esta saliendo");
});
