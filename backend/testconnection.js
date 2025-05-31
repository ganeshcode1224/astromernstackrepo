//backend\testconnection.js
require('dotenv').config(); // 

const mongoose = require("mongoose");

const uri = process.env.MONGO_URI; // 

mongoose.connect(uri)
  .then(() => {
    console.log("MongoDB Connection Successful! ✅");
  })
  .catch((err) => {
    console.log("MongoDB Connection Error ❌", err.message);
  });














  

  


