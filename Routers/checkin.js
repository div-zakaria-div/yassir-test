/*
 This code defines the router for adding employee-related requests.
 It imports the  controller function and sets up the route for adding employees.
 */

const express = require("express");

// Import the controller function for adding employee requests
const { checkInEmployee } = require("../controllers/ChekInController");

// Create a new router instance
const router = require("express").Router();

// Define the routes of adding controller functions
router.post("/", checkInEmployee);

// Export the router to make it accessible from other files
module.exports = router;
