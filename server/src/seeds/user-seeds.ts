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