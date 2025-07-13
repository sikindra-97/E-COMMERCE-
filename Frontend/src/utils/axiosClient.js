import axios from 'axios'
const axiosClient = axios.create({
 baseURL:'https://e-commerce-50h1.onrender.com/api', 
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosClient
