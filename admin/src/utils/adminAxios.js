import axios from 'axios'

// Base URL (change according to env)
const adminAxios = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL, // or process.env.NEXT_PUBLIC_API_URL
  headers: {
    'Content-Type': 'application/json',
  },
})

// ✅ Request Interceptor → attach JWT token
adminAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken') // JWT token

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// ❌ Optional: Response Interceptor (handle token expiry / logout)
adminAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log('Token expired or unauthorized')
      localStorage.removeItem('accessToken')
      window.location.href = '/admin/login'
    }
    return Promise.reject(error)
  },
)

export default adminAxios
