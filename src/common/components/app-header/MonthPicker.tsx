import { getAvailableDatesAction, type MonthsArr } from "@/common/actions/get-transaction-dates-action"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"


export const MonthPicker = () => {

  const [selectedYear, setSelectedYear] = useState()
  const [selectedMonth, setSelectedMonth] = useState()

  const availableDates = getAvailableDatesAction()
  useEffect(() => {
    if (!selectedYear && availableDates) {
      setSelectedYear(availableDates[0].year)
    }
  }, [])

  useEffect(() => {
    const availableMonth = availableDates.find(date => date.year == selectedYear)?.months[0]
    if (availableMonth)
      setSelectedMonth(availableMonth)
  }, [selectedYear])

  const months: MonthsArr[] = availableDates.find(date => date.year == selectedYear)
    ?.months

  const handleChangeMonth = (direction: string) => {
    const actualIndex = months?.findIndex(m => m == selectedMonth) ?? 0
    console.log({ months })
    if (direction == 'left' && months) {
      const index = actualIndex === 0 ? months.length - 1 : actualIndex
      console.log({ index })
      if (months.length === 1) {
        setSelectedMonth(months[0])
      } else {
        setSelectedMonth(months[index - 1])
      }
    }

    if (direction == 'right' && months) {
      const index = actualIndex === months.length - 1 ? -1 : actualIndex
      setSelectedMonth(months[index + 1])
    }
  }
  return (
    <div className="hidden xl:flex flex-row items-center w-fit pl-5">
      <ChevronLeft onClick={() => handleChangeMonth('left')} className="text-gray-500" />
      <div className="flex flex-row px-2 bg-gray-100 items-center rounded-2xl">
        <Calendar className="mr-3" width={15} height={15} />
        <p className="text-sm">
          {selectedMonth}
        </p>
        {
          (selectedYear) &&
          <Select value={selectedYear.toString()} onValueChange={value => setSelectedYear(value)}>
            <SelectTrigger className="bg-gray-100">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Years</SelectLabel>
                {
                  availableDates?.map(date =>
                    <SelectItem key={date.year} value={date.year.toString()}>{date.year}</SelectItem>
                  )
                }
              </SelectGroup>
            </SelectContent>
          </Select>
        }
      </div>
      <ChevronRight onClick={() => handleChangeMonth('right')} className="text-gray-500" />
    </div >
  )
}

