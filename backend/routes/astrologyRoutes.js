
// backend\routes\astrologyRoutes.js api and saved to db
const express = require("express");
const router = express.Router();
const { kundliMatching } = require("../controllers/astrologyController");

// POST /api/astrology/kundli-matching
router.post("/kundli-matching", kundliMatching);

module.exports = router;
