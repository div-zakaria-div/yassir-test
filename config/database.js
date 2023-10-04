/**
 * Establishes a connection to the MongoDB database using Mongoose.
 * The connection URI is fetched from the environment variable process.env.DB_URI.
 * If the connection is successful, a success message is logged to the console.
 * If there is an error connecting to the database, an error message is logged to the console and the process exits with an error code.
 */

const mongoose = require("mongoose");

//Establishes a connection to the MongoDB database.
const dbconnection = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then((conn) => {
      console.log(`DataBase Connected: ${conn.connection.host}`);
    })
    .catch((err) => {
      console.error(`database EROOR : ${err}`);
      process.exit(1);
    });
};

// Export the dbconnection function
module.exports = dbconnection;
