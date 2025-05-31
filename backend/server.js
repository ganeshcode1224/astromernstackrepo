//backend\server.js after kund and user 
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const astrologyRoutes = require("./routes/astrologyRoutes"); // astrology routes (including kundli)

dotenv.config();
const app = express();

// ✅ Updated CORS middleware
app.use(
  cors({
    origin: "http://localhost:5173", // allow frontend
    credentials: true, // if you're sending cookies or auth headers
  })
);

app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("Sanatan-AstroFolks Backend is Running 🚀");
});

// Use user routes
app.use("/api/users", userRoutes);

// Use astrology routes (includes kundli matching)
app.use("/api/astrology", astrologyRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log("MongoDB Connection Error ❌", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT} 🔥`));

