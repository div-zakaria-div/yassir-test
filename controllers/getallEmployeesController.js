const EmployeeModel = require("../model/employeeModel");
const asyncHandler = require("express-async-handler");

//@ desc get list of all  Employees
// route get /addemployer
// acces Private
exports.getEmployee = asyncHandler(async (req, res, dateCreated) => {
  const listEmp = await EmployeeModel.find({});
  res.status(200).json({ results: listEmp.length, data: listEmp });
});
