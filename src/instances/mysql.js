const sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const mysql_teste = new sequelize(
    process.env.MYSQL_DB,
    process.env.MYSQL_USER,
    process.env.PASSWORD,
    {
        dialect:'mysql',
        port:parseInt(process.env.MYSQL_PORT)
    }
);

module.exports ={
    mysql_teste
}