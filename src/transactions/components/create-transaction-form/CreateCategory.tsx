import { XIcon } from "lucide-react"
import { useState, type SetStateAction } from "react"
import { icons } from "../icons/icons"
import { colors } from "@/common/colors/colors"
import { Button } from "@/components/ui/button"
import { createCategoryAction } from "@/transactions/actions/create-category-action"

interface Props {
  isOpen: boolean
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
}

export const CreateCategory = ({ isOpen, setIsOpen }: Props) => {

  const [selectedColor, setSelectedColor] = useState(1)
  const [selectedIcon, setSelectedIcon] = useState(1)
  const [catName, setCatName] = useState('')

  const handleCreateCategory = () => {
    if (catName.length > 0)
      createCategoryAction({ name: catName, color: selectedColor, icon: selectedIcon }).then(res => {
        console.log({ res })
        setIsOpen(false)
      })
  }

  return (
    <div
      className="flex flex-col w-full p-5 bg-gray-50 border rounded-2xl gap-5 mb-5"
      hidden={!isOpen}
    >
      <div className="flex flex-row justify-between mb-5">
        <h4 className="font-bold text-lg">Create new category</h4>
        <XIcon onClick={() => setIsOpen(false)} width={15} />
      </div>
      <fieldset>
        <legend className="text-gray-500">
          NAME
        </legend>
        <input
          value={catName}
          onChange={(e) => setCatName(e.target.value)}
          required
          className="bg-white w-full p-3 rounded-xl"
          placeholder="ej: Food"
        />
      </fieldset>
      <div className="flex flex-row justify-around">
        <div className="flex flex-col">
          <p className="mb-4 text-gray-500">ICON</p>
          <div className="grid grid-cols-3 gap-2">
            {
              icons.map(icon =>
                <div
                  onClick={() => setSelectedIcon(icon.id)}
                  className={`bg-gray-200 p-1 box-content rounded-md ${selectedIcon == icon.id ? 'border-2 border-black' : ''}`}
                  key={icon.id}
                >
                  {icon.icon}
                </div>)
            }
          </div>
        </div>
        <div className="flex flex-col">
          <p className="mb-4 text-gray-500">COLOR</p>
          <div className="grid grid-cols-3 gap-3">
            {
              colors.map(color => {
                const { value } = color
                return (
                  <div
                    style={{ borderColor: value }}
                    className={`flex flex-row justify-center items-center p-0.5 ${selectedColor == color.id ? 'border-2' : ''} rounded-full`}
                  >
                    <div
                      style={{ backgroundColor: value }}
                      key={color.id}
                      onClick={() => setSelectedColor(color.id)}
                      className='h-8 w-8 rounded-full p-1'
                    >
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <Button
        className="bg-tblue"
        onClick={handleCreateCategory}
      >
        Create category
      </Button>
    </div >
  )
}

