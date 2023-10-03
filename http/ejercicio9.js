const http = require("http");
//Manipulación de solicitudes HTTP:
//Modifica el servidor HTTP creado en el ejercicio anterior para que, en lugar de una respuesta estática, muestre la URL de la solicitud en la respuesta.
const servidor = http.createServer(function(req, res, next) {
    res.writeHead(200, { "Content-type": "text/html" });
    const url = req.url;
    let respuesta = "";
    if(url === "/hola"){
        respuesta = "¡Hola desde mi servidor! URL: /hola";
    }else if(url == "/adios"){
        respuesta = "¡Hola desde mi servidor! URL: /adios";
    }
    return res.end(respuesta);
})

servidor.listen(3000,function(){
    console.log("El servidor está en funcionamiento");
})
//Cuando se accede a http://localhost:3000/hola, la respuesta debe ser "¡Hola desde mi servidor! URL: /hola".
//Cuando se accede a http://localhost:3000/adios, la respuesta debe ser "¡Hola desde mi servidor! URL: /adios".