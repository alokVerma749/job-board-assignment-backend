import Application from '../models/application.js';

// Get all applications
export const get_all_applications = async (req, res) => {
  try {
    const applications = await Application.find();
    res.status(200).json({ success: true, data: applications });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Get a single application by ID
export const get_application_by_id = async (req, res) => {
  const { id } = req.params;
  try {
    const application = await Application.findById(id);
    if (!application) {
      return res.status(404).json({ success: false, message: 'Application not found' });
    }
    res.status(200).json({ success: true, data: application });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Create a new application
export const create_application = async (req, res) => {
  const { companyName, jobRole, location, status, applicationDate, jobPostingURL, salaryRange, notes } = req.body;
  try {
    const newApplication = new Application({
      companyName,
      jobRole,
      location,
      status,
      applicationDate,
      jobPostingURL,
      salaryRange,
      notes,
    });
    const savedApplication = await newApplication.save();
    res.status(201).json({ success: true, data: savedApplication });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Update an application by ID
export const update_application = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    const updatedApplication = await Application.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedApplication) {
      return res.status(404).json({ success: false, message: 'Application not found' });
    }
    res.status(200).json({ success: true, data: updatedApplication });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Delete an application by ID
export const delete_application = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedApplication = await Application.findByIdAndDelete(id);
    if (!deletedApplication) {
      return res.status(404).json({ success: false, message: 'Application not found' });
    }
    res.status(200).json({ success: true, message: 'Application deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
