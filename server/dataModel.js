const mongoose = require("mongoose");

// Define a schema for the form data
const userDataSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    photo: { type: String },
    numberOfPeople: { type: Number, required: true },
    namesOfPeople: { type: [String] },
    performanceType: { type: String },
    performanceTheme: { type: String },
    paymentMode: { type: String },
    paymentSS: { type: String },
    howDoYouKnow: { type: String },
    expectations: { type: String },
  },
  { timestamps: true }
);

// Create a model using the schema
const FormData = mongoose.model("UserData", userDataSchema);

module.exports = FormData;
