const express = require("express");
const {
  getEngineerInfoController,
  updateProfileController,
} = require("../controllers/engineerControl");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

//POST SINGLE ENGINEER INFO
router.post("/getEngineerInfo", authMiddleware, getEngineerInfoController);

//Post Update Profile
router.post("/updateProfile", authMiddleware, updateProfileController);

module.exports = router;
