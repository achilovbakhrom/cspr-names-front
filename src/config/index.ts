import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createPinia } from 'pinia'
import axios from 'axios'

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = token
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export { pinia }
