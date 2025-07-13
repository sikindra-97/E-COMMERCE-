const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db"); 
const chatbotRoutes = require("./routes/chatbot");
const authRoutes = require("./routes/authRoutes");
const payment= require('./routes/payment'); 
const app = express();
const PORT = process.env.PORT || 5000;
connectDB(); 
app.use(cors());
app.use(express.json());

app.use("/api/chatbot", chatbotRoutes);
app.use("/api/auth", authRoutes); 
app.use('/api/payment', payment);
app.get("/", (req, res) => {
  res.send("Chatbot API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
