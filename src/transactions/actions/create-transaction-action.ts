import { AxiosApi } from "@/api/AxiosApi"
import type { CreateTransactionDTO } from "../dto/create-transaction.dto"

export const createTransactionAction = async (transation: CreateTransactionDTO) => {

  const api = AxiosApi
  try {
    const res = await api.post('/transactions', transation)
    const data = res.data

    return data
  } catch (error) {

    throw new Error('cant create transaction', error)
  }
}
