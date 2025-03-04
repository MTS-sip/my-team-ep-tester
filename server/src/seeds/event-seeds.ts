// chs 
import Event from "../models/event.js";
import { User } from "../models/user.js";

export const seedEvents = async (): Promise<void> => {
  try {
    const user = await User.findOne();
    if (!user) {
      console.error("❌ No users found. Ensure user-seeds.ts runs first!");
      return;
    }

    await Event.bulkCreate([
      {
        title: "Tech Conference 2024",
        description: "A gathering of tech enthusiasts.",
        createdBy: user.id,
      },
      {
        title: "Startup Pitch Night",
        description: "Entrepreneurs pitch their ideas.",
        createdBy: user.id,
      },
    ]);

    console.log("✅ Events seeded successfully.");
  } catch (error) {
    console.error("❌ Error seeding events:", error);
  }
};



// chs1
/*
import Event from "../models/event.js";
import { User } from "../models/user.js";

export const seedEvents = async (): Promise<void> => {
  try {
    // Get an existing user to assign events
    const user = await User.findOne();
    if (!user) throw new Error("No users found. Run user-seeds first!");

    await Event.bulkCreate([
      {
        title: "Tech Conference 2024",
        description: "A gathering to discuss AI and software development.",
        createdBy: user.id,
      },
      {
        title: "Startup Pitch Night",
        description: "An event where entrepreneurs pitch their startups.",
        createdBy: user.id,
      },
    ]);

    console.log("✅ Events seeded successfully.");
  } catch (error) {
    console.error("❌ Error seeding events:", error);
  }
};

*/


// xo
/*
import Event from "../models/Event.js"; // Ensure Event model is correctly imported

export const seedEvents = async (): Promise<void> => {
  try {
    await Event.bulkCreate([
      {
        title: "Tech Conference 2024",
        description: "A gathering of tech enthusiasts to discuss the latest in AI and software development.",
        createdBy: 1,
      },
      {
        title: "Startup Pitch Night",
        description: "An event where entrepreneurs pitch their startups to investors.",
        createdBy: 2,
      },
      {
        title: "Hackathon Challenge",
        description: "A 48-hour coding challenge with exciting prizes.",
        createdBy: 3,
      },
    ]);

    console.log("✅ Events seeded successfully.");
  } catch (error) {
    console.error("❌ Error seeding events:", error);
  }
};

*/




// from BCS kanban challenge 
/*
import { Ticket } from '../models/ticket.js';

export const seedTickets = async () => {
  await Ticket.bulkCreate([
    { name: 'Design landing page', status: 'In Progress', description: 'Create wireframes and mockups for the landing page.', assignedUserId: 1 },
    { name: 'Set up project repository', status: 'Done', description: 'Create a new repository on GitHub and initialize it with a README file.', assignedUserId: 2 },
    { name: 'Implement authentication', status: 'Todo', description: 'Set up user authentication using JWT tokens.', assignedUserId: 1 },
    { name: 'Test the API', status: 'Todo', description: 'Test the API using Insomnia.', assignedUserId: 1 },
    { name: 'Deploy to production', status: 'Todo', description: 'Deploy the application to Render.', assignedUserId: 2 },
  ]);
};

*/














