const FormData = require("./dataModel"); // Import the FormData model

// Controller function to save form data
const saveFormData = async (req, res) => {
  try {
    // Extract form data from the request body
    const formData = req.body;

    // Create a new instance of FormData model with the extracted data
    const newFormData = new FormData(formData);

    // Save the data to the database
    await newFormData.save();

    // Send a success response
    res.status(201).json({ message: "Form data saved successfully" });
  } catch (error) {
    // Handle errors
    console.error("Error saving form data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  saveFormData,
};
