const { Model, DataTypes } = require('sequelize');
const { sequelize, mysql_teste } = require('../instances/mysql');

class User extends Model {}

User.init({
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 18
    }
}, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false
});

module.exports = User;
