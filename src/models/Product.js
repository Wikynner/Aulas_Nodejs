//import { title } from "process";

const { Module } = require("module");

// Product = {
//     title,
//     price
// };
class Product {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}

const  data = [
    { title: 'Produto X', price: 10 },
    { title: 'Produto Y', price: 20 },
    { title: 'Produto W', price: 30 }
];

 const product ={
    getAll : () => {
        return data;
    },
    getFromPriceAfter: (price) => {
        return data.filter(item => item.price >= price);
    }
    
};
module.exports = {
    Product
}
