import mongoose from 'mongoose';

// Admin schema definition
const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['Admin', 'Core', 'Head-core','Coordinator','PIC','Incharge','Misc'],  // You can extend these roles as needed
  },
  email: {
    type: String,
    required: true,
    unique: true,  // Ensure no duplicate emails
    match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],  
  },
});

const Admin = mongoose.models.Admin || mongoose.model('Admin', adminSchema);

export default Admin;
