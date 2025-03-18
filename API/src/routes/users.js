const express = require('express');
const pool = require('../db');
const router = express.Router();

// ✅ Get all users
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, username, email FROM users' // ✅ Removed double quotes
    );
    res.json(result.rows);
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ✅ Get a user by ID
router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10); // ✅ Ensure integer parsing

  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  try {
    const result = await pool.query(
      'SELECT id, username, email FROM users WHERE id = $1', // ✅ Avoid selecting all columns
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
