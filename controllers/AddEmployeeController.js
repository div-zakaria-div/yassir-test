const EmployeeModel = require("../model/employeeModel");
const asyncHandler = require("express-async-handler");

//@ desc add New Employee
// route Post /addemployer
// acces Private

exports.addEmployee = asyncHandler(async (req, res) => {
  // Extract the employee data from the request body
  const id = req.body._id;
  const lastName = req.body.lastName;
  const firstName = req.body.firstName;
  const dateCreated = req.body.dateCreated;
  const departement = req.body.departement;
  const checkInDate = Date.now();
  const checkInComment = req.body.checkInComment;
  const checkOutDate = Date.now();
  const checkOutComment = req.body.checkOutComment;

  // Create a new employee document using the EmployeeModel
  const emp = await EmployeeModel.create({
    id,
    lastName,
    firstName,
    dateCreated,
    departement,
    checkInDate,
    checkInComment,
    checkOutDate,
    checkOutComment,
  });
  // Respond with the created employee data
  res.status(201).json({ data: emp });
});
