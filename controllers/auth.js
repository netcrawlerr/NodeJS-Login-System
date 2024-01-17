const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

exports.register = (req, res) => {
  console.log(req.body);

  const { name, email, password, confirmPassword } = req.body;

  db.query(
    "SELECT email from users where email = ?",
    [email],
    async (error, results) => {
      if (error) {
        console.log(error);
      }
      if (results > 0) {
        return res.render("register", {
          message: "That Email Has Been taken ",
        });
      } else if (password !== confirmPassword) {
        return res.render("register", {
          message: "Passwords donot MATCH ",
        });
      }

      let hashedPassword = await bcrypt.hash(password);
      console.log(hashedPassword);
    }
  );
};
