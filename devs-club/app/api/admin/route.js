import Admin from '../../models/Admin';
import dbConnect from '../conn'; 
import { getAuth } from '@clerk/nextjs/server';
import { clerkClient } from '@clerk/clerk-sdk-node';
import { auth } from '@clerk/nextjs/server'

// GET request: Fetch all admins
export async function GET(req, res) {
    // console.log("Admin", req)
  try {
    await dbConnect();
    const { userId } = getAuth(req);
    // console.log("userId:", userId);
    const org = await auth()
    // console.log("org:", org)
    

    if (!userId) {
      return new Response(
        JSON.stringify({ success: false, error: 'Unauthorized: No user session found.' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }
    // Fetch user info from Clerk
    const user = await clerkClient.users.getUser(userId);
    console.log("user", user)

    // Check if the user has 'admin' role
    var isAdmin = 0
    if(org?.orgRole== "org:admin"){
      isAdmin = 1;
    }
    else{
      isAdmin = 0;
    }
    console.log("isAdmin:", isAdmin)
    console.log("role:",org)
    if (!isAdmin) {
      return new Response(
        JSON.stringify({ success: false, error: 'Forbidden: You do not have admin access.' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }

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
  const { userId } = getAuth(req);  
  const org = await auth()
  console.log("org:", org)
  const OrgId = 'org_2qq40cm0EtvF24HU5bM3f2GVz2f'

  if (!userId) {
    return new Response(
      JSON.stringify({ success: false, error: 'Unauthorized: No user session found.' }),
      { status: 401, headers: { 'Content-Type': 'application/json' } }
    );
  }

  console.log('Received data:', name, role, email);  // Logs the incoming data

  try {
    // Connect to the database
    await dbConnect();
    
    const user = await clerkClient.users.getUser(userId);

    // Check if the user has 'admin' role
    var isAdmin = 0
    if(org?.orgRole== "org:admin"){
      isAdmin = 1;
    }
    else{
      isAdmin = 0;
    }
    console.log("isAdmin:", isAdmin)
    console.log("role:",org?.orgRole)

    if (!isAdmin) {
      return new Response(
        JSON.stringify({ success: false, error: 'Forbidden: You do not have admin access.' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }
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
      console.log('Email already exists')
      return new Response(
        JSON.stringify({ success: false, error: 'Admin with this email already exists' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

     // Fetch the user from Clerk by email
    const clerkUser = await clerkClient.users.getUserList({ emailAddress: email });
    console.log('Clerk user:', clerkUser)

    if (clerkUser.length === 0) {
      return new Response(
        JSON.stringify({ success: false, error: 'No Clerk user found with this email.' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Get the Clerk user ID from the fetched user list
    const userToUpdate = clerkUser.data[0];
    console.log('User to update1:', userToUpdate)
    
    if(!userToUpdate){
      return new Response(
        JSON.stringify({ success: false, error: 'User Not existed, Create user before assigning admin role' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
    console.log("User to update2",  userToUpdate.id)
    const clerkUserId = userToUpdate.id;
    console.log('Clerk user ID:', clerkUserId)

    // Update the user's role in Clerk to 'admin'
    const organizationId = org?.orgId
    console.log(" my org id",organizationId) // this id we are updating to given email

    if (!organizationId) {
      return new Response(
        JSON.stringify({ success: false, error: 'User is not part of any organization' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    try{
      const response = await clerkClient.organizations.createOrganizationMembership({
        userId: userToUpdate.id,
        organizationId,
        role: 'org:admin'
      })
      console.log("Response:", response)
    }
    catch(error){
      console.error("Error Adding admin:", error);
      
        return new Response(
          JSON.stringify({ success: false, error: 'Failed to assign admin role.' }),
          { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
    
    // console.log("Memberships:", memberships);
    // console.log("Memberships data:", memberships.data);

    // Extracting the array of memberships
    // const members_data = memberships.data;
    // console.log("Type of memberships:", Array.isArray(members_data));

    // Ensure that members_data is an array
    // if (Array.isArray(members_data)) {
    //   // console.log("First Membership:", members_data[0]);  // Log the first item in the array

    //   // Iterating over members_data to access publicUserData for each membership
    //   members_data.forEach((membership, index) => {
    //     // console.log(`Member ${index + 1} publicUserData:`, membership.publicUserData);
    //   });
    // } else {
    //   console.log("Error: memberships.data is not an array"); 
    // }

    // // Check if the user is a member by searching through members_data
    // const isMember = members_data.some(membership => membership.publicUserData.userId === clerkUserId) ? 1 : 0;

    // if (isMember) {
    //   console.log(`User ${clerkUserId} has membership.`);
    // } else {
    //   console.log(`No membership found for user ${clerkUserId}`);
    // }

    // if (!isMember) {
    //   return new Response(
    //     JSON.stringify({ success: false, error: 'User is not a member of the organization.' }),
    //     { status: 400, headers: { 'Content-Type': 'application/json' } }
    //   );
    // }

    // // Verify organizationId is provided and proceed to update membership
    // if (organizationId) {
    //   try {
    //     // Assigning the admin role, verify if 'admin' role is valid for the organization
    //     await clerkClient.organizations.updateOrganizationMembership({
    //       userId: clerkUserId,
    //       organizationId,
    //       role: 'org:admin', // Use 'org:admin' instead of 'admin'
    //     });

    //     console.log(`User ${clerkUserId} successfully added as admin.`);
    //   } catch (error) {
    //     console.error("Error updating membership:", error);
    //     return new Response(
    //       JSON.stringify({ success: false, error: 'Failed to assign admin role.' }),
    //       { status: 500, headers: { 'Content-Type': 'application/json' } }
    //     );
    //   }
    // } else {
    //   return new Response(
    //     JSON.stringify({ success: false, error: 'Organization ID is missing or user is not part of any organization' }),
    //     { status: 400, headers: { 'Content-Type': 'application/json' } }
    //   );
    // }


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
  const { userId } = getAuth(req);
  try {
    // Parse the request JSON to get the ID
    const { id ,email } = await req.json();
    const org = await auth()

    const user = await clerkClient.users.getUser(userId);

    // Check if the user has 'admin' role in any organization
    var isAdmin = 0
    if(org?.orgRole== "org:admin"){
      isAdmin = 1;
    }
    else{
      isAdmin = 0;
    }
    console.log("isAdmin:", isAdmin)

    // If the user is not an admin, reject the request
    if (!isAdmin) {
      return new Response(
        JSON.stringify({ success: false, error: 'Forbidden: You do not have admin access.' }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!id) {
      return new Response(JSON.stringify({ success: false, error: "ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    
    // Fetch the Clerk user ID from the database admin entry
    const adminToDelete = email
    console.log("adminToDelete:", adminToDelete)
    if (!adminToDelete ) {
      return new Response(
        JSON.stringify({ success: false, error: 'Admin not found or mismatch.' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Fetch the Clerk user using the email (we assume email is unique)
    // const allUsers = await clerkClient.users.getUserList({})
    // console.log("all users:", allUsers)
    const clerkUser = await clerkClient.users.getUserList({ emailAddress: adminToDelete });
    // console.log("deleted user clerk id ",clerkUser.data[0].id);

    if (clerkUser.length === 0) {
      return new Response(
        JSON.stringify({ success: false, error: 'No Admin user found with this email.' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }
    // Get the Clerk user ID
    const userToUpdate = clerkUser.data[0].id;
    console.log('User to update1:', userToUpdate);
    // const organizationId = userToUpdate?.organizations?.[0]?.id; // Assuming user is part of an organization
   
    const organizationId = org?.orgId
    console.log("org is ",org)
    console.log('org ID:', organizationId)

    if (!organizationId) {
      return new Response(
        JSON.stringify({ success: false, error: 'User is not a Admin' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
      // If the user is part of an organization, remove the 'admin' role
    if (organizationId) {
      try{
        // Remove the 'admin' role in the organization
        await clerkClient.organizations.updateOrganizationMembership({
          userId: userToUpdate,
          organizationId,
          role: 'org:user', // Use 'org:admin' instead of 'admin'
        });
        const response = await clerkClient.organizations.deleteOrganizationMembership({
          userId: userToUpdate,
          organizationId,
        })
        console.log("Membership deleted successfully:", response);
      }
      catch(error){
        console.error("Error deleting membership:", error);
        return new Response(
          JSON.stringify({ success: false, error: 'Given User is not part of any organization' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }
    else {
      return new Response(
        JSON.stringify({ success: false, error: 'User is not part of any organization' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
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


