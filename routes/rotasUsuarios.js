var express = require('express');
var router = express.Router();
var controllerUsuario = require('../controller/controllerUsuario.js')

/* GET Cria Usuario. */
router.get('/cria', controllerUsuario.cria_get);

/* POST Cria Usuario. */
router.post('/cria', controllerUsuario.cria_post);

/* GET Consulta Usuario. */
router.get('/consulta/:cpf_usuario', controllerUsuario.consulta);

 /* GET faz o login (exibe o formulário de login). */
router.get('/login', controllerUsuario.login_get); 

/* POST faz o login (processa os dados do formulário). */
router.post('/login', controllerUsuario.login_post); 

/* GET sai do logado. */
router.get('/logout', controllerUsuario.logout); 

module.exports = router;