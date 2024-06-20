import User from '../models/User.js';

const initializeDatabase = async () => {
  try {
    await User.sync({ force: true });

    await User.bulkCreate([
      {
        name: 'Japhary Juma',
        email: 'japhary.juma@example.com',
        password: 'password123', // Ensure to hash passwords in production
        location: 'Magari Mabovu',
        stars: 5,
        role: 'mechanic'
      },
      {
        name: 'James Elioth',
        email: 'james.elioth@example.com',
        password: 'password123', // Ensure to hash passwords in production
        location: 'Uwanja Mpya',
        stars: 4,
        role: 'mechanic'
      },
      {
        name: 'Alice Smith',
        email: 'alice.smith@example.com',
        password: 'password123', // Ensure to hash passwords in production
        location: 'Downtown',
        stars: 3,
        role: 'client'
      },
      {
        name: 'Bob Johnson',
        email: 'bob.johnson@example.com',
        password: 'password123', // Ensure to hash passwords in production
        location: 'Suburbs',
        stars: 5,
        role: 'user'
      },
      {
        name: 'Emily Davis',
        email: 'emily.davis@example.com',
        password: 'password123', // Ensure to hash passwords in production
        location: 'City Center',
        stars: 4,
        role: 'admin'
      },
      {
        name: 'Michael Brown',
        email: 'michael.brown@example.com',
        password: 'password123', // Ensure to hash passwords in production
        location: 'Industrial Area',
        stars: 5,
        role: 'mechanic'
      }
    ]);

    console.log('Database has been initialized with dummy data.');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

initializeDatabase();
