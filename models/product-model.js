module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define('product', {
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image_id: {
            type: DataTypes.STRING,
        },
        owner_id: {
            type: DataTypes.INTEGER,
        },
        secret: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    })
    return Product;
};

