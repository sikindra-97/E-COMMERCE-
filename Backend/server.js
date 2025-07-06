// const express = require('express')
// const cors = require('cors')
// const dotenv = require('dotenv')
// const connectDB = require('./config/db')

// // Load environment variables
// dotenv.config()

// // Connect to MongoDB
// connectDB()

// const app = express()

// // Middleware
// app.use(cors())
// app.use(express.json())

// // Routes
// app.get('/', (req, res) => res.send('API Running'))
// app.use('/api/auth', require('./routes/authRoutes'))
// app.use('/api/payment', require('./routes/payment')) // ✅ Payment route added

// // Start Server
// const PORT = process.env.PORT || 3000
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))



const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const authRoutes = require('./routes/authRoutes');
const paymentRoutes = require('./routes/payment');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/payment', paymentRoutes);

app.get('/', (req, res) => res.send('API Running'));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});