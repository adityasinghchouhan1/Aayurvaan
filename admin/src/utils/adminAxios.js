import axios from 'axios'

const adminAxios = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  // ❌ DO NOT set Content-Type globally
})

// ✅ Attach JWT automatically
adminAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    // 🔥 Let browser decide Content-Type
    return config
  },
  (error) => Promise.reject(error),
)

// ✅ Handle token expiry
adminAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('accessToken')
      window.location.href = '/'
    }
    return Promise.reject(error)
  },
)

export default adminAxios
