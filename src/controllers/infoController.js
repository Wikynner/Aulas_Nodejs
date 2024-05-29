const express = require('express');

 const contato = (req,res)=>{
    res.render('pages/contato');

};
const sobre = (req, res) =>
    res.render('pages/sobre');

module.exports = {
    contato,
    sobre
}