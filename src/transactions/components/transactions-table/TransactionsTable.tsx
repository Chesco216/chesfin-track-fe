import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { getAllTransactionsAction } from "@/transactions/actions/get-all-transactions-action"
import { useTransaction } from "@/transactions/store/transaction.store"
import { useEffect } from "react"
import { icons } from "../icons/icons"
import { colors } from "@/common/colors/colors"

export const TransactionsTable = () => {

  const { transactions, setTransactions } = useTransaction()

  useEffect(() => {
    getAllTransactionsAction()
      .then(res => setTransactions(res))
  }, [])

  return (
    <div className="hidden lg:flex rounded-xl mt-10 overflow-hidden border">
      <Table className="">
        <TableHeader className="bg-neutral-200 rounded-xl">
          <TableRow>
            <TableHead>CATEGORY</TableHead>
            <TableHead>DESCRIPTION</TableHead>
            <TableHead>DATE</TableHead>
            <TableHead>TYPE</TableHead>
            <TableHead>AMOUNT</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
            (transactions.length > 0) &&
            transactions.map(transaction => {
              const icon = icons.find(ic => ic.id == transaction.category.icon)
              const color = colors.find(col => col.id = transaction.category.color)
              const date = new Date(transaction.date)
              return (
                <TableRow
                  className="w-fit"
                  key={transaction.id}>
                  <TableCell className="flex flex-row">
                    {
                      icon &&

                      <>
                        <span className="rounded-md p-1.5" style={{ backgroundColor: color?.background, color: color?.value }}>
                          {icon?.icon}
                        </span>
                        <p>{transaction.category.name}</p>
                      </>
                    }
                  </TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell>{date.toLocaleDateString()}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>{transaction.amount}</TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table >
    </div>
  )
}

