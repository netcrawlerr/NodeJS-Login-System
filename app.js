const express = require("express");
const mysql = require("mysql");
const app = express();

// Start Database
const db = mysql.createConnection({
  host: "localhost",
  user: "netcrawler",
  password: "netcrawler",
  database: "nodejs_login",
});

// Connect Database
db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Database Connected...");
  }
});

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.listen(5000, (req, res) => {
  console.log("Server listening on port 5000 ......");
});
