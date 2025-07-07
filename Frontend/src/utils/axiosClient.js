import axios from 'axios'

const axiosClient = axios.create({
<<<<<<< HEAD
//   // baseURL: 'http://localhost:3000/api', // Make sure this matches your backend
//  baseURL: 'https://e-commerce-1-z20h.onrender.com',
 baseURL: 'http://localhost:3000/api', 
=======
  baseURL: 'https://e-commerce-1-z20h.onrender.com', // Make sure this matches your backend
>>>>>>> 50dd8792cf37ba4db1331c180642eabbd39fb012
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosClient
