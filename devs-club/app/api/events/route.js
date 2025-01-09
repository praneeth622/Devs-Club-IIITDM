import Event from '../../models/events';
import dbConnect from '../conn';

// GET request: Fetch all events
export async function GET(req) {
  try {
    await dbConnect();
    const events = await Event.find();
    return new Response(
      JSON.stringify({ success: true, data: events }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error fetching events:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to fetch events' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// POST request: Create a new event
export async function POST(req) {
  const {
    Event_name,
    Event_details,
    Project_Discription,
    Event_outcome,
    Event_lead,
    Event_team,
    date,
    Attendance,
    Event_Type,
    Photos,
    budget,
    Resources,
    key
  } = await req.json();

  try {
    await dbConnect();

    // Validate required fields
    console.log("feilds",Event_name, Event_details, Event_Type,date)
    if (!Event_name || !Event_details || !date ) {
      return new Response(
        JSON.stringify({ success: false, error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if(!(key == process.env.NEXT_PUBLIC_KEY)){
      return new Response(
        JSON.stringify({ success: false, error: "Invalid API Key" }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Create a new Event
    const newEvent = new Event({
      Event_name,
      Event_details,
      Project_Discription,
      Event_outcome,
      Event_lead,
      Event_team,
      date,
      Attendance,
      Event_Type,
      Photos,
      budget,
      Resources,
    });

    await newEvent.save();

    return new Response(
      JSON.stringify({ success: true, data: newEvent }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error creating event:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to create event' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// DELETE request: Delete an event by ID
export async function DELETE(req) {
  try {
    const { id,key } = await req.json();

    if(!(key == process.env.NEXT_PUBLIC_KEY)){
      return new Response(
        JSON.stringify({ success: false, error: "Invalid API Key" }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (!id) {
      return new Response(
        JSON.stringify({ success: false, error: 'ID is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const deletedEvent = await Event.findByIdAndDelete(id);

    if (!deletedEvent) {
      return new Response(
        JSON.stringify({ success: false, error: 'Event not found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, data: deletedEvent }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error deleting event:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Failed to delete event' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
