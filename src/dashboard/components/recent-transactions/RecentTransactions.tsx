import { Link } from "react-router"

export const RecentTransactions = () => {
  return (
    <div className="xl:border-2 xl:border-gray-300 rounded-2xl xl:bg-white p-5 xl:p-8">
      <div className="flex flex-row justify-between items-center">
        <p className="font-semibold text-2xl">Recent Transactions</p>
        <Link className="underline text-sm text-red-500" to='/app/transactions'>View all</Link>
      </div>
    </div>
  )
}

