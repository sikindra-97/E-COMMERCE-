
import { Link } from 'react-router-dom'
import Rating from './Rating' // Optional, based on availability

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <Link to={`/products/${product._id || product.id}`}>
        <img
          src={product.images?.[0] || product.image}
          alt={product.name || product.title}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <Link to={`/products/${product._id || product.id}`}>
          <h3 className="font-semibold text-lg mb-2 hover:text-blue-600">
            {product.name || product.title}
          </h3>
        </Link>

        {product.rating?.rate && (
          <div className="flex items-center mb-2">
            <Rating value={product.rating.rate} />
            <span className="text-gray-600 ml-2">({product.rating.count})</span>
          </div>
        )}

        <div className="flex justify-between items-center mt-auto">
          <span className="font-bold text-lg text-gray-800">₹{product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
