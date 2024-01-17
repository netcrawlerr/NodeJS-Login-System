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

<<<<<<< Updated upstream
=======
// Telling Node when sattic files are
const publicDirection = path.join(__dirname, "./public");
app.use(express.static(publicDirection));
app.use(express.json());

// Template Engine
app.set("view engine", "hbs");

>>>>>>> Stashed changes
// Connect Database
db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Database Connected...");
  }
});

<<<<<<< Updated upstream
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});
=======
// Defining routes
app.use("/", require("./routes/pages"));
app.use("/auth", require("./routes/auth"));
>>>>>>> Stashed changes

app.listen(5000, (req, res) => {
  console.log("Server listening on port 5000 ......");
});
