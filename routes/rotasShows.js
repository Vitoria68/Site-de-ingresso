var express = require('express');
var router = express.Router();
var controllerShow = require('../controller/controllerShow.js');

router.get('/consulta/:id_show', controllerShow.consulta);

module.exports = router;
