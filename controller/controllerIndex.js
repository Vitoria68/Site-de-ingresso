// importação da classe que gerencia os usuarios na memória
const usuarios = require('../model/usuarioMongo.js')
const shows = require('../model/showMongo.js')
// cria e já exporta a função que será responsável pela tela principal
exports.tela_principal = async function (req, res) {
    var usuario = req.session.usuario

    var show1 = {
        id: "1",
        nome: "My Cheminal Romance",
        data: "06 de Fevereiro",
        imagem: "TourCheminal.jpg",
        horario: "21h",
        abertura: "16h",
        endereco: "Av. Francisco Matarazzo, 1705 – Água Branca, São Paulo – SP, 05001-200",
        classificacao: "Entrada e permanência de crianças/adolescentes de 05 a 15 anos de idade, acompanhados dos pais ou responsáveis, e de 16 a 17 anos, desacompanhados dos pais ou responsáveis legais.",
        capacidade: "20000",
        valor: "570,00",
        ingresso: "mcr"
    };
    await shows.cria(show1);

    var show2 = {
        id: "2",
        nome: "Alissia Cara",
        data: "21 de Novembro",
        imagem: "AlissiaCara_Tour.jpg",
        horario: "20h",
        abertura: "18h",
        endereco: " Rua Tagipuru, 795 – Barra Funda, São Paulo, SP",
        classificacao: "15 anos",
        capacidade: "8.648",
        valor: "350,00",
        ingresso: "alessia"

    };
    await shows.cria(show2);

    var show3 = {
        id: "3",
        nome: "The Rose",
        data: "08 de Setembro",
        imagem: "TheRose_Tour.jpg",
        horario: "20h",
        abertura: "18h",
        endereco: " VIBRA São Paulo - Av. das Nações Unidas, 17955 - Vila Almeida, São Paulo - SP, 04795-100",
        classificacao: "15 anos",
        capacidade: "5.455",
        valor: "990,00",
        ingresso: "therose"

    };
    await shows.cria(show3);

    var show4 = {
        id: "4",
        nome: "Louis Tomlinson",
        data: "24 de Março",
        imagem: "LouisTour.jpg",
        horario: "20h",
        abertura: "17h",
        endereco: "Av. Francisco Matarazzo, 1705 – Água Branca, São Paulo/SP ",
        classificacao: "14 anos desacompanhados(menores de 14 somente com responsáveis)",
        capacidade: "8.000",
        valor: "820",
        ingresso: "louis"

    };
    await shows.cria(show4);

    var show5 = {
        id: "5",
        nome: "AnaVitoria",
        data: "27 de Novembro",
        imagem: "anavitoria.jpg",
        horario: "20h",
        abertura: "18h",
        endereco: "Tom Brasil (no bairro Morumbi, São Paulo/SP)",
        classificacao: "+16",
        capacidade: "5.000",
        valor: "400",
        ingresso: "anavitoria"
    };
    await shows.cria(show5);

    var show6 = {
        id: "6",
        nome: "Marisa Monte",
        data: "25 de Setembro",
        imagem: "Marisa Monte.jpg",
        horario: "20h",
        abertura: "18h",
        endereco: "Av. Pedro Álvares Cabral – Parque Ibirapuera, São Paulo - SP, Brasil",
        classificacao: "+12",
        capacidade: "10.000",
        valor: "520",
        ingresso: "marisa"
    };
    await shows.cria(show6);

    const listaDeShows = await shows.lista();


    contexto = {
        titulo_pagina: "Página inicial",
        usuarios: await usuarios.lista(),
        usuario: usuario,
        ListaDeShows: listaDeShows,

    }
    // renderiza o arquivo home.hbs, dentro da pasta view
    res.render('home', contexto);
}

exports.quemSomos = async function (req, res) {
    contexto = {
        titulo_pagina: "Quem Somos",
        titulo_secundario: "Quem somos"
    }
    // renderiza o arquivo dentro da pasta view
    res.render('quemSomos', contexto);
}

exports.ajuda = async function (req, res) {
    contexto = {
        titulo_pagina: "Ajuda",
        titulo_secundario: "Ajuda",
    }
    // renderiza o arquivo dentro da pasta view
    res.render('ajuda', contexto);
}

exports.meiaEntrada = async function (req, res) {
    contexto = {
        titulo_pagina: "Meia Entrada",
        titulo_secundario: "Meia Entrada",
    }
    // renderiza o arquivo dentro da pasta view
    res.render('meiaEntrada', contexto);
}

exports.usuario = async function (req, res) {
    contexto = {
        titulo_pagina: "Página do Usuário",
        titulo_secundario: "Página do Usuário",
    }
    // renderiza o arquivo dentro da pasta view
    res.render('usuario', contexto);
}

exports.inscricao = async function (req, res) {
    contexto = {
        titulo_pagina: "Novo Usuario",
        titulo_secundario: "Novo Usuário",
    }
    // renderiza o arquivo dentro da pasta view
    res.render('inscricao', contexto);
}

