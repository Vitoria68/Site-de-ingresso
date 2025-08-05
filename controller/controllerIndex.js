// importação da classe que gerencia os usuarios na memória
const usuarios = require('../model/usuarioMongo.js')
// cria e já exporta a função que será responsável pela tela principal
exports.tela_principal = async function(req, res){
    contexto = {
        titulo_pagina: "Página inicial",
        usuarios: await usuarios.lista(),
}
    // renderiza o arquivo home.hbs, dentro da pasta view
    res.render('home', contexto);
}

exports.quemSomos = async function(req, res){
    contexto = {
        titulo_pagina: "Quem Somos",
    }
    // renderiza o arquivo dentro da pasta view
    res.render('quemSomos', contexto);
}

exports.ajuda = async function(req, res){
    contexto = {
        titulo_pagina: "Ajuda",
    }
    // renderiza o arquivo dentro da pasta view
    res.render('ajuda', contexto);
}

exports.meiaEntrada = async function(req, res){
    contexto = {
        titulo_pagina: "Meia Entrada",
    }
    // renderiza o arquivo dentro da pasta view
    res.render('meiaEntrada', contexto);
}

exports.usuario = async function(req, res){
    contexto = {
        titulo_pagina: "Página do Usuário",
    }
    // renderiza o arquivo dentro da pasta view
    res.render('usuario', contexto);
}

exports.inscricao = async function(req, res){
    contexto = {
        titulo_pagina: "Novo Usuario",
    }
    // renderiza o arquivo dentro da pasta view
    res.render('inscricao', contexto);
}