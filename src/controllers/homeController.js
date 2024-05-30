const express = require('express');
const Product = require('../models/Product');
const User = require('../models/User');
const { Op, where } = require('sequelize');

const home = async (req, res) => {
  let users = await User.findAll();
    // Business logic
    let age = 90;
    let showOld = false;

    if (age > 50) {
      showOld = true;
    }
  
    let list = Product.getAll(); 
    let expensiveList = Product.getFromPriceAfter(12);
   
    res.status(200).render('pages/home', {
      name: 'Wikynner',
      lastName: 'Soares',
      showOld,
      Product: list,
      expensive: expensiveList,
      fraseDoDia: ["Live as if you were to die tomorrow. Learn as if you were to live forever."],
      users
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

module.exports = { home, User, novoUsuario };
