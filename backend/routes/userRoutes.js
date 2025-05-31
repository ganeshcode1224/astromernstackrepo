//backend\routes\userRoutes.js
const express = require("express");
const { signup, login } = require("../controllers/userController");
const protect = require("../middleware/auth");

const router = express.Router();

// Public Routes (No authentication required)
router.post("/signup", signup);
router.post("/login", login);

// Protected Route (Only logged-in users can access)
router.get("/dashboard", protect, (req, res) => {
  res.json({ message: "Welcome to your protected dashboard!", user: req.user });
});

module.exports = router;



