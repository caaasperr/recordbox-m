import apiClient from './apiClient'

const apiService = {
  //Authentification
  async login(credentials) {
    try {
      const response = await apiClient.post('/auth/login', credentials)
      if (response.status === 200) {
        const token = response.data.session_id
        window.localStorage.setItem('authToken', token) // Use 'window.localStorage' instead of 'localStorage'
        return true
      }
    } catch (error) {
      return false
    }
  },
  async getVinyls() {
    return await apiClient.get('/vinyls')
  },
}

export default apiService
