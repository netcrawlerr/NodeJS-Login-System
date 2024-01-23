const express = require("express");
const authController = require("../controllers/auth");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/profile", authController.isLoggedIn, (req, res) => {
  console.log("Reached /profile route");
  if (req.user) {
    res.render("profile");
  } else {
    res.redirect("/login");
  }
});

router.get("*", (req, res) => {
  res.render("error-page");
});

module.exports = router;
