const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-700 mb-4">
          Loot Bazar was founded in 2025 with a simple mission: to provide high-quality products 
          at affordable prices with exceptional customer service. What started as a small 
          online store has grown into a trusted e-commerce platform serving customers worldwide.
        </p>
        <p className="text-gray-700">
          Our team is passionate about curating the best products and ensuring a seamless 
          shopping experience for our customers. We carefully select each item in our catalog 
          to meet our high standards of quality and value.
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-medium mb-2">Quality</h3>
            <p className="text-gray-600">
              We source only the highest quality products and stand behind everything we sell.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Customer Focus</h3>
            <p className="text-gray-600">
              Your satisfaction is our top priority. We're here to help with any questions or concerns.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Integrity</h3>
            <p className="text-gray-600">
              We believe in honest business practices and transparent communication.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
