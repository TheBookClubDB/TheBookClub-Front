import axios from 'axios'

const api = axios.create({
  baseURL: 'https://the-book-club-back.onrender.com'
})

export default api;