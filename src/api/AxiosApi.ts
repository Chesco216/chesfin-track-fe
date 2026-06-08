import axios from 'axios'

export const AxiosApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000
})

AxiosApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token)
    config.headers.set("Authorization", `Bearer ${token}`)

  return config
})

