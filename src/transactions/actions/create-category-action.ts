import { AxiosApi } from "@/api/AxiosApi"
import type { CreateCategoryDTO } from "../dto/create-category.dto"

export const createCategoryAction = async (category: CreateCategoryDTO) => {

  const api = AxiosApi

  try {
    const res = await api.post('/category', category)
    const data = res.data

    return data
  } catch (error) {
    throw new Error('couldnt create category', error)
  }

}
