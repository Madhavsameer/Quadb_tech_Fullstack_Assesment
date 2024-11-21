const express = require('express');
const Product = require('../models/product.js');
const { adminMiddleware } = require('../middleware/authMiddleware');
const { authMiddleware } = require('../middleware/authMiddleware.js');
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new product (Admin Only)
router.post('/', authMiddleware, adminMiddleware, async (req, res) => {
  const { name, price, description, imageUrl, category, stock } = req.body;
  try {
    const newProduct = new Product({ name, price, description, imageUrl, category, stock });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update product (Admin Only)
router.put('/:id',authMiddleware, adminMiddleware, async (req, res) => {
  const { name, price, description, imageUrl, category, stock } = req.body;
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, description, imageUrl, category, stock },
      { new: true }
    );
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete product (Admin Only)
router.delete('/:id',authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
