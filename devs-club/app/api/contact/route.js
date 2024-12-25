import Contact from '../../models/Contact';
import dbConnect from '../conn';

export async function GET(req, res) {
  try {
    await dbConnect();
    const contacts = await Contact.find();

    // Return all contact submissions, including the datetime field
    return new Response(
      JSON.stringify({ success: true, data: contacts }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to fetch contacts' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function POST(req) {
    const { name, email, message } = await req.json();
  
    try {
      await dbConnect();
  
      // Validate required fields
      if (!name || !email || !message) {
        return new Response(
          JSON.stringify({ success: false, error: 'Missing required fields' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
  
      // Create a new Contact entry
      const newContact = new Contact({
        name,
        email,
        message,
      });
  
      await newContact.save();
  
      return new Response(
        JSON.stringify({ success: true, data: newContact }),
        { status: 201, headers: { 'Content-Type': 'application/json' } }
      );
    } catch (error) {
      console.error('Error creating contact:', error);
      return new Response(
        JSON.stringify({ success: false, error: 'Failed to create contact' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  }