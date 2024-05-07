const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const axios = require("axios");

const UserCourse = require("../models/user_course.model");
const Course = require("../models/course.model");
const User = require("../models/user.model");

const courseCont = async (req, res) => {
    const { courseId, token } = req.body;
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);
      if (!user) {
        return res.status(401).json({
          error: "User not found",
        });
      }
      const userCourse = await UserCourse.findOne({
        user: user._id,
        course: courseId,
      });
      if (userCourse) {
        return res.status(409).json({
          error: "User already enrolled in this course",
        });
      }
      const course = await Course.findById(courseId);
      const length = course.videos.length;
      const userCourseCreated = await UserCourse.create({
        user: user._id,
        course: courseId,
        checked: Array(length).fill(false),
        progress: 0,
        completed: false,
      });
      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(401).json({
        error: "Invalid token",
      });
    }
  }

  const courseById = async (req, res) => {
    const { id, token } = req.body;
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);
      if (user) {
        const course = await Course.findById(id);
        const userCourse = await UserCourse.findOne({
          user: user._id,
          course: id,
        });
        return res.status(200).json({
          course: course,
          userCourse: userCourse,
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

  const courseProgress = async (req, res) => {
    const { courseId, token, progress, checked } = req.body;
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);
      if (user) {
        const userCourse = await UserCourse.findOne({
          user: user._id,
          course: courseId,
        });
        const course = await Course.findById(courseId);
        if (userCourse) {
          userCourse.progress = progress;
          userCourse.checked = checked;
          if (course.videos.length === progress) {
            userCourse.completed = true;
            userCourse.date_completed = new Date();
          } else {
            userCourse.completed = false;
            userCourse.date_completed = null;
          }
          userCourse.save();
          return res.status(200).json({
            success: true,
            userCourse: userCourse,
          });
        }
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

  module.exports = { courseCont, courseById, courseProgress}