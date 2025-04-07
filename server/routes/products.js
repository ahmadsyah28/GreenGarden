const express = require('express');
const router = express.Router();

// @desc    Get all products
// @route   GET /api/products
// @access  Public
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Fungsi ini akan menampilkan semua produk'
  });
});

module.exports = router;