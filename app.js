const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.listen(5000, (req, res) => {
  console.log("Server listening on port 5000 ......");
});
