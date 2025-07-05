
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const XIcon = ({ size = 20, className = '' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 4L20 20M20 4L4 20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Loot Bazar</h3>
            <p className="text-gray-400">
              Your one-stop shop for all your needs. Quality products at affordable prices.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/category/Electronics" className="text-gray-400 hover:text-white">Electronics</Link></li>
              <li><Link to="/category/Male" className="text-gray-400 hover:text-white">Male</Link></li>
              <li><Link to="/category/Female" className="text-gray-400 hover:text-white">Female</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white">All Products</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link to="/shipping" className="text-gray-400 hover:text-white">Shipping Policy</Link></li>
              <li><Link to="/returns" className="text-gray-400 hover:text-white">Return Policy</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/satyamjaihind1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>

              <a
                href="https://x.com/SatyamP26019081?t=FFShqJglY4xQnHJDR27oZw&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="X"
              >
                <XIcon size={20} />
              </a>

              <a
                href="https://www.instagram.com/satyamjaihind1?igsh=MXF1MG9oNnMzbG9vZw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/satyam-parashar-ab080732b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Loot Bazar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
