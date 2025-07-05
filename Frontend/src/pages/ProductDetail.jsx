import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Rating from '../components/Rating'
import axios from 'axios'

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProduct(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching product:', error)
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  if (loading) {
    return <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  }

  if (!product) {
    return <div className="container mx-auto px-4 py-8 text-center">Product not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-96 object-contain"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <div className="flex items-center mb-4">
            <Rating value={product.rating.rate} />
            <span className="text-gray-600 ml-2">
              {product.rating.rate} ({product.rating.count} reviews)
            </span>
          </div>
          <p className="text-2xl font-bold text-blue-600 mb-4">${product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          <div className="flex items-center mb-6">
            <span className="mr-4">Quantity:</span>
            <button 
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              className="bg-gray-200 px-3 py-1 rounded-l"
            >
              -
            </button>
            <span className="bg-gray-100 px-4 py-1">{quantity}</span>
            <button 
              onClick={() => setQuantity(q => q + 1)}
              className="bg-gray-200 px-3 py-1 rounded-r"
            >
              +
            </button>
          </div>
          
          <button 
            onClick={() => {
              const productToAdd = {...product, quantity}
              addToCart(productToAdd)
            }}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors mr-4"
          >
            Add to Cart
          </button>
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail