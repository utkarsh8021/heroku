const User = require("./models/user");
const { check, validationResult } = require("express-validator");

exports.signup = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      erroris: errors.array()[0].msg,
      errorin: errors.array()[0].param,
    });
  }

  const user = User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        err: "Unable to save..",
      });
    }
    res.json({
      name: user.name,
      email: user.email,
    });
  });
};
