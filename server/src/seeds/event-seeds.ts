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
        location: "San Francisco, CA",
        date: "2024-05-01",
        createdBy: user.id,
      },
      {
        title: "Startup Pitch Night",
        description: "Entrepreneurs pitch their ideas.",
        location: "New York, NY",
        date: "2024-06-01",
        createdBy: user.id,
      },
    ]);

    console.log("✅ Events seeded successfully.");
  } catch (error) {
    console.error("❌ Error seeding events:", error);
  }
};















