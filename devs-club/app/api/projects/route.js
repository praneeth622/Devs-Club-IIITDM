// pages/api/projects/index.js
import dbConnect from '../conn';
import Project from '../../models/project.model';

export async function GET(req) {
    console.log("Fetching projects...");
    try {
      await dbConnect(); // Ensure database connection
  
      const projects = await Project.find({}); // Fetch projects from MongoDB
      console.log("Fetched projects:", projects);
      return new Response(JSON.stringify({ success: true, data: projects }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error fetching projects:", error);
  
      return new Response(
        JSON.stringify({ success: false, error: "Failed to fetch projects" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  }