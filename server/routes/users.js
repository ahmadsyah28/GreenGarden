const express = require('express');
const router = express.Router();

// @desc    Get all users
// @route   GET /api/users
// @access  Private/Admin
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Fungsi ini akan menampilkan semua pengguna'
  });
});

module.exports = router;