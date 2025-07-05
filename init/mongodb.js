const mongoose = require("mongoose");
require("dotenv").config(); // Only needed here if not already loaded in app.js

const connectMongodb = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URL);
    console.log("✅ Connected to MongoDB Atlas");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectMongodb;
