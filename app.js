const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const connectMongodb = require("./init/mongodb");
const todoRoute = require("./routes/todo");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

connectMongodb();

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.static(path.join(__dirname, "public")));  // ✅ serves CSS
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/", todoRoute);

module.exports = app;
