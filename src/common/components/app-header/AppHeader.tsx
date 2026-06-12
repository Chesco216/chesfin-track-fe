import { SidebarTrigger } from "@/components/ui/sidebar"
import { MonthPicker } from "./MonthPicker"
import { MenuIcon } from "lucide-react"
import { UserHeaderInfo } from "./UserHeaderInfo"
import { PageTitle } from "./PageTitle"

export const AppHeader = () => {

  return (
    <header className="grid grid-cols-[auto_1fr_auto] w-full p-3 bg-white items-center border-b border-gray-200">
      <SidebarTrigger icon=<MenuIcon width={30} height={30} /> />
      <MonthPicker />
      <PageTitle className="px-3" />
      <UserHeaderInfo />
    </header>
  )
}

