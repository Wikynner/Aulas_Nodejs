const { Model, DataTypes } = require('sequelize');
const { sequelize, mysql_teste } = require('../instances/mysql');
const { type } = require('os');
const { get } = require('http');

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
        get(){
            return raw = this.getDataValue('name').toUpperCase();
            
        }
    },
        // allowNull: false,
    //Mostrar aprimiera letra do nome 
        // firstLetterOfName:{
        //     type:DataTypes.VIRTUAL,
        //     get(){
        //         let name = this.getDataValue('name');
        //         return name.charAt(0);
        //     }
        // },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 18,
        set(value){
            if(value < 18){
                value = 18;
            }
            this.setDataValue('age',value);
        }
    }

}, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false
});

module.exports = User;
