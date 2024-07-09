import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Request = sequelize.define('Request', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  mechanicId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

export default Request;
