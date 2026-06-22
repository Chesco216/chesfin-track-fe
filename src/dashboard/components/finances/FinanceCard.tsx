import { TrendingDown, TrendingUp } from "lucide-react"

interface Props {
  icon: React.ReactNode
  title: string
  amount: number
  rate: number
}

export const FinanceCard = ({ title, amount, rate, icon }: Props) => {

  const options = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  };

  return (
    <div className="hidden lg:flex flex-col bg-white border-2 border-gray-300 p-8 rounded-2xl">
      <div className="flex flex-row justify-between mb-5">
        {icon}
        <p
          className={`flex flex-row h-fit items-center text-xs ${rate >= 0 ? 'text-green-500 bg-green-200' : 'text-red-500 bg-red-200'} rounded-2xl px-2`}
        >
          {rate >= 0 ? <TrendingUp className="mr-1" width={15} /> : <TrendingDown className="mr-1" width={15} />} {rate >= 0 ? '+' : ''} {rate}%
        </p>
      </div>
      <p className="text-gray-700">{title}</p>
      <p className="font-bold text-4xl">$ {amount.toLocaleString('en-US', options)}</p>
    </div>
  )
}

