var express = require('express');
var router = express.Router();
var controllerUsuario = require('../controller/controllerUsuario.js')

/* GET Cria Usuario. */
router.get('/cria', controllerUsuario.cria_get);

/* POST Cria Usuario. */
router.post('/cria', controllerUsuario.cria_post);

/* GET Consulta Usuario. */
router.get('/consulta/:cpf_usuario', controllerUsuario.consulta);



module.exports = router;