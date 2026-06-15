import { CreateTransactionForm } from "../components/create-transaction-form/CreateTransactionForm"

export const TransactionsPage = () => {
  return (
    <div>
      <h1>Transactions pipipi</h1>
      <div className="xl:hidden">
        <CreateTransactionForm />
      </div>
    </div>
  )
}

