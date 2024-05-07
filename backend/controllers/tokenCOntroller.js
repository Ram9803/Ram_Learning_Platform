const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const axios = require("axios");

const User = require("../models/user.model");

const tokenn = async (req, res) => {
    const { token } = req.body;
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);
      if (user) {
        return res.status(200).json({
          user: user,
        });
      } else {
        return res.status(401).json({
          error: "User not found",
        });
      }
    } catch (err) {
      return res.status(401).json({
        error: "Invalid token",
      });
    }
  }

  module.exports = { tokenn }