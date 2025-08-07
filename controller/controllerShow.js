const shows =  require('../model/showMongo.js')

exports.consulta = async function(req, res){
    //informação passada como parâmetro na url
    var id = req.params.id_show
    var show= await shows.consulta(id);
    
    await shows.atualiza(show)
    contexto = {
        titulo_pagina: "Informações sobre o show",
        show: show,
    }
    // renderiza o arquivo dentro da pasta view
    res.render('consultaShow', contexto);
    }

    exports.cria_get = async function (req,res) {
        contexto = {
            titulo_pagina: "Criacao de Nota",
        }
    }