import { TrendingDown, TrendingUp } from "lucide-react"
import type { SetStateAction } from "react"

interface Props {
  selected: string
  setSelected: React.Dispatch<SetStateAction<'expense' | 'income'>>
}

export const ToggleTransactionType = ({ selected, setSelected }: Props) => {
  // TODO: improve toggle UI
  return (
    <div className="relative flex w-80 rounded-lg bg-gray-200 p-1" >
      <div
        className={`absolute flex flex-row justify-around top-1 bottom-1 w-[calc(50%-0.25rem)] rounded-md bg-white transition-transform duration-300 ease-in-out ${selected === "income" ? "translate-x-full" : ""
          }`}
      />
      <button
        type="button"
        onClick={() => setSelected("expense")}
        className={`z-10 flex flex-row items-center gap-2 py-2 text-sm font-medium transition-colors ${selected === "expense" ? "text-black" : "text-gray-500"
          }`}
      >
        <TrendingDown className="ml-2" />
        Expense
      </button>

      <button
        type="button"
        onClick={() => setSelected("income")}
        className={`z-10 flex flex-row items-center gap-2 py-2 text-sm font-medium transition-colors ${selected === "income" ? "text-black" : "text-gray-500"
          }`}
      >
        <TrendingUp className="ml-2" />
        Income
      </button>
    </div >
  )
}

