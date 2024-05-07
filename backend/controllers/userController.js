const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const axios = require("axios");

const User = require("../models/user.model");
const UserCourse = require("../models/user_course.model");
const Course = require("../models/course.model");

const saltRounds = parseInt(process.env.SALT_ROUNDS);

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({
      email: email,
    });
    if (!user) {
      return res.status(401).json({
        error: "User not found",
      });
    }
    bcrypt.compare(password, user.password, async (err, result) => {
      if (err) {
        return res.status(401).json({
          error: "Password incorrect",
        });
      }
      if (result) {
        const token = jwt.sign(
          {
            id: user._id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "8h",
          }
        );
        return res.status(200).json({
          token: token,
        });
      } else {
        return res.status(401).json({
          error: "Password incorrect",
        });
      }
    });
  }

  const signupUser = async (req, res) => {
    const { name, email, password } = req.body;
  
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      if (err) {
        return res.status(500).json({
          error: "Internal server error",
        });
      } else {
        try {
          const user = await User.create({
            name,
            email,
            password: hash,
          });
          const token = jwt.sign(
            {
              id: user._id,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "1h",
            }
          );
          return res.status(201).json({
            token: token,
          });
        } catch (err) {
          return res.status(409).json({
            error: "Email already exists",
          });
        }
      }
    });
  }

  const userData = async (req, res) => {
    const { token } = req.body;
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);
      if (user) {
        const userCourses = await UserCourse.find({
          user: user._id,
        });
        const courses = await Course.find({
          _id: {
            $in: userCourses.map((userCourse) => userCourse.course),
          },
        });
        return res.status(200).json({
          courses: courses,
          userCourses: userCourses,
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

  module.exports = { loginUser, signupUser, userData }