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

exports.login_get = async function (req, res) {
    contexto = {
        titulo_pagina: "Login",
        titulo_secundario: "Login",
    }
    res.render('login', contexto);
}
exports.login_post = async function (req, res) {
    var email = req.body.email;
    var senha = req.body.senha;
    var usuario = await usuarios.consultaporEmail(email);

    if (!usuario || usuario.senha !== senha) {
        return res.redirect('/usuario/login');
    }

    req.session.usuario = {
        nome: usuario.nome,
        email: usuario.email,
        cpf: usuario.cpf,
        email: usuario.email,
        senha: usuario.senha,
        nomeCartao: usuario.nomeCartao,
        numero: usuario.numero,
        validade: usuario.validade,
        cvv: usuario.cvv
    };

    res.redirect('/');
}

exports.logout = async function (req, res) {
    req.session.destroy(function (err) {
        if (err) {
            console.log('Erro ao encerrar a sessão', err);
        }
        res.redirect('/usuario/login');
    });

};

exports.altera_get = async function (req, res) {
    //informação passada como parâmetro na url
    var cpf = req.params.cpf_usuario
    var usuario = await usuarios.consulta(cpf)
    contexto = {
        titulo_pagina: "Altera a usuario",
        nome: usuario.nome,
        cpf: usuario.cpf,
        email: usuario.email,
        senha: usuario.senha,
        nomeCartao: usuario.nomeCartao,
        numero: usuario.numero,
        validade: usuario.validade,
        cvv: usuario.cvv
    }
    // renderiza o arquivo dentro da pasta view
    res.render('alteraUsuario', contexto)
}
// cria e já exporta a função que será responsável pela criação de usuario
exports.altera_post = async function (req, res) {
    // obtem as informações do formulário

       var nome= req.body.nome
       var email=req.body.email
       var cpf=req.body.cpf
       var senha= req.body.senha
       var nomeCartao= req.body.nomeCartao
       var numero= req.body.numero
       var validade= req.body.validade
       var cvv= req.body.cvv
   
    await usuarios.atualiza(nome, email, cpf, senha, nomeCartao, numero, validade,cvv)
    // redireciona para a página principal
    res.redirect('/usuario/consulta')
}
// cria e já exporta a função que será responsável pela exclusão da usuario
exports.deleta = async function (req, res) {
    //informação passada como parâmetro na url
    var cpf = req.params.cpf_usuario
    await usuarios.deleta(cpf);

    // redireciona para a página principal
    res.redirect('/');
}