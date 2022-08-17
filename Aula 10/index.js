const express = require ("express"); // importa o modulo express
const app = express(); // inicia o express

//rota com query 
app.get ("/consulta/", function(req, res){
    var cpf = req.query["cpf"];
    res.send (`retorno consulta = ${cpf}`);
})


app.listen(4000, function(erro){ //cria a aplicação na porta 4000
    if (erro){
        console.log("Erro ao iniciar.");
    } else {
        console.log ("Servidor iniciado.");

    }
})
