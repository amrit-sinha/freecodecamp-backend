const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  googleSignIn,
  learn,
} = require("../controllers/authController");
const { validationResult } = require("express-validator");

router.post(
  "/signup",
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  signup
);

router.post(
  "/signin",
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  signin
);

router.post(
  "/google-signin",
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  googleSignIn
);

router.get(
  "/learn",
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  learn
);

module.exports = router;
