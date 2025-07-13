import ProductCard from '../components/ProductCard'
import productData from '../data/productData.json'

const Female = ({ addToCart, searchText }) => {
  const products = productData.filter(p => p.category === 'female') // ✅ fixed here

  const formattedProducts = products.map((p) => ({
    id: p.id || p._id,
    title: p.name || p.title,
    price: p.price,
    image: p.images ? p.images[0] : p.image,
    rating: p.rating,
  }))

  const filtered = formattedProducts.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <div className="bg-gradient-to-b from-white via-gray-100 to-white min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-pink-600 mb-2">Women's Collection</h2>
        <p className="text-center text-gray-600 mb-10 text-lg">
          Stylish and elegant picks for women.
        </p>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg">No products match your search.</p>
        )}
      </div>
    </div>
  )
}

export default Female
