const mongoose = require("mongoose");

var express = require("express");
var app = express();
const path = require("path");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// const cors = require("cors");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Load Public folder
app.use(express.static("public"));

// index page
app.get("/", function (req, res) {
  res.render("index.ejs");
});

// about page
app.get("/about", function (req, res) {
  res.render("about.ejs");
});

// projects page
app.get("/projects", function (req, res) {
  res.render("project.ejs");
});

// services page
app.get("/services", function (req, res) {
  res.render("services.ejs");
});

// contact page
app.get("/contact", function (req, res) {
  res.render("contact.ejs");
});

mongoose
  .connect(
    "mongodb+srv://portfolio:qwerty@1234@cluster0.70zvn.mongodb.net/contact?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("DB CONNECTED");
  });

// Start Server
app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
