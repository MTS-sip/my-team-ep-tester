import { seedUsers } from "./user-seeds";
import { seedEvents } from "./event-seeds"; // 
import sequelize from "../config/connections.js"; 

const seedAll = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log("\n✅ DATABASE CONNECTED SUCCESSFULLY ✅\n");

    await sequelize.sync({ force: true });
    console.log("\n✅ DATABASE SYNCED ✅\n");

    await seedUsers();
    console.log("\n✅ USERS SEEDED ✅\n");

    await seedEvents();
    console.log("\n✅ EVENTS SEEDED ✅\n");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

seedAll();