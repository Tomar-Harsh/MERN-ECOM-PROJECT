// import express / Express module ko import kar rahe hain
const express = require("express");
const app = express(); //Express app ka object bana rahe hain

app.use(express.json());


// Route ko import kar rahe hain
const product = require("./routes/productRoute");

// Route ko use kar rahe hain
app.use("/api/v1", product);

module.exports = app // Is file se app ko export kar rahe hain taki dusri files me use ho sake
