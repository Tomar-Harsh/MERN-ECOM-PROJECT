const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
    default: 1
  }
});

const cartSchema = new mongoose.Schema({
  userId: {
    type: String, // Reference to hardcoded user id
    required: true,
    unique: true // One cart per user
  },
  items: [cartItemSchema]
});

module.exports = mongoose.model('Cart', cartSchema); 