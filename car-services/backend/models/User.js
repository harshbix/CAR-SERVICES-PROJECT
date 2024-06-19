// models/User.js
import { Sequelize } from 'sequelize';
import sequelize from '../config/db.js';

const User = sequelize.define('User', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [6, 100], // Password must be between 6 and 100 characters long
    },
  },
  role: {
    type: Sequelize.ENUM('admin', 'mechanic', 'user'),
    allowNull: false,
  },
});

export default User;
