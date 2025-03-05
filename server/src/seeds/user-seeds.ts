import  sequelize  from "../models/database"; 
import bcrypt from "bcrypt"; // 
import User from "../models/User"; 

export const seedUsers = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected ✅");

    const users = [
      { username: "johndoe", password: "password1" },
      { username: "janesmith", password: "password2" },
      { username: "michaelscipio", password: "password3" },
    ];

    // Hash passwords
    for (const user of users) {
      user.password = await bcrypt.hash(user.password, 10);
    }

    await User.bulkCreate(users, { individualHooks: true });
    console.log("✅ Users seeded successfully.");
  } catch (error) {
    console.error("🚨 Error seeding users:", error);
  }
};




/*
import { sequelize } from "../config/database.js"; // Adjust based on your setup

export const seedUsers = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected ✅");

    const users = [
      { username: "johndoe", password: "password1" },
      { username: "janesmith", password: "password2" },
      { username: "michaelscipio", password: "password3" },
    ];

    // Hash passwords
    for (const user of users) {
      user.password = await bcrypt.hash(user.password, 10);
    }

    await User.bulkCreate(users, { individualHooks: true });
    console.log("✅ Users seeded successfully.");
  } catch (error) {
    console.error("🚨 Error seeding users:", error);
  }
};
*/






/* 
import { User } from '../models/user.js';
import bcrypt from 'bcrypt';

export const seedUsers = async () => {
  const users = [
    { username: 'johndoe', password: 'password1' },
    { username: 'janesmith', password: 'password2' },
    { username: 'michaelscipio', password: 'password3' },

  ];

  // Hash passwords before inserting
  for (const user of users) {
    user.password = await bcrypt.hash(user.password, 10);
  }

  await User.bulkCreate(users, { individualHooks: true });
  console.log('✅ Users seeded successfully.');
};
*/
















