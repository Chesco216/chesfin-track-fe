import { Calendar } from "@/components/ui/calendar"

export const AppHeader = () => {

  return (
    <header className="flex flex-row w-full bg-blue-200">
      <Calendar />
      <h1 className="xl:hidden self-center">ChesFin</h1>
    </header>
  )
}

