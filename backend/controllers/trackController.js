const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const axios = require("axios");

const Track = require("../models/track.model");
const User = require("../models/user.model");
const UserCourse = require("../models/user_course.model");


const allTracks = async (req, res) => {
    const tracks = await Track.find({});
    return res.status(200).json({
      tracks: tracks,
    });
  }

const trackById = async (req, res) => {
    const { id, token } = req.body;
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);
      if (!user) {
        return res.status(401).json({
          error: "User not found",
        });
      }
      const track = await Track.findById(id);
      const courses = await Track.findById(id).populate("courses");
      const userCourses = await UserCourse.find({
        user: user._id,
      });
      const userCoursesIds = userCourses.map((course) => course.course);
      return res.status(200).json({
        track: track,
        courses: courses,
        userCoursesIds: userCoursesIds,
        userCourses: userCourses,
      });
    } catch (err) {
      return res.status(401).json({
        error: "Invalid token",
      });
    }
  }

  module.exports = { allTracks, trackById }