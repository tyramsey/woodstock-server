module.exports = (sequelize, DataTypes) => {
    const Userinfo = sequelize.define('userinfo', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        lastName:{
            type:  DataTypes.STRING,
            allowNull: false,
        },
        budget:{
                type:  DataTypes.STRING,
                allowNull: false,
            },   
        owner_id: {
                type: DataTypes.INTEGER,
            },
     })
     return Userinfo;
}