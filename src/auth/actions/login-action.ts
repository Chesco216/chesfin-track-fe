import { AxiosApi } from "@/api/AxiosApi";
import type { LoginUserDto } from "../dto/login-user.dto";
import { toast } from "sonner";

export const loginAction = async (user: LoginUserDto) => {
  const api = AxiosApi
  try {
    const res = await api.post('/auth/login', {
      ...user
    })

    const data = res.data

    return data
  } catch (error) {

    const data = error.response

    if (data.status == 404) {
      toast.error('email not found', {
        position: 'top-center',
        style: {
          fontSize: 15
        }
      })
      throw new Error('email not found', data.message)
    }

    if (data.status == 401) {
      toast.error('invalid password', {
        position: 'top-center',
        style: {
          fontSize: 15
        }
      })
      throw new Error('invalid password', data.message)
    }
  }
}
