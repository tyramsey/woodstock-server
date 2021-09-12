module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email:{
            type:  DataTypes.STRING,
            allowNull: false,
        },
            password:{
                type:  DataTypes.STRING,
                allowNull: false,
            },   
        role:{
            type:DataTypes.STRING,
            allowNull: false,
        }
     })
     return User;
}