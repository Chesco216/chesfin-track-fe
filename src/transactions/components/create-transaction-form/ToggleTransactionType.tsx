import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingDown, TrendingUp } from "lucide-react"
import type { SetStateAction } from "react"

interface Props {
  selected: string
  setSelected: React.Dispatch<SetStateAction<'expense' | 'income'>>
}

export const ToggleTransactionType = ({ selected, setSelected }: Props) => {

  return (
    <Tabs
      defaultValue="expense"
      value={selected}
      onValueChange={setSelected}
    >
      <TabsList
        className="w-full rounded-md"
      >
        <TabsTrigger
          className="text-xl rounded-md"
          value="expense"
        >
          <TrendingDown />
          Expense
        </TabsTrigger>
        <TabsTrigger
          className="text-xl rounded-md"
          value="income"
        >
          <TrendingUp />
          Income
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

