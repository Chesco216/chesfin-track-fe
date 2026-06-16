import { AxiosApi } from "@/api/AxiosApi"
import { toast } from "sonner"

export const checkAuthstatus = async () => {

  const api = AxiosApi
  const token = localStorage.getItem('token')
  if (!token) return false
  try {
    const res = await api.get('/auth/refresh-token')
    const user = res.data
    return user
  } catch (error) {
    toast('sesion expired')
    throw error
  }
}
