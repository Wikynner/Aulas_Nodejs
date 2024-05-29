const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/homeController');
const InfoController = require('../controllers/infoController');
const { home, novoUsuario } = require('../controllers/homeController');
const userController = require('../controllers/userController');

router.get('/',HomeController.home);

router.get('/contato', InfoController.contato);
router.post('/novousuario', HomeController.novoUsuario)

router.get('/usuario/:id/mais',userController.addIdade);
router.get('/usuario/:id/menos',userController.diminuirIdade);
router.get('/usuario/:id/excluir',userController.excluir);

router.get('/sobre', InfoController.sobre);

router.get('/nome',userController.nome);
router.get('/idade', userController.idadeForm);

router.post('/idade-resultado',userController.idadeAction);

module.exports = router;
 