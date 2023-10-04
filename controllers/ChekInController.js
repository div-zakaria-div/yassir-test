const EmployeeModel = require("../model/employeeModel");
const asyncHandler = require("express-async-handler");

/**
 * Performs a check-in for an employee.
 * POST route: /employee/check-in
 * Access: Public
 * Parameters: employeeID (String), comment (String)
 */
exports.checkInEmployee = asyncHandler(async (req, res) => {
  const { employeeID, comment } = req.body;

  // Find the employee by ID
  const employee = await EmployeeModel.findById(employeeID);

  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  }

  // Update the employee's check-in date
  employee.checkInDate = new Date();
  employee.checkInComment = comment;

  // Save the updated employee
  await employee.save();

  res.status(200).json({
    message: `Employee checked in successfully welcome ${employee.lastName} You arrived on ${employee.checkInDate}`,
  });
});
