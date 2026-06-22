import { ExpensesBreakdown } from "@/dashboard/components/expenses-breeakdown/ExpensesBreakdown"
import { FinanceChart } from "@/dashboard/components/finance-chart/FinanceChart"
import { Finances } from "@/dashboard/components/finances/Finances"
import { RecentTransactions } from "@/dashboard/components/recent-transactions/RecentTransactions"
export const DashboardPage = () => {
  return (
    <div className=" flex flex-col bg-gray-100 w-full h-full lg:p-8 p-5 lg:gap-8 gap-5">
      <Finances />
      <FinanceChart />
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5 lg:gap-8">
        <ExpensesBreakdown />
        <RecentTransactions />
      </div>
    </div>
  )
}

