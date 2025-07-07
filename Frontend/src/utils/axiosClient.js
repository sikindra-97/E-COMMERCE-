import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'https://e-commerce-1-z20h.onrender.com' // Make sure this matches your backend
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosClient
