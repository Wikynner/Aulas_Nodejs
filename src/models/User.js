const { Model, DataTypes } = require('sequelize');
const { sequelize, mysql_teste } = require('../instances/mysql');

/**
 * @typedef {Object} UserInstance
 * @property {number} id - The unique identifier for a user.
 * @property {string} name - The name of the user.
 * @property {number} age - The age of the user.
 */

/**
 *
 */
const User = mysql_teste.define('User', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,  // Ensure id is auto increment
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false  // Make name required
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 18
    }
}, {
    tableName: 'users',
    timestamps: false  // Correct spelling of timestamps
});

module.exports ={ User,
    mysql_teste,sequelize
}
