import axios from 'axios'

const axiosClient = axios.create({
//   // baseURL: 'http://localhost:3000/api', // Make sure this matches your backend
//  baseURL: 'https://e-commerce-1-z20h.onrender.com',
 baseURL: 'http://localhost:3000/api', 
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosClient
