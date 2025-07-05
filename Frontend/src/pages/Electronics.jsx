import ProductCard from '../components/ProductCard'

const Electronics = ({ addToCart }) => {
  const products = [
    {
      _id: '1',
      name: 'Wired Headphones',
      price: 799,
      images: [
        'https://tse4.mm.bing.net/th/id/OIP.TjkB1C1YWb9m5I6eLQW6lQHaH2?pid=Api&P=0&h=180'
      ],
      rating: { rate: 4.2, count: 85 }
    },
    {
      _id: '2',
      name: 'Smartphone',
      price: 15999,
      images: [
        'https://tse4.mm.bing.net/th/id/OIP.2okfUiCk7jr6XJLuZW90HwHaHa?pid=Api&P=0&h=180'
      ],
      rating: { rate: 4.6, count: 230 }
    },
    {
      _id: '3',
      name: 'Bluetooth Speaker',
      price: 1299,
      images: [
        'https://in.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw4b7e6f14/JBL_GO_4_3_4_LEFT_BLUE_48173_x1.png?sw=535&sh=535'
      ],
      rating: { rate: 4.3, count: 95 }
    },
    {
      _id: '4',
      name: 'Smart Watch',
      price: 1999,
      images: [
        'https://cdn.mos.cms.futurecdn.net/v2/t:0,l:0,cw:2000,ch:1125,q:80,w:2000/FkGweMeB7hdPgaSFQdgsfj.jpg'
      ],
      rating: { rate: 4.0, count: 140 }
    },{
  _id: '5',
  name: 'Wireless Earbuds',
  price: 2499,
  images: [
    'https://www.boat-lifestyle.com/cdn/shop/files/ACCG6DS7WDJHGWSH_0.png?v=1727669669'
  ],
  rating: { rate: 4.5, count: 180 }
},
{
  _id: '6',
  name: 'Laptop (14" i5, 8GB RAM)',
  price: 45999,
  images: [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZqQJRLgY5_ld2Uzk6zH7yQ-9wJiQpMTSQbA&s'
  ],
  rating: { rate: 4.6, count: 210 }
},
{
  _id: '7',
  name: 'Tablet (10.1" Android)',
  price: 8999,
  images: [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdwXHFBNYZTrTzJdWtVKYPiVjBqZO1ML4jqw&s'
  ],
  rating: { rate: 4.2, count: 130 }
},
{
  _id: '8',
  name: 'Power Bank 20000mAh',
  price: 1399,
  images: [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfv1-HcDMP0zhAMUWqOTSO-1t66vFKvNZ2-g&s'
  ],
  rating: { rate: 4.4, count: 160 }
}

  ]

  return (
    <div className="bg-gradient-to-b from-white via-gray-100 to-white min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-2">Electronics Collection</h2>
        <p className="text-center text-gray-600 mb-10 text-lg">
          Discover the latest and most trusted electronic gadgets at unbeatable prices.
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

export default Electronics
