var http = require("http");
http.createServer(function(request, response){
      response.end("Ola, mundo!")
}).listen(8181);

console.log("servidor no ar..");

// Testar no browser -> localhost:8181