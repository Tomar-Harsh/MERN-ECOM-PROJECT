// Express module ko import kar rahe hain
const express = require("express");

const { getAllProducts, createProduct } = require("../controllers/productController");
const auth = require("../middleware/auth");

// Router ka object bana rahe hain
const router = express.Router();

// All product routes protected
router.use(auth);


// Route ko define kar rahe hain taki dusri files me use ho sake
router.route("/products").get(getAllProducts);


router.route("/products/new").post(createProduct);

// Router ko export kar rahe hain taki dusri files me use ho sake
module.exports = router;