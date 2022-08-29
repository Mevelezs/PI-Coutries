const { DataTypes } = require('sequelize');

module.exports= (sequelize) =>{
    sequelize.define('activity', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            },
        name:{
            type : DataTypes.STRING,
            allowNull : false,
            unique : true
        },
        difficulty:{
            type: DataTypes.INTEGER,
            validate :{
                min: 1,
                max : 5
            }
        },
        season:{
            type : DataTypes.ENUM({
                values : ['summer','winter', 'fall','sprint']
            })
        },
        duration:{
            type : DataTypes.INTEGER,
        }
    },{
        timestamps : false
    })
}
