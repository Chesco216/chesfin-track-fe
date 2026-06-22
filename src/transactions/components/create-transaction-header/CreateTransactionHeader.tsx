import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { PlusIcon } from "lucide-react"
import { useState } from "react"

export const CreateTransactionHeader = () => {

  const [isCategory, setIsCategory] = useState(false)

  return (
    <div className="hidden lg:flex flex-row w-full justify-between">
      <span>
        <h3 className="font-semibold text-xl">Transactions</h3>
        <p>Review and manage your detailed spending history</p>
      </span>
      {/* TODO: make 2 screens with conditional rendering to switch  */}
      {/* between create a new transaction and create a new category */}
      <Dialog>
        <DialogTrigger
          className="flex flex-row items-center gap-5 rounded-md text-xl py-3 px-4 bg-torange text-white font-semibold cursor-pointer"
        >
          <PlusIcon /> Create Transaction
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              New Transaction
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
