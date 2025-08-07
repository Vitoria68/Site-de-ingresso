var express = require('express');
var router = express.Router();
var controllerIndex = require('../controller/controllerIndex.js')
/* GET home page. */
router.get('/', controllerIndex.tela_principal);
/* GET página quemSomos */
router.get('/quemSomos', controllerIndex.quemSomos);
/* GET página ajuda */
router.get('/ajuda', controllerIndex.ajuda);
/* GET página meiaEntrada */
router.get('/meiaEntrada', controllerIndex.meiaEntrada);
/* GET página usuario */
router.get('/usuario', controllerIndex.usuario);
/* GET página inscricao */
router.get('/inscricao', controllerIndex.inscricao);

module.exports = router;

