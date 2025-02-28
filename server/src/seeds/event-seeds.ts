import Event from "../models/event.js"; // ✅ Fix import path

export const seedEvents = async (): Promise<void> => {
  try {
    await Event.bulkCreate([
      { title: "Tech Conference", description: "Discuss AI and software." },
      { title: "Startup Pitch", description: "Entrepreneurs pitch ideas." },
    ]);

    console.log("✅ Events seeded successfully.");
  } catch (error) {
    console.error("❌ Error seeding events:", error);
  }
};