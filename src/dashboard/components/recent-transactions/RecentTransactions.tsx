import { Link } from "react-router"

export const RecentTransactions = () => {
  return (
    <div className="lg:border-2 lg:border-gray-300 rounded-2xl lg:bg-white p-5 lg:p-8">
      <div className="flex flex-row justify-between items-center">
        <p className="font-semibold text-2xl">Recent Transactions</p>
        <Link className="underline text-sm text-red-500" to='/app/transactions'>View all</Link>
      </div>
    </div>
  )
}

