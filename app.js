const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "/contact.html"));
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "/404.html"));
});

app.listen(PORT, () => {
  console.log("APP is Running...");
});
