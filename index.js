const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home");
});
app.get("/about", function (req, res) {
  res.render("About");
});

app.get("/register", function (req, res) {
  res.render("Register");
});

app.post("/submission", function (req, res) {
  res.render("submission");
  res.redirect("/");
});

app.get("/contact", function (req, res) {
  res.render("Contact");
});
app.listen(3000, function (req, res) {
  console.log("Server has started succesfully on port 3000");
});
