const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  Event_name: {
    type: String,
    required: true,
  },
  Event_details: {
    type: String,
    required: true,
  },
  Project_Discription: {
    type: String,
  },
  Event_outcome: {
    type: String,
  },
  Event_lead: {
    type: String,
  },
  Event_team: {
    type: [{
        name: String,
        linkedin: String,
        github: String
      }], // Array of team members
  },
  date: {
    type: Date,
    required: true,
  },
  Attendance: {
    type: String,
  },
  Event_Type: {
    type: String,
    enum: [
      "External Invited Talk",
      "Workshop",
      "Hackathon",
      "Teaching learning Session - organized by club",
      "Competition (please mention the details)",
      "Others: (mention in input field)"
    ],
    required: true,
  },
  Photos: {
    type: [[String]], // Nested array for photo URLs
  },
  budget: {
    type: Number,
    default: 0,
  },
  Resources: {
    type: [[String]], // Nested array for resource URLs
  },
});

module.exports = mongoose.models.Event || mongoose.model('Event', EventSchema);
