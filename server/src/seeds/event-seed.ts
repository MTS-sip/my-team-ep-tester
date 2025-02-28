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