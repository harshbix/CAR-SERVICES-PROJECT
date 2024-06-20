import User from '../models/User.js';

const initializeDatabase = async () => {
  try {
    await User.sync({ force: true });

    await User.bulkCreate([
      { name: 'Japhary Juma', email: 'john@example.com', location: 'Magari Mabovu', stars: 5 },
      { name: 'James Elioth', email: 'jane@example.com', location: 'Uwanja Mpya', stars: 4 },
    ]);

    console.log('Database has been initialized with dummy data.');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

initializeDatabase();
