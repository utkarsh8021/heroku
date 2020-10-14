const mongoose = require("mongoose");

var express = require("express");
var app = express();

var router = express.Router();

router.post(
  "/contact",
  [
    check("name", "Name is required").isLength({ min: 3 }),
    check("surname", "Last name is required").isLength({ min: 3 }),
    check("email", "Email is required").isEmail(),
    check("message", "Message is required").isLength({ min: 3 }),
  ],
  signup
);
