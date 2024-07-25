const express = require("express");
const path = require("path");
const mysql = require("mysql");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config({ path: path.join("./.env") });

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

// Parsing URL Encoded bodies
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(cookieParser());

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

app.use("/auth", require("./routes/auth"));

app.use("/", require("./routes/pages"));

app.listen(5100, (req, res) => {
  console.log("Server listening on port 5001 ......");
});
