const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/homeController');
const InfoController = require('../controllers/infoController');
const { home, novoUsuario } = require('../controllers/homeController');
const userController = require('../controllers/userController');

router.get('/',HomeController.home);

router.get('/contato', InfoController.contato);
router.post('/novousuario', HomeController.novoUsuario)

router.get('/sobre', InfoController.sobre);

router.get('/nome',userController.nome);
router.get('/idade', userController.idadeForm);

router.post('/idade-resultado',userController.idadeAction);

module.exports = router;
 