import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar1Icon, SearchIcon } from "lucide-react"

export const SearchBar = () => {
  return (
    <div className="grid grid-cols-6 items-center justify-center mt-8 border-2 bg-white px-10 py-4 rounded-xl gap-3">
      <div className="col-span-3 flex flex-row items-center w-full bg-gray-100 border rounded-md py-2 px-4 gap-5">
        <SearchIcon />
        <input
          className="focus:outline-none"
          placeholder="Search by description"
        />
      </div>
      {/* TODO: improve teh select components ui */}
      <Select>
        <SelectTrigger>
          <Calendar1Icon />
          <SelectValue placeholder='Select Date' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Date</SelectLabel>
            <SelectItem value="pipipi">pipipi</SelectItem>
            <SelectItem value="pipipi">pipipi</SelectItem>
            <SelectItem value="pipipi">pipipi</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger>
          <Calendar1Icon />
          <SelectValue placeholder='All Types' />
        </SelectTrigger>
        <SelectContent className="place-self-center">
          <SelectGroup>
            <SelectLabel>Date</SelectLabel>
            <SelectItem value="pipipi">pipipi</SelectItem>
            <SelectItem value="pipipi">pipipi</SelectItem>
            <SelectItem value="pipipi">pipipi</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger>
          <Calendar1Icon />
          <SelectValue placeholder='All Categories' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Date</SelectLabel>
            <SelectItem value="pipipi">pipipi</SelectItem>
            <SelectItem value="pipipi">pipipi</SelectItem>
            <SelectItem value="pipipi">pipipi</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

