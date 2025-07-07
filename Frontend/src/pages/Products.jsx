import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import axios from 'axios'

const Products = ({ addToCart, searchText }) => {
  const [apiProducts, setApiProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category')

  // Custom products
  const customRawProducts = [
    {
      _id: '1',
      name: 'Wired Headphones',
      price: 799,
      images: ['https://tse4.mm.bing.net/th/id/OIP.TjkB1C1YWb9m5I6eLQW6lQHaH2?pid=Api&P=0&h=180'],
      rating: { rate: 4.2, count: 85 },
      category: 'electronics',
    },
    {
      _id: '9',
      name: 'Women Dress',
      price: 999,
      images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzeqsaxEBHAJhzed3x7IxEwSYEGD409LC5Kg&s'],
      rating: { rate: 4.6, count: 150 },
      category: 'female',
    },
    {
      _id: '15',
      name: 'Men T-Shirt',
      price: 499,
      images: ['https://tse2.mm.bing.net/th/id/OIP.ryvGFpkU99mutbVUNr16QgHaJ4?pid=Api&P=0&h=180'],
      rating: { rate: 4.3, count: 120 },
      category: 'male',
    },
    // Add more as needed
  ]

  const customProducts = customRawProducts.map((product) => ({
    id: product._id,
    title: product.name,
    price: product.price,
    image: product.images[0],
    rating: product.rating,
    category: product.category,
  }))

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = 'https://fakestoreapi.com/products'
        if (category) {
          url += `/category/${category}`
        }
        const { data } = await axios.get(url)
        const mappedApi = data.map((product) => ({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          rating: product.rating,
          category: product.category,
        }))
        setApiProducts(mappedApi)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching products:', error)
        setLoading(false)
      }
    }
    fetchProducts()
  }, [category])

  // Combine API + custom
  const combinedProducts = [...apiProducts, ...customProducts]

  // Filter by category if present (for custom products)
  const categoryFiltered = category
    ? combinedProducts.filter((p) =>
        p.category?.toLowerCase().includes(category.toLowerCase())
      )
    : combinedProducts

  // Filter by searchText
  const filteredProducts = categoryFiltered.filter((product) =>
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
      <h2 className="text-3xl font-bold mb-6">
        {category
          ? category.charAt(0).toUpperCase() + category.slice(1)
          : 'All Products'}
      </h2>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products match your search.</p>
      )}
    </div>
  )
}

export default Products
