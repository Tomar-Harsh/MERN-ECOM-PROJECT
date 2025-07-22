// import express / Express module ko import kar rahe hain
const express = require("express");
const app = express(); //Express app ka object bana rahe hain

app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");
const product = require("./routes/productRoute");

// Auth route (no JWT required)
app.use("/api/v1/auth", authRoutes);
// Cart and product routes (JWT required)
app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1", product);

module.exports = app // Is file se app ko export kar rahe hain taki dusri files me use ho sake
