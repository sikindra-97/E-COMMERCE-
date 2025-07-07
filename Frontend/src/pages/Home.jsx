import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import axios from 'axios'

const Home = ({ addToCart, searchText }) => {
  const [apiProducts, setApiProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const customRawProducts = [
    // ELECTRONICS
    {
      _id: '1',
      name: 'Wired Headphones',
      price: 799,
      images: ['https://tse4.mm.bing.net/th/id/OIP.TjkB1C1YWb9m5I6eLQW6lQHaH2?pid=Api&P=0&h=180'],
      rating: { rate: 4.2, count: 85 },
    },
    {
      _id: '2',
      name: 'Smartphone',
      price: 15999,
      images: ['https://tse4.mm.bing.net/th/id/OIP.2okfUiCk7jr6XJLuZW90HwHaHa?pid=Api&P=0&h=180'],
      rating: { rate: 4.6, count: 230 },
    },
    {
      _id: '3',
      name: 'Bluetooth Speaker',
      price: 1299,
      images: ['https://in.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw4b7e6f14/JBL_GO_4_3_4_LEFT_BLUE_48173_x1.png?sw=535&sh=535'],
      rating: { rate: 4.3, count: 95 },
    },
    {
      _id: '4',
      name: 'Smart Watch',
      price: 1999,
      images: ['https://cdn.mos.cms.futurecdn.net/v2/t:0,l:0,cw:2000,ch:1125,q:80,w:2000/FkGweMeB7hdPgaSFQdgsfj.jpg'],
      rating: { rate: 4.0, count: 140 },
    },
    {
      _id: '5',
      name: 'Wireless Earbuds',
      price: 2499,
      images: ['https://www.boat-lifestyle.com/cdn/shop/files/ACCG6DS7WDJHGWSH_0.png?v=1727669669'],
      rating: { rate: 4.5, count: 180 },
    },
    {
      _id: '6',
      name: 'Laptop (14" i5, 8GB RAM)',
      price: 45999,
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZqQJRLgY5_ld2Uzk6zH7yQ-9wJiQpMTSQbA&s'],
      rating: { rate: 4.6, count: 210 },
    },
    {
      _id: '7',
      name: 'Tablet (10.1" Android)',
      price: 8999,
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdwXHFBNYZTrTzJdWtVKYPiVjBqZO1ML4jqw&s'],
      rating: { rate: 4.2, count: 130 },
    },
    {
      _id: '8',
      name: 'Power Bank 20000mAh',
      price: 1399,
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfv1-HcDMP0zhAMUWqOTSO-1t66vFKvNZ2-g&s'],
      rating: { rate: 4.4, count: 160 },
    },

    // FEMALE
    {
      _id: '9',
      name: 'Women Dress',
      price: 999,
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzeqsaxEBHAJhzed3x7IxEwSYEGD409LC5Kg&s'],
      rating: { rate: 4.6, count: 150 },
    },
    {
      _id: '10',
      name: 'Ladies Handbag',
      price: 749,
      images: ['https://m.media-amazon.com/images/I/71cwDsjwnaL._UY1000_.jpg'],
      rating: { rate: 4.5, count: 130 },
    },
    {
      _id: '11',
      name: 'High Heels',
      price: 1299,
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLbrWgsYewL9PWsezXm7RaRnoEkpWrcmQ2bw&s'],
      rating: { rate: 4.3, count: 90 },
    },
    {
      _id: '12',
      name: 'Sunglasses',
      price: 599,
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3hd2ZxkwWPX7FdIihMZonaNXaSJpuk-X_A&s'],
      rating: { rate: 4.2, count: 80 },
    },
    {
      _id: '13',
      name: 'Scarf',
      price: 399,
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgTQkbkJ2UuRp8AaGxI4pFEZoFXJZo4xACNQ&s'],
      rating: { rate: 4.0, count: 65 },
    },
    {
      _id: '14',
      name: 'Women’s Sandals',
      price: 899,
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFZVmdkCzSoJIswcyIZneElSUPPaBhX8jkpg&s'],
      rating: { rate: 4.1, count: 100 },
    },

    // MALE
    {
      _id: '15',
      name: 'Men T-Shirt',
      price: 499,
      images: ['https://tse2.mm.bing.net/th/id/OIP.ryvGFpkU99mutbVUNr16QgHaJ4?pid=Api&P=0&h=180'],
      rating: { rate: 4.3, count: 120 },
    },
    {
      _id: '16',
      name: 'Formal Shoes',
      price: 1499,
      images: ['https://tse2.mm.bing.net/th/id/OIP.3tPGrEe0uSq44jgy5DuD6AHaHH?pid=Api&P=0&h=180'],
      rating: { rate: 4.5, count: 98 },
    },
    {
      _id: '17',
      name: 'Leather Jacket',
      price: 2999,
      images: ['https://tse1.mm.bing.net/th/id/OIP.I019usArj88hE-CtLgWJuAHaH6?pid=Api&P=0&h=180'],
      rating: { rate: 4.6, count: 85 },
    },
    {
      _id: '18',
      name: 'Wrist Watch',
      price: 999,
      images: ['https://tse1.mm.bing.net/th/id/OIP.9yIzTo0ZZywp9i2dRTIgCwHaHa?pid=Api&P=0&h=180'],
      rating: { rate: 4.1, count: 110 },
    },
    {
      _id: '19',
      name: 'Casual Sneakers',
      price: 1799,
      images: ['https://tse3.mm.bing.net/th/id/OIP.-MFGWbUWjQpeHC61RgGIJgHaHa?pid=Api&P=0&h=180'],
      rating: { rate: 4.4, count: 140 },
    },
    {
      _id: '20',
      name: 'Denim Jeans',
      price: 1199,
      images: ['https://tse2.mm.bing.net/th/id/OIP.ZDNsAvWznF6A21RdSjzmGgHaHa?pid=Api&P=0&h=180'],
      rating: { rate: 4.2, count: 125 },
    },
  ]

  // Convert structure to fit ProductCard component
  const customProducts = customRawProducts.map((product) => ({
    id: product._id,
    title: product.name,
    price: product.price,
    image: product.images[0],
    rating: product.rating,
  }))

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get('https://fakestoreapi.com/products?limit=20')
        setApiProducts(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching products:', error)
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const allProducts = [...apiProducts, ...customProducts]

  const filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(searchText.trim().toLowerCase())
  )

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
          <h5 className="font-bold mb-2">Discover amazing products at unbeatable prices</h5>
          <h5 className="font-bold mb-4">The bazar where savings begin!</h5>
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

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No products match your search.</p>
        )}
      </section>
    </div>
  )
}

export default Home
