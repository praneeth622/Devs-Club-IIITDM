const mongoose = require('mongoose');

// Define the project schema
const ProjectSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    teamLead: {
      name: { type: String, required: true },
      linkedin: { type: String, required: true },
      github: { type: String, required: true },
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });

// Create the model
const Project = mongoose.model('project', ProjectSchema,'projects');

module.exports = Project;
