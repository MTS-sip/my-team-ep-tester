import sequelize from '../config/connections.js'; // Import Sequelize Instance
import { UserFactory } from './user.js';
import Event from './event.js';

// Initialize User Model with Sequelize Instance
const User = UserFactory(sequelize);

const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('✅ Database synchronized successfully.');
  } catch (error) {
    console.error('❌ Error syncing database:', error);
  }
};

export { sequelize, User, Event, syncDatabase };