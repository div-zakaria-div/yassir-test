/*
 This code defines the router for getting employees by Date of creation
 It imports the  controller function and sets up the route for getting employees.
 */

const express = require("express");

// Import the controller function for getting employee requests

const {
  getEmployeesByDateCreated,
} = require("../controllers/GetEmpByDateController");

// Create a new router instance
const router = require("express").Router();

// Define the routes of getting controller functions
router.post("/", getEmployeesByDateCreated);

// Export the router to make it accessible from other files
module.exports = router;
