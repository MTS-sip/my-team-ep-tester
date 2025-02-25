import sequelize from '../models/database.js';  // Import Path
import { UserFactory } from './user.js';

// Initialize User Model with Sequelize Instance
const User = UserFactory(sequelize);

export { sequelize, User };