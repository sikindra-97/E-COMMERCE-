import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })
}

const Checkout = ({ cart, clearCart }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    paymentMethod: 'cod'
  })
  const [orderPlaced, setOrderPlaced] = useState(false)

  // Prices are already in INR, so no conversion needed
  const totalPriceINR = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.paymentMethod === 'cod') {
      console.log('Order (COD):', { ...formData, cart, total: totalPriceINR })
      setOrderPlaced(true)
      clearCart()
    } else {
      const isLoaded = await loadRazorpayScript()
      if (!isLoaded) {
        alert('Failed to load Razorpay SDK')
        return
      }

      try {
        // Razorpay expects amount in paise (1 INR = 100 paise)
        const res = await axios.post('http://localhost:5000/api/payment/create-order', {
      amount: totalPriceINR  // sending plain INR (e.g., 22.30)
        })

        const { order } = res.data

        const options = {
          key: 'rzp_test_GMbeEh3dp8jpLE',
          amount: order.amount,
          currency: 'INR',
          name: 'Loot BAzar',
          description: 'Ecommerce Transaction',
          order_id: order.id,
          handler: async function (response) {
            const verifyRes = await axios.post('http://localhost:3000/api/payment/verify', {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature
            })

            if (verifyRes.data.success) {
              alert('✅ Payment successful and verified')
              setOrderPlaced(true)
              clearCart()
            } else {
              alert('❌ Payment verification failed')
            }
          },
          prefill: {
            name: formData.name,
            email: formData.email,
            contact: '9999999999'
          },
          theme: { color: '#1e40af' }
        }

        const rzp = new window.Razorpay(options)
        rzp.open()
      } catch (err) {
        alert('Something went wrong')
        console.error(err)
      }
    }
  }

  if (cart.length === 0 && !orderPlaced) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <button onClick={() => navigate('/products')} className="bg-blue-600 text-white px-6 py-2 rounded-lg">Continue Shopping</button>
      </div>
    )
  }

  if (orderPlaced) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4 text-green-700">Order placed successfully!</h1>
        <button onClick={() => navigate('/')} className="bg-blue-600 text-white px-6 py-2 rounded-lg">Back to Home</button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Shipping Info</h2>

            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="w-full mb-3 border px-4 py-2 rounded" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full mb-3 border px-4 py-2 rounded" required />
            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="w-full mb-3 border px-4 py-2 rounded" required />
            <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" className="w-full mb-3 border px-4 py-2 rounded" required />
            <input type="text" name="zip" value={formData.zip} onChange={handleChange} placeholder="ZIP Code" className="w-full mb-3 border px-4 py-2 rounded" required />

            <h2 className="text-xl font-bold mt-6 mb-2">Payment Method</h2>
            <label className="block mb-2">
              <input type="radio" name="paymentMethod" value="cod" checked={formData.paymentMethod === 'cod'} onChange={handleChange} className="mr-2" />
              Cash on Delivery
            </label>
            <label className="block mb-6">
              <input type="radio" name="paymentMethod" value="card" checked={formData.paymentMethod === 'card'} onChange={handleChange} className="mr-2" />
              Pay Online (Card / UPI)
            </label>
            <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg">Place Order</button>
          </form>
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            {cart.map(item => (
              <div key={item.id} className="flex justify-between mb-2">
                <span>{item.title} x {item.quantity}</span>
                <span>₹{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <hr className="my-4" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>₹{totalPriceINR.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout