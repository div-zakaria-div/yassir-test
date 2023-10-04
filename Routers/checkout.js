/*
 This code defines the router for checkOut employee requests.
 It imports the  controller function and sets up the route for checkOut employees and calculate de workduration
 */

const express = require("express");

// Import the controller function for checkOut requests
const { checkOutEmployee } = require("../controllers/CheckOutController.js");

// Create a new router instance
const router = require("express").Router();

// Define the routes of checkOut controller functions
router.post("/", checkOutEmployee);

// Export the router to make it accessible from other files
module.exports = router;
