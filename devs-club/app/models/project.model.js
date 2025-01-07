const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

// Define the project schema
const ProjectSchema = new mongoose.Schema({
    id: { type: String, unique: true, default: uuidv4 },
    name: { type: String, required: true },
    description: { type: String, required: true },
    teamLead: {
      name: { type: String, required: true },
      linkedin: { type: String },
      github: { type: String },
    },
    teamMembers: [
        {
          name: { type: String },
          linkedin: { type: String },
          github: { type: String },
        }
    ],
    fullDescription: { type: String},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

// Create the model
const Project =mongoose.models.projects || mongoose.model('projects', ProjectSchema);

module.exports = Project;
