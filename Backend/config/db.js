const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Get the default connection
const db = mongoose.connection;

// Event handlers for successful and error connections
db.on("connected", () => {
  console.log("Connected to MongoDB");
});

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

// Export the connection
module.exports = db;
