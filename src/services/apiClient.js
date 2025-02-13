import axios from 'axios'

const apiClient = axios.create({
  //baseURL: 'https://api.recordbox.org/api/v1',
  baseURL: 'http://192.168.0.15:8080/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

apiClient.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem('authToken')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default apiClient
