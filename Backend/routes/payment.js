const express = require('express');
const Razorpay = require('razorpay');
const crypto = require('crypto');

const router = express.Router();

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

// POST /api/payment/create-order
router.post('/create-order', async (req, res) => {
  try {
    const { amount } = req.body;

    console.log("Incoming create-order request with body:", req.body);

    if (!amount || isNaN(amount)) {
      return res.status(400).json({
        success: false,
        message: 'Valid amount is required',
      });
    }

    const amountInPaise = Math.round(Number(amount) * 100); 

    if (amountInPaise > 50000000) {
      return res.status(400).json({
        success: false,
        message: 'Amount exceeds ₹5,00,000 limit set by Razorpay',
      });
    }

    const options = {
      amount: amountInPaise,
      currency: 'INR',
      receipt: `receipt_${Date.now()}`, 
    };

    const order = await razorpay.orders.create(options);

    console.log("Razorpay order successfully created:", order);

    res.json({
      success: true,
      order,
    });
  } catch (err) {
    console.error('Error creating Razorpay order:', err);
    res.status(500).json({
      success: false,
      message: 'Unable to create order',
      error: err?.error?.description || err.message || 'Unknown error',
    });
  }
});

// POST /api/payment/verify
router.post('/verify', (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

  console.log("Verifying payment with:", req.body);

  try {
    const signaturePayload = `${razorpay_order_id}|${razorpay_payment_id}`; 
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_SECRET)
      .update(signaturePayload)
      .digest('hex');

    if (expectedSignature === razorpay_signature) {
      console.log("Payment verified successfully");
      res.json({
        success: true,
        message: 'Payment verified successfully',
      });
    } else {
      console.warn("Payment verification failed: Invalid signature");
      res.status(400).json({
        success: false,
        message: 'Invalid signature',
      });
    }
  } catch (error) {
    console.error('Error verifying payment:', error.message);
    res.status(500).json({
      success: false,
      message: 'Verification failed',
      error: error?.message || 'Unknown error',
    });
  }
});

module.exports = router;
