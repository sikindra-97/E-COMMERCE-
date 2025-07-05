// import { Link, useNavigate } from 'react-router-dom'
// import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'
// import { useState } from 'react'

// const Header = ({ cartCount }) => {
//   const token = localStorage.getItem('token')
//   const navigate = useNavigate()
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   const handleLogout = () => {
//     localStorage.removeItem('token')
//     alert('Logged out successfully')
//     navigate('/')
//   }

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen)
//   }

//   return (
//     <header className="bg-gray-800 text-white p-4 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/" className="text-2xl font-bold">Loot Bazar</Link>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex space-x-6">
//           <Link to="/" className="hover:text-yellow-300">Home</Link>
//           <Link to="/electronics" className="hover:text-yellow-300">Electronics</Link>
//           <Link to="/male" className="hover:text-yellow-300">Male</Link>
//           <Link to="/female" className="hover:text-yellow-300">Female</Link>
//           <Link to="/products" className="hover:text-yellow-300">All Products</Link>
//           <Link to="/about" className="hover:text-yellow-300">About</Link>
//           <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
//         </nav>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden flex items-center">
//           <button onClick={toggleMobileMenu}>
//             {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
//           </button>
//         </div>

//         {/* Cart and Auth */}
//         <div className="hidden md:flex items-center space-x-4">
//           <Link to="/cart" className="relative">
//             <FaShoppingCart className="text-xl" />
//             {cartCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-yellow-500 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
//                 {cartCount}
//               </span>
//             )}
//           </Link>
//           {token ? (
//             <button onClick={handleLogout} className="bg-red-500 px-2 py-1 rounded text-sm">Logout</button>
//           ) : (
//             <>
//               <Link to="/login" className="hover:text-yellow-300">Login</Link>
//               <Link to="/register" className="hover:text-yellow-300">Register</Link>
//             </>
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu Links */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden flex flex-col items-start bg-gray-700 px-6 py-4 space-y-3">
//           <Link to="/" className="hover:text-yellow-300" onClick={toggleMobileMenu}>Home</Link>
//           <Link to="/electronics" className="hover:text-yellow-300" onClick={toggleMobileMenu}>Electronics</Link>
//           <Link to="/male" className="hover:text-yellow-300" onClick={toggleMobileMenu}>Male</Link>
//           <Link to="/female" className="hover:text-yellow-300" onClick={toggleMobileMenu}>Female</Link>
//           <Link to="/products" className="hover:text-yellow-300" onClick={toggleMobileMenu}>All Products</Link>
//           <Link to="/about" className="hover:text-yellow-300" onClick={toggleMobileMenu}>About</Link>
//           <Link to="/contact" className="hover:text-yellow-300" onClick={toggleMobileMenu}>Contact</Link>
//           <Link to="/cart" className="hover:text-yellow-300" onClick={toggleMobileMenu}>Cart ({cartCount})</Link>
//           {token ? (
//             <button
//               onClick={() => {
//                 toggleMobileMenu()
//                 handleLogout()
//               }}
//               className="text-left text-red-400"
//             >
//               Logout
//             </button>
//           ) : (
//             <>
//               <Link to="/login" className="hover:text-yellow-300" onClick={toggleMobileMenu}>Login</Link>
//               <Link to="/register" className="hover:text-yellow-300" onClick={toggleMobileMenu}>Register</Link>
//             </>
//           )}
//         </div>
//       )}
//     </header>
//   )
// }

// export default Header



import { Link, useNavigate } from 'react-router-dom'
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

const Header = ({ cartCount }) => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('token')
    alert('Logged out successfully')
    navigate('/')
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Loot Bazar</Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/electronics" className="hover:text-yellow-300">Electronics</Link>
          <Link to="/male" className="hover:text-yellow-300">Male</Link>
          <Link to="/female" className="hover:text-yellow-300">Female</Link>
          <Link to="/products" className="hover:text-yellow-300">All Products</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Cart and Auth */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartCount}
              </span>
            )}
          </Link>
          {token ? (
            <button onClick={handleLogout} className="bg-red-500 px-2 py-1 rounded text-sm">Logout</button>
          ) : (
            <>
              <Link to="/login" className="hover:text-yellow-300">Login</Link>
              <Link to="/register" className="hover:text-yellow-300">Register</Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-start bg-gray-700 px-6 py-4 space-y-3">
          <Link to="/" className="hover:text-yellow-300" onClick={toggleMobileMenu}>Home</Link>
          <Link to="/electronics" className="hover:text-yellow-300" onClick={toggleMobileMenu}>Electronics</Link>
          <Link to="/male" className="hover:text-yellow-300" onClick={toggleMobileMenu}>Male</Link>
          <Link to="/female" className="hover:text-yellow-300" onClick={toggleMobileMenu}>Female</Link>
          <Link to="/products" className="hover:text-yellow-300" onClick={toggleMobileMenu}>All Products</Link>
          <Link to="/about" className="hover:text-yellow-300" onClick={toggleMobileMenu}>About</Link>
          <Link to="/contact" className="hover:text-yellow-300" onClick={toggleMobileMenu}>Contact</Link>
          <Link to="/cart" className="hover:text-yellow-300" onClick={toggleMobileMenu}>Cart ({cartCount})</Link>
          {token ? (
            <button
              onClick={() => {
                toggleMobileMenu()
                handleLogout()
              }}
              className="text-left text-red-400"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="hover:text-yellow-300" onClick={toggleMobileMenu}>Login</Link>
              <Link to="/register" className="hover:text-yellow-300" onClick={toggleMobileMenu}>Register</Link>
            </>
          )}
        </div>
      )}
    </header>
  )
}

export default Header