const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const promisify = require("util");
 

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).render("login", {
        message: "Please Provide Email and Password",
      });
    }
    // selecting email to authenticate
    db.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      async (error, results) => {
        console.log(results);
        loggedInUser = results[0].name;
        if (
          !results ||
          !(await bcrypt.compare(password, results[0].password))
        ) {
          res.status(401).render("login", {
            message: "Email or Password is incorrect",
          });
        } else {
          const id = results[0].id;

          // JWT tokens
          const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
          });

          console.log("The token is " + token);

          const cookieOptions = {
            expires: new Date(
              Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
            ),
            httpOnly: true,
          };
          res.cookie("jwt", cookieOptions);

          res.status(200).render("profile", {
            name: loggedInUser,
          });
          console.log(loggedInUser);
          // res.status(200).redirect("/profile");
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.register = (req, res) => {
  console.log(req.body);

  const { name, email, password, confirmPassword } = req.body;

  // making sure no duplicates in registering email
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
            console.log("User Registered");
            return res.render("register", {
              message: "User Registered",
            });
          }
        }
      );
    }
  );
};

exports.isLoggedIn = async (req, res, next) => {
  console.log(req.cookies);
  if (req.cookies.jwt) {
    try {
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      );
      console.log(decoded);

      // check if the user exist

      db.query(
        "SELECT * FROM users WHERE id = ?",
        [decoded.id],
        (error, result) => {
          console.log(result);
          if (!result) {
            return next();
          }

          req.user = result[0];
          return next();
        }
      );
    } catch (error) {
      return next();
    }
  } else {
    next();
  }
};
