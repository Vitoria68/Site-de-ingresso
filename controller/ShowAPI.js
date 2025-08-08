const shows = require('../model/showMongo.js');

exports.show_dados = async function(req, res) {
        const lista = await shows.lista(); 
        res.json(lista);
    
}
