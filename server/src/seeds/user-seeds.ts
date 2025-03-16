import  sequelize  from "../config/connections.js"; 
import bcrypt from "bcrypt"; // 
import {User} from "../models/index.js"; 

export const seedUsers = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected ✅");

    const users = [
      { email: 'user1@example.com', username: "degraz", password: "password1", name: "User One" }, 
      { email: 'user2@example.com', username: "benben", password: "password2", name: "User Two" },
      { email: 'scipiomichael@icloud.com', username: "michael", password: "password3", name: "Michael Scipio" },
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

















