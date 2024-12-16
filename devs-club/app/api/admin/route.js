import Admin from '../../models/Admin';
import dbConnect from '../conn'; 

// GET request: Fetch all admins
export async function GET(req, res) {
    console.log("Admin", req)
  try {
    await dbConnect();
    const admins = await Admin.find();  // Fetch name, role, and email
    return new Response(
      JSON.stringify({ success: true, data: admins }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error fetching admins:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to fetch admins' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// POST request: Create a new admin
export async function POST(req) {
  // Parse the JSON body from the request
  const { name, role, email } = await req.json();

  console.log('Received data:', name, role, email);  // Logs the incoming data

  try {
    // Connect to the database
    await dbConnect();
    console.log('Received data:', name, role, email); 

    // Validate data
    if (!name || !role || !email) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields" }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    console.log('Received data:', name, role, email); 
    // Check if the email already exists in the database
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return new Response(
        JSON.stringify({ success: false, error: 'Admin with this email already exists' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Create a new Admin entry
    const newAdmin = new Admin({
      name,
      role,
      email,
    });

    // Save the new admin to the database
    await newAdmin.save();

    return new Response(
      JSON.stringify({ success: true, data: newAdmin }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error creating admin:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to add new admin' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function DELETE(req) {
  try {
    // Parse the request JSON to get the ID
    const { id } = await req.json();

    if (!id) {
      return new Response(JSON.stringify({ success: false, error: "ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Find and delete the admin by ID
    const deletedAdmin = await Admin.findByIdAndDelete(id);

    if (!deletedAdmin) {
      return new Response(JSON.stringify({ success: false, error: "Admin not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true, data: deletedAdmin }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in DELETE handler:", error);
    return new Response(JSON.stringify({ success: false, error: "Failed to delete admin" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}


