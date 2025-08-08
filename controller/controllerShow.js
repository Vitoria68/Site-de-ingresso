const shows =  require('../model/showMongo.js')

exports.consulta = async function(req, res){
    
    var id = req.params.id_show
    var show= await shows.consulta(id);
    
    await shows.atualiza(show)
    contexto = {
        titulo_pagina: "Informações sobre o show",
        show: show,
    }
   
    res.render('consultaShow', contexto);
    }

 
    