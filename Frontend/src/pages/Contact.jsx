
import { useState, useEffect, useRef } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const mapRef = useRef(null)

  useEffect(() => {
    if (!mapRef.current) return

    // Initialize map only once
    const map = L.map(mapRef.current).setView([30.686661,76.661666], 15)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)

    L.marker([30.686661,76.661666])
      .addTo(map)
      .bindPopup('Esshan Heights, RKM City, Landran, Mohali')
      .openPopup()

    // Clean up on unmount
    return () => {
      map.remove()
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            {/* Form fields */}
            {/* ... Your existing form inputs ... */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            {/* Repeat for email, subject, message */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info and Map */}
        <div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-blue-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-gray-600">
                    Esshan Heights, RKM City,
                    <br />
                    Landran, Mohali, 140307
                    <br />
                    Sector-112
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <FaPhone className="text-blue-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-600">6200471516</p>
                  <p className="text-gray-600">+91 6394874785</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaEnvelope className="text-blue-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">satyampr76@gmail.com</p>
                  <p className="text-gray-600">sprashar744@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaClock className="text-blue-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-medium">Business Hours</h3>
                  <p className="text-gray-600">Monday - Sunday: 24 × 7 Open</p>
                </div>
              </div>
            </div>
          </div>

          {/* Replace Static Map Image with Leaflet Map */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Find Us On Map</h2>
            <div
              ref={mapRef}
              style={{ height: '300px', width: '100%' }}
              className="rounded-lg overflow-hidden"
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
