// import { useEffect, useState } from 'react'
// import ProductCard from '../components/ProductCard'
// import axios from 'axios'

// const Home = ({ addToCart }) => {
//   const [products, setProducts] = useState([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const { data } = await axios.get('https://fakestoreapi.com/products?limit=4')
//         setProducts(data)
//         setLoading(false)
//       } catch (error) {
//         console.error('Error fetching products:', error)
//         setLoading(false)
//       }
//     }
//     fetchProducts()
//   }, [])

//   if (loading) {
//     return <div className="flex justify-center items-center h-64">
//       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//     </div>
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <section className="mb-12">
//         <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg shadow-lg">
//           <h1 className="text-4xl font-bold mb-4">Welcome to Loot Bazar</h1>
//           <p className="text-xl mb-6">Discover amazing products at unbeatable prices</p>
//           <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
//             Shop Now
//           </button>
//         </div>
//       </section>

//       <section className="mb-12">
//         <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {products.map(product => (
//             <ProductCard 
//               key={product.id} 
//               product={product} 
//               addToCart={addToCart} 
//             />
//           ))}
//         </div>
//       </section>

//       <section className="mb-12">
//         <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold mb-3">Free Shipping</h3>
//             <p className="text-gray-600">On all orders over $50</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold mb-3">Easy Returns</h3>
//             <p className="text-gray-600">30-day return policy</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
//             <p className="text-gray-600">Dedicated customer support</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Home



import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import axios from 'axios'

const Home = ({ addToCart }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('https://fakestoreapi.com/products?limit=4')
        setProducts(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching products:', error)
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4">Welcome to Loot Bazar</h1>

            <h5 className=" font-bold mb-2">Discover amazing products at unbeatable prices</h5>
             <h5 className=" font-bold mb-4">The bazar where savings begin!</h5>
            
        
          
          <button
            onClick={() => navigate('/products')}
            className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={addToCart} 
            />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Free Shipping</h3>
            <p className="text-gray-600">On all orders over $50</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Easy Returns</h3>
            <p className="text-gray-600">30-day return policy</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
            <p className="text-gray-600">Dedicated customer support</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
