const express = require('express');
const router = express.Router();
const controllerShow = require('../controller/ShowAPI.js');

// rota para testar web service
router.get('/show_dados', controllerShow.show_dados);

module.exports = router;
