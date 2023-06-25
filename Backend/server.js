const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data.js");
const connectDB = require("./config/db.js");
const colors = require("colors");
const app = express();
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware.js");
dotenv.config;
connectDB();

app.post("/", (req, res) => {
  res.send("Hello, Express!");
});
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/chatRoutes")
// Error Handling Middlewares

app.use(notFound)
app.use(errorHandler)


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend --> PORT ${port}`.yellow.bold);
});
