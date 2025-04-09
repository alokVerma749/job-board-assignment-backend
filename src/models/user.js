import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstname: {
    type: String, required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    default: '0000000000'

  },
  location: {
    type: String,
    default: 'India'
  },
  bio: {
    type: String,
    default: 'Test Bio'
  },
  password: {
    type: String,
    required: true
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  role: {
    type: String,
    default: 'user'
  },
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
