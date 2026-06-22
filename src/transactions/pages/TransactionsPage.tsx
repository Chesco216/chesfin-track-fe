import { CreateTransactionForm } from "../components/create-transaction-form/CreateTransactionForm"
import { CreateTransactionHeader } from "../components/create-transaction-header/CreateTransactionHeader"
import { SearchBar } from "../components/search-bar/SearchBar"
import { TransactionsTable } from "../components/transactions-table/TransactionsTable"

export const TransactionsPage = () => {
  return (
    <div className="flex flex-col p-10 bg-gray-50">
      <CreateTransactionHeader />
      <SearchBar />
      <div className="lg:hidden">
        <CreateTransactionForm />
      </div>
      <TransactionsTable />
    </div>
  )
}

