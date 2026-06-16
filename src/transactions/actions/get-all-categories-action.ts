import { AxiosApi } from "@/api/AxiosApi"

export interface CategoryResponse {
  id: string
  name: string
  icon: number
  color: number
  createdAt: string
}

export const getAllCategoriesAction = async (): Promise<CategoryResponse[] | []> => {
  const api = AxiosApi
  try {
    const res = await api.get('/category')
    const data = res.data

    return data
  } catch (error) {

    throw new Error('an error occurred', error)
  }
}
