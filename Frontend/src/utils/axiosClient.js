import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'http://localhost:3000/api', // Make sure this matches your backend
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosClient
