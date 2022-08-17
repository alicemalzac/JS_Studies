const express = require ("express"); // importa o modulo express
const app = express(); // inicia o express

// rota inicial
app.get ("/", function(req,res){
    // req -> dados enviados pelo cliente
    // res -> resposta enviada pelo servidor de volta ao clinete 
    res.send("Bem vindo ao meu site!");
})

// rota de cadastro de produtos
app.get ("/produtos", function(req,res){
    res.send("<h1> Lista de Produtos </h1>");
})

app.get ("/consulta/:parametro", function(req, res){
    var parametro = req.params.parametro;
    res.send(`retorno consulta: ${parametro}`);
})

//rota com parametro opcional
app.get ("/cadastro/:nome?", function(req, res){
    var nome = req.params.nome;
    if (nome){
        res.send(`<h1>produto ${nome} criado!</h1>`);
    } else {
    res.send ("produto criado!");
    }
})

app.get ("/consulta/", function(req, res){
    var cpf = req.query["cpf"];
    res.send (`retorno consulta = ${cpf}`);
}) // testar no browser com localhost:4000/consulta?cpf=12

app.listen(4000, function(erro){ //cria a aplicação na porta 4000
    if (erro){
        console.log("Erro ao iniciar.");
    } else {
        console.log ("Servidor iniciado.");
    }
})