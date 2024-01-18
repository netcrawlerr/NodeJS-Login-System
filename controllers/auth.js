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
    "SELECT COUNT(*) as count from users WHERE email = ?",
    [email],
    async (error, results) => {
      if (error) {
        console.log(error);
      }

      const emailCount = results[0].count;
      if (emailCount > 0) {
        return res.render("register", {
          message: "That Email Has Been taken ",
        });
      } else if (password !== confirmPassword) {
        return res.render("register", {
          message: "Passwords do not MATCH ",
        });
      }

      let hashedPassword = await bcrypt.hash(password, 10);
      console.log(hashedPassword);
      db.query(
        "INSERT INTO users SET ?",
        {
          name: name,
          email: email,
          password: hashedPassword,
        },
        (error, results) => {
          if (error) {
            console.log(error);
          } else {
            console.log(results);
            return res.render("register", {
              message: "User Registered",
            });
          }
        }
      );
    }
  );
};
