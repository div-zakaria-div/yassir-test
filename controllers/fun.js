const mongoose = require("mongoose");

const connectToDatabase = async () => {
  const uri =
    "mongodb+srv://ZAKARIAYASSIR:n8pnscag@cluster1.n5g8a7m.mongodb.net/?retryWrites=true&w=majority";

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

module.exports = connectToDatabase;
// Appel de la fonction pour établir la connexion
connectToDatabase();
