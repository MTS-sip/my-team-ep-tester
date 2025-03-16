import sequelize from '../config/connections.js';
import { seedUsers } from './user-seeds.js';
import { seedEvents } from './event-seeds.js';

const seedAll = async () => {
  try {
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
