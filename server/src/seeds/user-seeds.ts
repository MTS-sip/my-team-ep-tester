
import { User } from '../models/index.js';
import bcrypt from 'bcrypt';

export const seedUsers = async () => {
  const users = [
    { name: 'John Doe', email: 'user1@example.com', username: 'johndoe', password: 'password1' },
    { name: 'Jane Smith', email: 'user2@example.com', username: 'janesmith', password: 'password2' },
  ];

  // Hash passwords before inserting
  for (const user of users) {
    user.password = await bcrypt.hash(user.password, 10);
  }

  await User.bulkCreate(users, { individualHooks: true });
};














