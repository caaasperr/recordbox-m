import apiClient from './apiClient'

const apiService = {
  //Authentification
  async login(credentials) {
    try {
      await apiClient.post('/auth/login', credentials)
      if (response.status === 200) {
        const { token } = response.data['session_id']
        console.log(token)
        localStorage.setItem('authToken', token)
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
