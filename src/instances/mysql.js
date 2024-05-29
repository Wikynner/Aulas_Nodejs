const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(
    process.env.MYSQL_DB,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: parseInt(process.env.MYSQL_PORT, 10)
    }
);

module.exports = { sequelize };
