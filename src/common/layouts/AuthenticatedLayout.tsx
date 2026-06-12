import { SidebarProvider } from "@/components/ui/sidebar"
import { Outlet } from "react-router"
import { AppHeader } from "../components/app-header/AppHeader"
import { AppSideBar } from "../components/sidebar/AppSideBar"

export const AuthenticatedLayout = () => {
  return (
    <div className="flex flex-col">
      <SidebarProvider>
        <AppSideBar />
        <main className="w-full flex flex-col">
          <AppHeader />
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  )
}

