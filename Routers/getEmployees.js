/*
 This code defines the router for getting employee-related requests.
 It imports the  controller function and sets up the route for getting  employees.
 */

const express = require("express");

// Import the controller function for getting employee requests
const { getEmployee } = require("../controllers/getallEmployeesController");

// Create a new router instance
const router = require("express").Router();

// Define the routes of getting controller functions
router.get("/", getEmployee);

// Export the router to make it accessible from other files
module.exports = router;
