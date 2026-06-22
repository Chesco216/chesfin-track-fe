import { useEffect, useState, type SetStateAction } from "react"
import { CreateCategory } from "./CreateCategory"
import { getAllCategoriesAction, type CategoryResponse } from "@/transactions/actions/get-all-categories-action"
import { icons } from "../icons/icons"

interface Props {
  selectedCategory: string
  setSelectedCategory: React.Dispatch<SetStateAction<string>>
}

export const SelectCategory = ({ selectedCategory, setSelectedCategory }: Props) => {


  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [categories, setCategories] = useState<CategoryResponse[] | []>([])

  useEffect(() => {
    getAllCategoriesAction().then(data => setCategories(data))
  }, [])

  return (
    <div className="w-full">
      <div className="flex flex-row justify-between">
        <p className="font-semibold text-gray-500">CATEGORY</p>
        <button
          className="underline text-torange"
          onClick={() => setIsOpen(true)}
        >
          Create new
        </button>
      </div>
      <div className="flex flex-row gap-4 overflow-x-auto my-5">
        {
          (categories.length > 0)
            ? categories.map(category => {
              const icon = icons.find(ic => ic.id == category.icon)?.icon
              return (
                <span
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex flex-col items-center p-4 rounded-lg gap-4 ${selectedCategory == category.id ? 'bg-tblue text-white' : 'bg-white border'}`}
                >
                  <p className={`${selectedCategory == category.id ? '' : 'bg-gray-300'} rounded-full p-3`}>
                    {icon}
                  </p>
                  <p>{category.name}</p>
                </span>
              )
            })
            : <p>no categories found</p>
        }
      </div>
      {
        isOpen &&
        <CreateCategory isOpen={isOpen} setIsOpen={setIsOpen} />
      }
    </div >
  )
}

