const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: Date.now,
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: `posts`
    }
)

module.exports = Post