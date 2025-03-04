// chs

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



// think ldegraz 
/*
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

*/



// user-seeds xo
/*
import { User } from "../models/user.js"; // Ensure User model is correctly imported

export const seedUsers = async (): Promise<void> => {
  try {
    await User.bulkCreate([
      {
        username: "admin",
        email: "admin@example.com",
        password: "password123", // Will be hashed by model hooks
      },
      {
        username: "johndoe",
        email: "john@example.com",
        password: "password123",
      },
      {
        username: "janedoe",
        email: "jane@example.com",
        password: "password123",
      },
    ]);

    console.log("✅ Users seeded successfully.");
  } catch (error) {
    console.error("❌ Error seeding users:", error);
  }
};

*/














