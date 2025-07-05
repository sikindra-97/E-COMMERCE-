import ProductCard from '../components/ProductCard'

const Female = ({ addToCart }) => {
  const products = [
    {
      _id: '1',
      name: 'Women Dress',
      price: 999,
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzeqsaxEBHAJhzed3x7IxEwSYEGD409LC5Kg&s'
      ],
      rating: { rate: 4.6, count: 150 }
    },
    {
      _id: '2',
      name: 'Ladies Handbag',
      price: 749,
      images: [
        'https://m.media-amazon.com/images/I/71cwDsjwnaL._UY1000_.jpg'
      ],
      rating: { rate: 4.5, count: 130 }
    },
    {
      _id: '3',
      name: 'High Heels',
      price: 1299,
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLbrWgsYewL9PWsezXm7RaRnoEkpWrcmQ2bw&s'
      ],
      rating: { rate: 4.3, count: 90 }
    },
    {
      _id: '4',
      name: 'Sunglasses',
      price: 599,
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3hd2ZxkwWPX7FdIihMZonaNXaSJpuk-X_A&s'
      ],
      rating: { rate: 4.2, count: 80 }
    },
    {
      _id: '5',
      name: 'Scarf',
      price: 399,
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgTQkbkJ2UuRp8AaGxI4pFEZoFXJZo4xACNQ&s'
      ],
      rating: { rate: 4.0, count: 65 }
    },
    {
      _id: '6',
      name: 'Women’s Sandals',
      price: 899,
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFZVmdkCzSoJIswcyIZneElSUPPaBhX8jkpg&s'
      ],
      rating: { rate: 4.1, count: 100 }
    }
  ]

  return (
    <div className="bg-gradient-to-b from-white via-gray-100 to-white min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-pink-600 mb-2">Women's Collection</h2>
        <p className="text-center text-gray-600 mb-10 text-lg">
          Stylish picks for every modern woman.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Female
