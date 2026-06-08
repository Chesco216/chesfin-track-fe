import { AxiosApi } from "@/api/AxiosApi";
import type { CreateUserDto } from "../dto/create-user.dto";

export const registerAction = async (user: CreateUserDto) => {
  const api = AxiosApi

  try {
    const res = await api.post('/auth/register', {
      ...user
    })

    const data = res.data

    return data
  } catch (error) {
    throw new Error('error pipipi', error)
  }
}
