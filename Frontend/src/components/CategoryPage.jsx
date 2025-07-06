
import { useEffect, useState } from 'react'

const CategoryPage = ({ category, addToCart }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const staticData = {
      Electronics: [
        {
          _id: '1',
          name: 'Wired Headphones',
          price: 799,
          images: [
            'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5761/5761208_rd.jpg'
          ]
        },
        {
          _id: '2',
          name: 'Smartphone',
          price: 15999,
          images: [
            'https://cdn.pixabay.com/photo/2014/09/23/17/24/smartphone-458838_960_720.jpg'
          ]
        }
      ],
      Male: [
        {
          _id: '3',
          name: 'Men T-Shirt',
          price: 499,
          images: [
            'https://cdn.pixabay.com/photo/2016/03/27/22/16/t-shirt-1281840_960_720.jpg'
          ]
        },
        {
          _id: '4',
          name: 'Formal Shoes',
          price: 1200,
          images: [
            'https://cdn.pixabay.com/photo/2016/03/27/21/46/shoes-1281738_960_720.jpg'
          ]
        }
      ],
      Female: [
        {
          _id: '5',
          name: 'Women Dress',
          price: 999,
          images: [
            'https://cdn.pixabay.com/photo/2016/11/19/13/01/fashion-1838766_960_720.jpg'
          ]
        },
        {
          _id: '6',
          name: 'Ladies Handbag',
          price: 749,
          images: [
            'https://cdn.pixabay.com/photo/2015/08/11/21/11/fashion-885849_960_720.jpg'
          ]
        }
      ],
      Grocery: [
        {
          _id: '7',
          name: 'Organic Rice',
          price: 199,
          images: [
            'https://cdn.pixabay.com/photo/2015/03/24/22/25/rice-688410_960_720.jpg'
          ]
        },
        {
          _id: '8',
          name: 'Olive Oil',
          price: 299,
          images: [
            'https://cdn.pixabay.com/photo/2017/01/17/15/38/olive-oil-1986132_960_720.jpg'
          ]
        }
      ]
    }

    // Simulate loading
    setTimeout(() => {
      setProducts(staticData[category] || [])
      setLoading(false)
    }, 500)
  }, [category])

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">{category} Products</h2>
      {loading ? (
        <p>Loading...</p>
      ) : products.length === 0 ? (
        <p>No products found in {category}.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map(product => (
            <div
              key={product._id}
              className="bg-white rounded shadow p-4 flex flex-col"
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="h-40 object-cover mb-2 rounded"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 mb-2">₹{product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-auto bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CategoryPage
