require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pool = require('./src/db'); // PostgreSQL connection
const authRoutes = require('./src/routes/auth');
const userRoutes = require('./src/routes/users');

const app = express();
const port = process.env.PORT || 4000;

// ✅ Check Database Connection (Without pool.connect())
pool.query('SELECT 1') 
  .then(() => console.log("✅ Database connected successfully"))
  .catch(err => {
    console.error("❌ Database connection error:", err);
    process.exit(1);
  });

// ✅ Middleware
app.use(express.json());

// ✅ Improved CORS Setup (Handles Multiple Origins)
const allowedOrigins = [
  'http://localhost:3000',  // Local frontend
  'http://127.0.0.1:3000',  // Alternative local frontend
  process.env.FRONTEND_URL  // Deployment frontend (set in .env)
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// ✅ API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// ✅ Health Check Route (Useful for debugging)
app.get('/api/health', (req, res) => {
  res.json({ message: 'API is running!', status: 'healthy' });
});

// ✅ Handle 404 for Undefined Routes
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
  next(); // ✅ Ensures the request cycle is complete
});

// ✅ Global Error Handler (Better debugging)
app.use((err, req, res, next) => {
  console.error('❌ Server Error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
  next(); // ✅ Ensures middleware flow continues properly
});

// ✅ Start the Server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
