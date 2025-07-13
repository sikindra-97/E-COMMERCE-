import ProductCard from '../components/ProductCard'
import productData from '../data/productData.json'

const Electronics = ({ addToCart, searchText }) => {
  const products = productData.filter(p => p.category === 'electronics')

  const filtered = products.filter(product =>
  product.title?.toLowerCase().includes(searchText.trim().toLowerCase())
)
  return (
    <div className="bg-gradient-to-b from-white via-gray-100 to-white min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-2">Electronics Collection</h2>
        <p className="text-center text-gray-600 mb-10 text-lg">
          Discover the latest and most trusted electronic gadgets at unbeatable prices.
        </p>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {filtered.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg">No products match your search.</p>
        )}
      </div>
    </div>
  )
}

export default Electronics
