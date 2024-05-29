const { Op } = require('sequelize');
const User = require('../models/User');
const Product = require('../models/Product');


const nome = (res,req) =>{
  nome = req.query.nome;
  idade = req.query.idade;
  res.render('pages/nome',{
    nome,
    idade
  });
};
const idadeForm = (req, res) => {
  res.render('pages/idade');
}
const idadeAction = async (req, res) => {
  let mostrarIdade = false;
  let idade = 0;

  if(req.body.ano) {
      let anoNascimento = parseInt(req.body.ano);
      let anoAtual = new Date().getFullYear();
      idade = anoAtual - anoNascimento;
      mostrarIdade = true;
  }

  res.render('pages/idade', {
      idade,
      mostrarIdade
  });
};

const novoUsuario = async (req, res) => {
  let { name, age } = req.body;

  if (name) {
    const newUser = User.build({ name });

    if (age) {
      newUser.age = parseInt(age);
    }
    await newUser.save();
  }
  res.redirect('/');
};

module.exports = {  novoUsuario,nome,idadeForm,idadeAction };
