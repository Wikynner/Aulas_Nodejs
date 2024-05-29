const { Op } = require('sequelize');
const User = require('../models/User');
const Product = require('../models/Product');

const home = async (req, res) => {
  try {
    // Fetch all users from the User model
    let users = await User.findAll({
      where: {
        age: {
          [Op.gte]: 18
        }
      },
      order: [
        ['name', 'DESC']
      ]
    });

    // Business logic
    let age = 90;
    let showOld = age > 50;

    // Ensure methods are called properly
    let list = await Product.getAll(); // Call the method as a function
    let expensiveList = await Product.getFromPriceAfter(12); // Pass the price parameter and call the method

    // Render the home page with the fetched data
    res.status(200).render('pages/home', {
      name: 'Wikynner',
      lastName: 'Soares',
      showOld,
      products: list,
      expensives: expensiveList,
      frasesDoDia: ["Live as if you were to die tomorrow. Learn as if you were to live forever."],
      users
    });
  } catch (error) {
    console.error('Error fetching data or rendering page:', error);
    res.status(500).send('Internal Server Error');
  }
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

module.exports = { home, novoUsuario };
