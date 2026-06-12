import { Months } from "react-day-picker"
import type { string } from "zod"

export type MonthsArr =
  'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December'

const months: MonthsArr[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December']

interface AvailableDates {
  year: number
  months: MonthsArr[]
}

export const getAvailableDatesAction = (): AvailableDates[] => {
  return [
    {
      year: 2026,
      months: months.slice(3, 10)
    },
    {
      year: 2027,
      months: months.slice(3, 5)
    },
    {
      year: 2028,
      months: months.slice(0, 6)
    },
    {
      year: 2029,
      months: months.slice(7, 8)
    },
    {
      year: 2030,
      months: months.slice(3, 12)
    },
  ]
}
