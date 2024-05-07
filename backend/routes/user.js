const express = require("express");
const router = express.Router();

const saltRounds = parseInt(process.env.SALT_ROUNDS);

// controller functions
const { signupUser,  loginUser, userData } = require('../controllers/userController');
const { allTracks, trackById } = require('../controllers/trackController');
const { tokenn } = require('../controllers/tokenCOntroller');
const { courseCont, courseById, courseProgress } = require('../controllers/courseController');
const { contestCont, compileCont } = require('../controllers/contestController');

router.post("/register", signupUser);

router.post("/login", loginUser);

router.post("/verifyToken", tokenn);

router.post("/getUserData", userData);

router.get("/getAllTracks", allTracks);

router.post("/getTrackById", trackById);

router.post("/startCourse", courseCont);

router.post("/getCourseById", courseById);

router.post("/handleCourseProgress", courseProgress);

router.get("/contests", contestCont);

router.post("/compile", compileCont);

module.exports = router;
