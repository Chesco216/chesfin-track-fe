import { TrendingDown, TrendingUp, Wallet } from "lucide-react"
import { FinanceCard } from "./FinanceCard"

const financesData = [
  {
    title: 'Total Balance',
    amount: 12400.00,
    rate: 0.5
  },
  {
    title: 'Total Income',
    amount: 5400.00,
    rate: 1.5
  },
  {
    title: 'Total Expenses',
    amount: 2400.00,
    rate: -0.5
  },
]

export const Finances = () => {

  const balance = financesData[0]
  const incomes = financesData[1]
  const expenses = financesData[2]

  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  };

  return (
    <div className="flex xl:grid xl:grid-cols-3 gap-8">
      <div className="xl:hidden w-full flex flex-col bg-tblue p-6 gap-5 rounded-2xl">
        <p className="text-sm font-semibold text-gray-400">{balance.title}</p>
        <p className="font-bold text-white text-4xl">$ {balance.amount.toLocaleString('en-Us', options)}</p>
        <div className="flex flex-wor gap-8">
          {
            (balance.rate >= 0)
              ? <TrendingUp className="text-green-400 rounded-sm p-1" width={30} height={30} />
              : <TrendingDown />
          }
          <p className="flex flex-row items-center text-green-400">{balance.rate >= 0 ? '+' : ''} {balance.rate}%</p>
        </div>
      </div>
      <FinanceCard
        icon={<Wallet className="text-red-500 bg-red-100 p-2 box-content rounded-lg" />}
        title={balance.title}
        amount={balance.amount}
        rate={balance.rate}
      />
      <FinanceCard
        icon={<TrendingUp className="text-orange-500 bg-orange-100 p-2 box-content rounded-lg" />}
        title={incomes.title}
        amount={incomes.amount}
        rate={incomes.rate}
      />
      <FinanceCard
        icon={<TrendingDown className="text-purple-500 bg-purple-100 p-2 box-content rounded-lg" />}
        title={expenses.title}
        amount={expenses.amount}
        rate={expenses.rate}
      />
    </div>
  )
}

