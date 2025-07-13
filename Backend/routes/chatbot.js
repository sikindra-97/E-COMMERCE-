const express = require("express");
const axios = require("axios");
require("dotenv").config();
const router = express.Router();

router.post("/ask", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: `You are a helpful assistant. Reply briefly and clearly. Avoid long paragraphs.\n\nUser: ${message}`,
              },
            ],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const reply =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Gemini didn’t return a reply.";
    res.json({ reply });
  } catch (error) {
    console.error("🔴 Gemini API Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Gemini API call failed." });
  }
});

module.exports = router;
