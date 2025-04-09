import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true
  },
  jobRole: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true

  },
  status: {
    type: String,
    enum: ['Applied', 'Interview', 'Offer Rejected'],
    default: 'Applied'
  },
  applicationDate: {
    type: Date,
    required: true
  },
  jobPostingURL: {
    type: String,
    required: false
  },
  salaryRange: {
    type: String, required: false
  },
  notes: {
    type: String,
    required: false
  },
}, { timestamps: true });

const Application = mongoose.models.Application || mongoose.model('Application', applicationSchema);

export default Application;
