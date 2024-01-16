const express = require("express");
const path = require("path");
const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config({ path: path.join("./config.env") });

const app = express();

// Start Database
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

// Telling Node when sattic files are
const publicDirection = path.join(__dirname, "./public");
app.use(express.static(publicDirection));
// Template Engine
app.set("view engine", "hbs");

// Connect Database
db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Database Connected...");
  }
});

app.get("/", (req, res) => {
  //   res.send("<h1>Home Page</h1>");
  res.render("index");
});

app.listen(5000, (req, res) => {
  console.log("Server listening on port 5000 ......");
});
