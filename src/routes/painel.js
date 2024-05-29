const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Home do Painel');
});

router.get('/noticias', (req, res) => {
    res.send('Lista de notícias cadastradas');
});

module.exports = router;
