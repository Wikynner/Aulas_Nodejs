const express = require('express');
const path = require('path');
const mustache = require('mustache-express');
const dotenv = require('dotenv')
const mainRoutes = require('./routes/index'); // Importa as rotas node/src/routes/index.js

dotenv.config();

const app = express();

app.set('view engine','mustache');
app.set('views', path.join(__dirname,'./views'));
app.engine('mustache',mustache());


//console.log(path.join(__dirname));
app.use(express.static(path.join(__dirname, './public')));

app.use(express.urlencoded({extended: true}));


// Usa as rotas importadas
app.use('/', mainRoutes);  

// Middleware para rotas não encontradas
app.use((req, res) => {
    res.status(404).send('Página não encontrada!');
});

//src\views\home.mustache



// Inicia o servidor na porta 3000
// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//     console.log(`Servidor rodando na porta ${PORT}`);
// });

app.listen(process.env.PORT);

// app.use(cors(corsOptions));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));