require('dotenv').config();
// const express = require('express');
// const app = express();


// App file ko import kar rahe hain
const app = require("./app");

// Dotenv module ko import kar rahe hain, jo environment variables handle karta hai
//const dotenv = require("dotenv");
// Config file ko set kar rahe hain taki environment variables load ho jayein
//dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 4000;
// Server ko start kar rahe hain aur port number console me dikha rahe hain
// const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});