import { Drawer, DrawerContent, DrawerHeader, DrawerTrigger } from "@/components/ui/drawer"
import { Calendar1Icon, ChevronDown, DollarSign, PlusIcon } from "lucide-react"
import { useState } from "react"
import { ToggleTransactionType } from "./ToggleTransactionType"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { SelectCategory } from "./SelectCategory"

export const CreateTransactionForm = () => {
  const [selected, setSelected] = useState<'expense' | 'income'>('expense')

  return (
    <Drawer>
      <DrawerTrigger className="absolute bottom-5 right-5">
        <PlusIcon className="text-tblue bg-torange box-content rounded-full p-2" width={50} height={50} />
      </DrawerTrigger>
      <DrawerContent
        className="flex flex-col items-center"
      >
        <DrawerHeader>
          <h2 className="font-bold text-2xl">New Transaction</h2>
        </DrawerHeader>
        <div className="w-full overflow-y-auto px-4 pb-5">
          <ToggleTransactionType selected={selected} setSelected={setSelected} />
          <label className="flex flex-row justify-center my-10">
            <DollarSign width={50} height={50} />
            <input
              className="text-4xl w-28 overflow-visible ml-5"
              placeholder="0.00"
            />
          </label>
          <fieldset className="w-full mb-5">
            <legend className="font-semibold text-gray-500">
              TRANSACTION DESCRIPTION
            </legend>
            <input
              className="w-full border bg-gray-100 py-3 px-5 text-md rounded-xl"
              placeholder="What did you spend on"
            />
          </fieldset>
          <fieldset className="w-full mb-5">
            <legend className="self-start font-semibold text-gray-500">
              DATE
            </legend>
            <Popover>
              <PopoverTrigger className="self-start flex flex-row gap-5 items-center bg-gray-100 border px-4 py-3 rounded-xl text-gray-500">
                SelectDate
                <span className="flex flex-row items-center">
                  <Calendar1Icon />
                  <ChevronDown />
                </span>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                />
              </PopoverContent>
            </Popover>
          </fieldset>
          <SelectCategory />
          <Button
            className="bg-tblue text-white w-full text-lg py-5 rounded-xl"
          >
            Save Transaction
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

