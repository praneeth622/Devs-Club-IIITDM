const { z } = require("zod");

// Achievement schema
const achievementSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string(), // Store the icon as a string representation (e.g., class names or a key)
});

// Array of achievements schema
const achievementsSchema = z.array(achievementSchema);

module.exports = { achievementSchema, achievementsSchema };
