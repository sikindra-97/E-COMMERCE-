

// import { useState, useEffect } from 'react'
// import { Routes, Route } from 'react-router-dom'

// import Header from './components/Header'
// import Footer from './components/Footer'
// import Spinner from './components/Spinner'
// import PrivateRoute from './components/PrivateRoute'
// import FAQ from './pages/FAQ'
// import ShippingPolicy from './pages/ShippingPolicy'
// import ReturnPolicy from './pages/ReturnPolicy'
// import PrivacyPolicy from './pages/PrivacyPolicy'

// import Home from './pages/Home'
// import Products from './pages/Products'
// import ProductDetail from './pages/ProductDetail'
// import CartPage from './pages/CartPage'
// import Checkout from './pages/Checkout'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Login from './pages/Login'
// import Register from './pages/Register'
// import CategoryPage from './pages/CategoryPage' 
// import Electronics from './pages/Electronics'
// import Male from './pages/Male'
// import Female from './pages/Female'

// function App() {
//   const [loading, setLoading] = useState(true)
//   const [cart, setCart] = useState([])

//   useEffect(() => {
//     const savedCart = localStorage.getItem('cart')
//     if (savedCart) {
//       setCart(JSON.parse(savedCart))
//     }
//     setTimeout(() => setLoading(false), 1000)
//   }, [])

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart))
//   }, [cart])

//   const addToCart = (product) => {
//     const existingItem = cart.find(item => item.id === product.id)
//     if (existingItem) {
//       setCart(cart.map(item =>
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       ))
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }])
//     }
//   }

//   const removeFromCart = (productId) => {
//     setCart(cart.filter(item => item.id !== productId))
//   }

//   const updateQuantity = (productId, newQuantity) => {
//     if (newQuantity < 1) return
//     setCart(cart.map(item =>
//       item.id === productId ? { ...item, quantity: newQuantity } : item
//     ))
//   }

//   const clearCart = () => {
//     setCart([])
//   }

//   if (loading) {
//     return <Spinner />
//   }

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header cartCount={cart.reduce((total, item) => total + item.quantity, 0)} />
//       <main className="flex-grow">
//         <Routes>

//           {/* Public Routes */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />

//           {/* Protected Routes */}
//           <Route path="/" element={<PrivateRoute><Home addToCart={addToCart} /></PrivateRoute>} />
//           <Route path="/products" element={<PrivateRoute><Products addToCart={addToCart} /></PrivateRoute>} />
//           <Route path="/products/:id" element={<PrivateRoute><ProductDetail addToCart={addToCart} /></PrivateRoute>} />
//           <Route path="/cart" element={
//             <PrivateRoute>
//               <CartPage
//                 cart={cart}
//                 removeFromCart={removeFromCart}
//                 updateQuantity={updateQuantity}
//               />
//             </PrivateRoute>
//           } />
//           <Route path="/checkout" element={
//             <PrivateRoute>
//               <Checkout
//                 cart={cart}
//                 clearCart={clearCart}
//               />
//             </PrivateRoute>
//           } />
//           <Route path="/faq" element={<PrivateRoute><FAQ /></PrivateRoute>} />
//           <Route path="/shipping" element={<PrivateRoute><ShippingPolicy /></PrivateRoute>} />
//          <Route path="/returns" element={<PrivateRoute><ReturnPolicy /></PrivateRoute>} />
//           <Route path="/privacy" element={<PrivateRoute><PrivacyPolicy /></PrivateRoute>} />

//           <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
//           <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
//           <Route path="/electronics" element={<PrivateRoute><Electronics addToCart={addToCart} /></PrivateRoute>} />
//          <Route path="/male" element={<PrivateRoute><Male addToCart={addToCart} /></PrivateRoute>} />
//          <Route path="/female" element={<PrivateRoute><Female addToCart={addToCart} /></PrivateRoute>} />
     

//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   )
// }

// export default App




import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Spinner from './components/Spinner'
import PrivateRoute from './components/PrivateRoute'

import FAQ from './pages/FAQ'
import ShippingPolicy from './pages/ShippingPolicy'
import ReturnPolicy from './pages/ReturnPolicy'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import CartPage from './pages/CartPage'
import Checkout from './pages/Checkout'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import CategoryPage from './pages/CategoryPage'
import Electronics from './pages/Electronics'
import Male from './pages/Male'
import Female from './pages/Female'

function App() {
  const [loading, setLoading] = useState(true)
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart')
    return saved ? JSON.parse(saved) : []
  })

  // Save cart to localStorage on every change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  // Show loading spinner
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id)
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      } else {
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setCart([])
  }

  if (loading) return <Spinner />

  return (
    <div className="flex flex-col min-h-screen">
      <Header cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />

      <main className="flex-grow">
        <Routes>

          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home addToCart={addToCart} />
              </PrivateRoute>
            }
          />
          <Route
            path="/products"
            element={
              <PrivateRoute>
                <Products addToCart={addToCart} />
              </PrivateRoute>
            }
          />
          <Route
            path="/products/:id"
            element={
              <PrivateRoute>
                <ProductDetail addToCart={addToCart} />
              </PrivateRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <CartPage
                  cart={cart}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                />
              </PrivateRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout cart={cart} clearCart={clearCart} />
              </PrivateRoute>
            }
          />
          <Route path="/faq" element={<PrivateRoute><FAQ /></PrivateRoute>} />
          <Route path="/shipping" element={<PrivateRoute><ShippingPolicy /></PrivateRoute>} />
          <Route path="/returns" element={<PrivateRoute><ReturnPolicy /></PrivateRoute>} />
          <Route path="/privacy" element={<PrivateRoute><PrivacyPolicy /></PrivateRoute>} />
          <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
          <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
          <Route path="/electronics" element={<PrivateRoute><Electronics addToCart={addToCart} /></PrivateRoute>} />
          <Route path="/male" element={<PrivateRoute><Male addToCart={addToCart} /></PrivateRoute>} />
          <Route path="/female" element={<PrivateRoute><Female addToCart={addToCart} /></PrivateRoute>} />

        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
