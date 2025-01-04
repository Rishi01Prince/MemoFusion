import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

// Define User Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: false // Optional, only used for credential-based authentication
  },
  email: {
    type: String,
    required: true,
    unique: true // Ensure unique email
  },
  googleId: {
    type: String,
    required: false // Optional, used for Google Sign-In
  },
  location: {
    type: String,
    required: false
  },
  pincode: {
    type: String,
    required: false
  },
  picture: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  jwtToken: {
    type: String,
    required: false // This will store the JWT, if needed to store in the DB
  }
});

// Create and export User model
export default model('User', UserSchema);
