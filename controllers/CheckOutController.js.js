const EmployeeModel = require("../model/employeeModel");
const asyncHandler = require("express-async-handler");



exports.checkOutEmployee = asyncHandler(async (req, res) => {
  const { employeeID, commentCheckout } = req.body;

  // Find the employee by ID
  const employee = await EmployeeModel.findById(employeeID);

  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  }

  // Update the employee's check-out date and comment
  employee.checkOutDate = new Date();
  employee.checkOutComment = commentCheckout;

  // Calculate work duration
  const checkInDate = employee.checkInDate;
  const checkOutDate = employee.checkOutDate;
  const workDuration = calculateDuration(checkInDate, checkOutDate);

  // Update the workDuration field of the employee (in hours:minutes:seconds)
  employee.workDuration = `${workDuration.hours}h:${workDuration.minutes}m:${workDuration.seconds}s`;
  // Save the updated employee
  await employee.save();
  const formattedCheckInDate = checkInDate.toLocaleString("en-US", {
    timeZone: "Europe/Paris",
    hour12: false,
  });
  const formattedCheckOutDate = checkOutDate.toLocaleString("en-US", {
    timeZone: "Europe/Paris",
    hour12: false,
  });
  res.status(200).json({
    message: `Employee checked out successfully. Goodbye ${employee.lastName} you chekin on ${formattedCheckInDate} and  you checkout on ${formattedCheckOutDate}! Work duration: ${workDuration.hours} hours, ${workDuration.minutes} minutes, ${workDuration.seconds} seconds.`,
  });
});

//function calculate durationwork
function calculateDuration(checkInDate, checkOutDate) {
  if (!checkInDate || !checkOutDate) {
    return { hours: 0, minutes: 0, seconds: 0 };
  }

  const durationInMilliseconds = checkOutDate - checkInDate;
  const durationInSeconds = Math.floor(durationInMilliseconds / 1000); // Convert to seconds

  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);
  const seconds = durationInSeconds % 60;

  return { hours, minutes, seconds };
}
