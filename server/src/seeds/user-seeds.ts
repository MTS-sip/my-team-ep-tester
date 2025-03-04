import { User } from '../models/user.js';
import bcrypt from 'bcrypt';

export const seedUsers = async () => {
  const users = [
    { email: 'user1@example.com', username: 'user1', password: 'password1' },
    { email: 'user2@example.com', username: 'user2', password: 'password2' },
  ];

  // Hash passwords before inserting
  for (const user of users) {
    user.password = await bcrypt.hash(user.password, 10);
  }

  await User.bulkCreate(users, { individualHooks: true });
  console.log('✅ Users seeded successfully.');
};
















