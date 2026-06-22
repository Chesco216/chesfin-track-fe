import { create } from "zustand";

interface Transaction {
  id: string
  amount: number
  type: 'expense' | 'income'
  description: string
  date: Date
  createdAt: Date
  category: {
    id: string
    name: string
    icon: number
    color: number
    craetedAt: Date
  }
}

interface TransactionState {
  transactions: Transaction[]
  createTransaction: (transaction: Transaction) => void
  setTransactions: (transactions: Transaction[]) => void
}

export const useTransaction = create((set): TransactionState => ({
  transactions: [],
  createTransaction: (transaction) => set((state) => ({
    ...state,
    transactions: [...state.transactions, transaction]
  })),
  setTransactions: (transactions) => set((state) => ({
    ...state,
    transactions: transactions
  }))
}))
