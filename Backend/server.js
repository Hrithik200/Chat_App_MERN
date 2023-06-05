const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data.js");
const app = express();
dotenv.config;

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend --> PORT ${port}`);
});
