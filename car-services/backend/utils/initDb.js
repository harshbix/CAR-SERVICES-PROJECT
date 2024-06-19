// scripts/initializeDatabase.js

import User from '../models/User.js';
import sequelize from '../config/db.js';

const initializeDatabase = async () => {
  try {
    // Synchronize the User model with the database
    await User.sync({ force: true });

    // Bulk create dummy users
    await User.bulkCreate([
      { name: 'Japhary Juma', phone: '1234567890', email: 'john@example.com', location: 'Magari Mabovu', userType: 'user', password: 'password1' },
      { name: 'James Elioth', phone: '0987654321', email: 'jane@example.com', location: 'Uwanja Mpya', userType: 'mechanic', password: 'password2' },
      { name: 'alowe mwakunda', phone: '0987654367', email: 'suma@example.com', location: 'majani Mpya', userType: 'admin', password: 'password6' },
    ]);

    console.log('Database has been initialized with dummy data.');
  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    // Close the database connection
    await sequelize.close();
  }
};

initializeDatabase();
