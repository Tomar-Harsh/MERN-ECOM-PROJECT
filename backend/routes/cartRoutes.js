const express = require('express');
const Cart = require('../models/Cart');
const Product = require('../models/productModel');
const auth = require('../middleware/auth');
const router = express.Router();

// All routes protected
router.use(auth);

// Get current user's cart
router.get('/', async (req, res) => {
  try {
    let cart = await Cart.findOne({ userId: req.user.id }).populate('items.product');
    if (!cart) cart = await Cart.create({ userId: req.user.id, items: [] });
    res.json({ success: true, cart });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
});

// Add product to cart
router.post('/add', async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    let cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) cart = await Cart.create({ userId: req.user.id, items: [] });
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
    const itemIndex = cart.items.findIndex(item => item.product.equals(productId));
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity || 1;
    } else {
      cart.items.push({ product: productId, quantity: quantity || 1 });
    }
    await cart.save();
    res.json({ success: true, cart });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
});

// Remove product from cart
router.delete('/remove/:productId', async (req, res) => {
  try {
    let cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) return res.status(404).json({ success: false, message: 'Cart not found' });
    cart.items = cart.items.filter(item => !item.product.equals(req.params.productId));
    await cart.save();
    res.json({ success: true, cart });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
});

// Update quantity
router.patch('/update', async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    console.log(req.user.id,"user id",req.body.productId);
    let cart = await Cart.findOne({ userId: req.user.id  });
    if (!cart) return res.status(404).json({ success: false, message: 'Cart not found' });
    const item = cart.items.find(item => item.product.equals(productId));
    if (!item) return res.status(404).json({ success: false, message: 'Product not in cart' });
    item.quantity = quantity;
    await cart.save();
    res.json({ success: true, cart });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
});

module.exports = router; 