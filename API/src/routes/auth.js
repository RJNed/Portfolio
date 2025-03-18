const express = require('express');
const pool = require('../db');

const router = express.Router();

// Sign up (Register a new user)
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username?.trim() || !email?.trim() || !password?.trim()) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // ✅ Check if user exists by username or email
    const existingUser = await pool.query(
      'SELECT id FROM users WHERE username = $1 OR email = $2', 
      [username, email]
    );

    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: 'Username or email already exists' });
    }

    console.warn('⚠️ Warning: Storing passwords in plaintext. Consider hashing before production.');

    // ✅ Insert user into database without encryption
    const newUser = await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email',
      [username.trim(), email.trim(), password.trim()]
    );

    res.status(201).json({ message: 'User created successfully', user: newUser.rows[0] });
  } catch (err) {
    console.error('❌ Database error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Sign in (Login)
router.post('/signin', async (req, res) => {
  const { username, password } = req.body;

  if (!username?.trim() || !password?.trim()) {
    return res.status(400).json({ error: 'Please provide both username and password' });
  }

  try {
    // ✅ Get user by username, but only fetch password
    const result = await pool.query(
      'SELECT id, password FROM users WHERE username = $1', 
      [username]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    const user = result.rows[0];

    // ✅ Direct password comparison (kept plaintext as requested)
    if (password.trim() !== user.password.trim()) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    res.json({ message: 'Login successful', user: { id: user.id, username: user.username, email: user.email } });
  } catch (err) {
    console.error('❌ Database error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
