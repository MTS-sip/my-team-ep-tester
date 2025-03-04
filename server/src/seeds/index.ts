import sequelize  from '../config/connections.js'; // Import sequelize as a named export
import { seedUsers } from './user-seeds.js'; // Import user seeding function

const seedAll = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: true }); // Force sync drops tables and recreates them
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers(); // Call user seed function
    console.log('\n----- USERS SEEDED -----\n');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedAll();
