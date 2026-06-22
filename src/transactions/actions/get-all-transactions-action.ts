import { AxiosApi } from "@/api/AxiosApi"

export const getAllTransactionsAction = async () => {

  const api = AxiosApi

  try {
    const res = await api.get('/transactions')
    const data = res.data
    console.log({ data })

    return data
  } catch (error) {
    throw new Error('can not get transactions', error)
  }
}
