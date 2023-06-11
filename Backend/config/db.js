const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to MongoDB, ${conn.connection.host}`.yellow.bold);
  } catch (error) {
    console.error("Error connecting to DB", error);
    process.exit(1);
  }
};

module.exports = connectDB;
