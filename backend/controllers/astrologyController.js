//backend\controllers\astrologyController.js   save to db kun details  
require('dotenv').config();
const KundliMatch = require("../models/KundliMatch");
const axios = require('axios');

// Your client credentials (replace with your actual keys)
const CLIENT_ID = process.env.PROKERALA_CLIENT_ID;
const CLIENT_SECRET = process.env.PROKERALA_CLIENT_SECRET;

// Function to get access token
async function getAccessToken() {
  const tokenUrl = "https://api.prokerala.com/token";

  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  params.append("client_id", CLIENT_ID);
  params.append("client_secret", CLIENT_SECRET);

  try {
    const response = await axios.post(tokenUrl, params.toString(), {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    return response.data.access_token;
  } catch (error) {
    console.error("Error getting access token:", error.response?.data || error.message);
    throw error;
  }
}

// Controller for kundli matching
exports.kundliMatching = async (req, res) => {
  try {
    const { ayanamsa, girl_coordinates, girl_dob, boy_coordinates, boy_dob } = req.body;

    if (!ayanamsa || !girl_coordinates || !girl_dob || !boy_coordinates || !boy_dob) {
      return res.status(400).json({ error: "Missing required parameters" });
    }

    // Get access token
    const accessToken = await getAccessToken();

    // Call Kundli Matching API
    const response = await axios.get("https://api.prokerala.com/v2/astrology/kundli-matching", {
      params: {
        ayanamsa,
        girl_coordinates,
        girl_dob,
        boy_coordinates,
        boy_dob,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // Save result to MongoDB
    const kundliMatch = new KundliMatch(response.data.data);
    await kundliMatch.save();

    console.log("Kundli matching saved to DB!");

    // Send saved data back to client
    res.json({ message: "Kundli matching saved!", data: kundliMatch });
  } catch (error) {
    console.error("Kundli Matching Error:", error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data || error.message });
  }
};














