import ProductCard from '../components/ProductCard'

const Male = ({ addToCart, searchText }) => {
  const products = [
    {
      _id: '1',
      name: 'Men T-Shirt',
      price: 499,
      images: ['https://tse2.mm.bing.net/th/id/OIP.ryvGFpkU99mutbVUNr16QgHaJ4?pid=Api&P=0&h=180'],
      rating: { rate: 4.3, count: 120 },
    },
    {
      _id: '2',
      name: 'Formal Shoes',
      price: 1499,
      images: ['https://tse2.mm.bing.net/th/id/OIP.3tPGrEe0uSq44jgy5DuD6AHaHH?pid=Api&P=0&h=180'],
      rating: { rate: 4.5, count: 98 },
    },
    {
      _id: '3',
      name: 'Leather Jacket',
      price: 2999,
      images: ['https://tse1.mm.bing.net/th/id/OIP.I019usArj88hE-CtLgWJuAHaH6?pid=Api&P=0&h=180'],
      rating: { rate: 4.6, count: 85 },
    },
    {
      _id: '4',
      name: 'Wrist Watch',
      price: 999,
      images: ['https://tse1.mm.bing.net/th/id/OIP.9yIzTo0ZZywp9i2dRTIgCwHaHa?pid=Api&P=0&h=180'],
      rating: { rate: 4.1, count: 110 },
    },
    {
      _id: '5',
      name: 'Casual Sneakers',
      price: 1799,
      images: ['https://tse3.mm.bing.net/th/id/OIP.-MFGWbUWjQpeHC61RgGIJgHaHa?pid=Api&P=0&h=180'],
      rating: { rate: 4.4, count: 140 },
    },
    {
      _id: '6',
      name: 'Denim Jeans',
      price: 1199,
      images: ['https://tse2.mm.bing.net/th/id/OIP.ZDNsAvWznF6A21RdSjzmGgHaHa?pid=Api&P=0&h=180'],
      rating: { rate: 4.2, count: 125 },
    },
  ]

  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <div className="bg-gradient-to-b from-white via-gray-100 to-white min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-2">Men's Collection</h2>
        <p className="text-center text-gray-600 mb-10 text-lg">
          Trendy and comfortable fashion essentials for men.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {filtered.map(product => (
            <ProductCard key={product._id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Male
