const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyEngineerController,
  getAllNotificationController,
  deleteAllNotificationController,
} = require("../controllers/userControl");
const authMiddleware = require("../middlewares/authMiddleware");

//router object
const router = express.Router();

//routes
//Login || Post
router.post("/login", loginController);

//Register || Post
router.post("/register", registerController);

//Auth || POST
router.post("/getUserData", authMiddleware, authController);

//Apply Engineer || POST
router.post("/apply-engineer", authMiddleware, applyEngineerController);

//Notification Engineer || POST
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);
//Notification Engineer || POST
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);
module.exports = router;
