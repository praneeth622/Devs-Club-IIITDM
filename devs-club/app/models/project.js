import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  stars: { type: Number, required: true },
  prs: { type: Number, required: true },
  contributors: { type: Number, required: true },
  link: { type: String, required: true },
});

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema, "Projects");


export default Project;
