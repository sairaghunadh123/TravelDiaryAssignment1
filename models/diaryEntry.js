const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const DiaryEntry = sequelize.define('DiaryEntry', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    photos: {
        type: DataTypes.JSON,
        defaultValue: []
    }
});

module.exports = DiaryEntry;
