// Express module ko import kar rahe hain
const express = require("express");

const { getAllProducts } = require("../controllers/productController");

// Router ka object bana rahe hain
const router = express.Router();



// Route ko define kar rahe hain taki dusri files me use ho sake
router.route("/products").get(getAllProducts);

// Router ko export kar rahe hain taki dusri files me use ho sake
module.exports = router;