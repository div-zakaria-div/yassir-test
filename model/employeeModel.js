/*
 (1)-This code defines the Mongoose schema and model for the Employee collection.
 (2)-The schema defines the structure of an employee document, and the model provides an interface for interacting with the database.
 */

const mongoose = require("mongoose");

// Define the schema for the Employee collection
const employeeschema = mongoose.Schema(
  {
    _id: String,
    lastName: String,
    firstName: String,
    dateCreated: Date,
    departement: String,
    checkInDate: Date,
    checkInComment: String,
    checkOutDate: Date,
    checkOutComment: String,
    workDuration: String,
  }
  //{ timestamps: true }
);

// Create the model for the Employee collection
const modelEMPLOYEE = mongoose.model("Employee", employeeschema);

// Export the model to make it accessible from other files
module.exports = modelEMPLOYEE;
