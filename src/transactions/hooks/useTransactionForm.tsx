import { useState } from "react"
import { Transaction } from "../dto/create-transaction.dto"

type InputType =
  'transaction-type' |
  'amount' |
  'description' |
  'date' |
  'category'

export const useTransactionForm = () => {
  //TODO: create the shared logic for the create transaction Drawer(Mobile)/Dialog(Desktop)
  const [transactionType, setTransactionType] = useState<'expense' | 'income'>('expense')
  const [amount, setAmount] = useState<number>()
  const [description, setDescription] = useState<string>('')
  const [date, setDate] = useState<Date>()
  const [category, setCategory] = useState<string>('')


  const handleInputChange = (i: any, t: InputType) => {
    switch (t) {
      case "transaction-type":
        setTransactionType(i)
        break
      case "amount":
        setAmount(i)
        break
      case "description":
        setDescription(i)
        break
      case "date":
        setDate(i)
        break
      case "category":
        setCategory(i)
        break
    }
  }

  const handleCreateTransaction = () => {
    try {
      const transactionToSend = Transaction.parse({
        type: transactionType,
        amount,
        description,
        date,
        category
      })
      console.log({ transactionToSend })
      setTransactionType('expense')
      setAmount(0)
      setDescription('')
      setDate(null)
      setCategory('')
    } catch (error) {
      console.log(error)
    }
  }

  return {
    handleInputChange,
    handleCreateTransaction,
    transactionType,
    amount,
    description,
    date,
    category
  }
}
