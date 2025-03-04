// chs
import { seedUsers } from "./user-seeds.js";
import { seedEvents } from "./event-seeds.js"; 
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

// who dunno
/*
import { seedUsers } from "./user-seeds";
import { seedEvents } from "./event-seeds"; // ✅ No file extension
import sequelize from "../config/connections.js"; // ✅ Correct import

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

*/


// LDEFRAZ file
/*
import { sequelize } from '../config/connections.js'; // Import sequelize as a named export
import { seedUsers } from './user-seeds.js'; // Import user seeding function

const seedAll = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: true }); // Force sync drops tables and recreates them
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUsers(); // Call user seed function
    console.log('\n----- USERS SEEDED -----\n');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};


seedAll();
*/


// EXAMPLE FROM KANBAN 
/*
import { seedUsers } from './user-seeds.js';
import { seedTickets } from './ticket-seeds.js';
import { sequelize } from '../models/index.js';

const seedAll = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
    
    await seedTickets();
    console.log('\n----- TICKETS SEEDED -----\n');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedAll();
*/
