// importação da classe que gerencia as receitas na memória
const usuarios = require('../model/usuarioMongo.js')

// cria e já exporta a função que será responsável pela criação de usuario
exports.cria_get = async function (req, res) {
    contexto = {
        titulo_pagina: "Novo Usuario",
    }
    // renderiza o arquivo dentro da pasta view
    res.render('usuario', contexto);
}

// cria e já exporta a função que será responsável pela criação de receita
exports.cria_post = async function (req, res) {
    // obtem as informações do formulário
    var usuario = req.body

    // cria o usuario
    await usuarios.cria(usuario);

    // redireciona para a página principal
    res.redirect('/');
}

// cria e já exporta a função que será responsável pela consulta do usuario
exports.consulta = async function (req, res) {
    //informação passada como parâmetro na url
    var cpf = req.params.cpf_usuario
    var usuario = await usuarios.consulta(cpf);

    contexto = {
        titulo_pagina: "Página do Usuário",
        usuario: usuario,
    }
    // renderiza o arquivo dentro da pasta view
    res.render('consultaUsuario', contexto);
}

