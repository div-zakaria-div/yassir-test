const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const morgan = require("morgan");
const dotenv = require("dotenv");

//This line of code loads environment variables from the "config.env" file.
dotenv.config({ path: "config.env" });

// Import the router for adding a new employee
const addEmployeeRouter = require("./Routers/addNewEmployee");
// Import the router for getting all employees
const getEmployees = require("./Routers/getEmployees");
const getEmployeesByDateCreated = require("./Routers/getEmployeesByDate");
const checkInEmployee = require("./Routers/checkin");
const checkOutEmployee = require("./Routers/checkout");
// Establish the database connection
const dbconnection = require("./config/database");
dbconnection();

// Initialize the Express application
const app = express();
//////***options for swagger ***/
const swaggerOption = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Documentation test-yassir Mekhalfia",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:8000/",
      },
    ],
  },
  apis: ["./server.js"],
};

const swaggerSpec = swaggerJsDoc(swaggerOption);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
console.log(swaggerSpec);

app.use(express.json());
if (process.env.NODE_ENV == "development") {
  // Use the Morgan middleware for HTTP request logging
  app.use(morgan("dev"));
  console.log(`node : ${process.env.NODE_ENV} `);
}
////////////////***Swagger***/////
/**
 * @swagger
 * components:
 *   schemas:
 *     Employee:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         lastName:
 *           type: string
 *         firstName:
 *           type: string
 *         dateCreated:
 *           type: string
 *           format: date
 *         department:
 *           type: string
 *
 */

/**
 * @swagger
 * /addemployer:
 *   post:
 *     summary: Add an employee
 *     description: Add a new employee with the provided parameters
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *               lastName:
 *                 type: string
 *               firstName:
 *                 type: string
 *               dateCreated:
 *                 type: string
 *                 format: date
 *               department:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Success
 *       '400':
 *         description: Bad Request
 */

/**
 * @swagger
 * /getEmployees:
 *   get:
 *     summary: Get all employees
 *     description: Retrieve all employees from the database mongoDB
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 *
 */
/**
 * @swagger
 * /checkInEmployee:
 *   post:
 *     summary: Check-in an employee
 *     description: Check-in an employee with the provided parameters
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               employeeID:
 *                 type: string
 *               commentCheckout:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Success
 *       '400':
 *         description: Bad Request
 */

/**
 * @swagger
 * /checkOutEmployee:
 *   post:
 *     summary: Check-out an employee and generate a workduration
 *     description: Check-out an employee with the provided parameters
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               employeeID:
 *                 type: string
 *               commentCheckout:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Success
 *       '400':
 *         description: Bad Request
 */

/**
 * @swagger
 * /getEmployeesByDateCreated:
 *   post:
 *     summary: Get employees by date of creation
 *     description: Retrieve employees based on their date of creation
 *     parameters:
 *       - in: query
 *         name: dateCreated
 *         schema:
 *           type: string
 *         required: true
 *         description: Date of creation for filtering employees
 *     responses:
 *       '200':
 *         description: Success
 *       '400':
 *         description: Bad Request
 */

/////////////////////////////////***Employee management routes***/////////////////

/*These routes handle operations related to employee management, such as:
 ------creation
-------Retrieve all employee records 
-------Retrieve employees based on their date of creation
-------Record the check-in time for an employee
-------Record the check-out time for an employee and calculate their work duration
*/
app.use("/addemployer", addEmployeeRouter);
app.use("/getEmployees", getEmployees);
app.use("/getEmployeesByDateCreated", getEmployeesByDateCreated);
app.use("/checkInEmployee", checkInEmployee);
app.use("/checkOutEmployee", checkOutEmployee);

// Retrieve the port number from the environment variables
const PORT = process.env.PORT;

// Start the Express application and listen on the specified port
const serveur = app.listen(PORT, () => {
  console.log(`app runiing on port ${PORT}`);
});

module.exports = serveur;
