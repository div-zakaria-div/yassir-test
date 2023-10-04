const EmployeeModel = require("../model/employeeModel");
const asyncHandler = require("express-async-handler");

//@ desc get list of employees based on a date of creation
// route get /addemployer
// acces Private

exports.getEmployeesByDateCreated = asyncHandler(async (req, res) => {
  const dateCreated = req.query.dateCreated;

  try {
    // Checking if the date parameter is present
    if (!dateCreated) {
      return res
        .status(400)
        .json({ error: "Le paramètre dateCreated est requis" });
    }

    // Parsing the date string into a Date object
    const parsedDate = new Date(dateCreated);

    // Filtering employees based on the date of creation
    const filteredEmployees = await EmployeeModel.find({
      dateCreated: parsedDate,
    });
    res
      .status(200)
      .json({ results: filteredEmployees.length, data: filteredEmployees });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des employés" });
  }
});
