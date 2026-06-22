import * as z from "zod"

export interface CreateTransactionDTO {
  amount: number
  type: 'expense' | 'income'
  description: string
  date: Date
  category: string
}

export const Transaction = z.object({
  type: z.literal(['expense', 'income']),
  amount: z.number().positive(),
  description: z.string(),
  date: z.date(),
  category: z.string()

})
