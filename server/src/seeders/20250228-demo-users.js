'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  up: async (queryInterface, Sequelize) => {
    // Sample data for Users
    const bcrypt = require('bcryptjs'); // Import bcrypt for password hashing
    const users = [
      { 
        id: Sequelize.literal('gen_random_uuid()'), 
        email: 'user1@example.com', 
        password: await bcrypt.hash('hashedpassword1', 10), // Hash the password
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      { 
        id: Sequelize.literal('gen_random_uuid()'), 
        email: 'user2@example.com', 
        password: await bcrypt.hash('hashedpassword2', 10), // Hash the password
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Insert users into the Users table
    await queryInterface.bulkInsert('Users', users, {});

    // Sample data for Events (Ensure the createdBy ID exists in the Users table)
    const events = [
      {
        id: Sequelize.literal('gen_random_uuid()'),
        title: 'Team Meeting',
        description: 'Discuss project updates',
        createdBy: Sequelize.literal('(SELECT id FROM Users LIMIT 1)'), // Link to the first user
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: Sequelize.literal('gen_random_uuid()'),
        title: 'Birthday Party',
        description: 'Celebrate John’s birthday',
        createdBy: Sequelize.literal('(SELECT id FROM Users ORDER BY createdAt DESC LIMIT 1)'), // Link to the second user
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: Sequelize.literal('gen_random_uuid()'),
        title: 'Workshop',
        description: 'Learn about new tech trends',
        createdBy: Sequelize.literal('(SELECT id FROM Users OFFSET 1 LIMIT 1)'), // Link to the second user
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Insert events into the Events table
    await queryInterface.bulkInsert('Events', events, {});
  },

  down: async (queryInterface) => {
    // Remove all entries in the Users and Events table for rollback
    await queryInterface.bulkDelete('Events', {}, {});
    await queryInterface.bulkDelete('Users', {}, {});
  },
};
