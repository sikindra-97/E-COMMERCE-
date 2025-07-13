
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import productData from '../data/productData.json'

const Products = ({ addToCart, searchText }) => {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category')

  // Format the imported product data
  const allProducts = productData.map((product) => ({
    id: product._id || product.id,
    title: product.name || product.title,
    price: product.price,
    image: product.images?.[0] || product.image,
    rating: product.rating,
    category: product.category,
  }))

  // Filter by category if specified
  const categoryFiltered = category
    ? allProducts.filter((p) =>
        p.category?.toLowerCase().includes(category.toLowerCase())
      )
    : allProducts

  // Filter by searchText
  const filteredProducts = categoryFiltered.filter((product) =>
    product.title?.toLowerCase().includes(searchText.trim().toLowerCase())
  )

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

