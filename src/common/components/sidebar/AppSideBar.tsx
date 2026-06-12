import { Sidebar, SidebarContent, SidebarHeader, SidebarMenuItem } from "@/components/ui/sidebar"
import logo from "@/assets/logo.svg"
import { CalendarClock, LayoutDashboard, NotebookText, Sparkles, Wallet } from "lucide-react"
import { Link, useLocation } from "react-router"

export const AppSideBar = () => {

  const location = useLocation()

  return (
    <Sidebar className="bg-tblue" >
      <SidebarHeader className="bg-tblue p-6">
        <div className="flex flex-row items-center gap-1">
          <img src={logo} width={70} height={70} alt="logo" />
          <p className="font-bold text-white text-2xl">ChesFin</p>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-tblue p-5">
        <SidebarMenuItem className='flex flex-row gap-5' className={`${location.pathname == '/app/dashboard' ? 'bg-torange' : ''} flex flex-row items-center gap-5 rounded-lg px-5 py-3`}>
          <Link className='flex flex-row gap-5' to='/app/dashboard'>
            <LayoutDashboard className={`${location.pathname == '/app/dashboard' ? 'text-white' : 'text-gray-400'}`} />
            <p className={`${location.pathname == '/app/dashboard' ? 'text-white' : 'text-gray-400'}`}>
              Dashboard
            </p>
          </Link>
        </SidebarMenuItem>
        <SidebarMenuItem className={`${location.pathname == '/app/transactions' ? 'bg-torange' : ''} flex flex-row items-center gap-5 rounded-lg px-5 py-3`}>
          <Link className='flex flex-row gap-5' to='/app/transactions'>
            <NotebookText className={`${location.pathname == '/app/transactions' ? 'text-white' : 'text-gray-400'}`} />
            <p className={`${location.pathname == '/app/transactions' ? 'text-white' : 'text-gray-400'}`}>
              Transactions
            </p>
          </Link>
        </SidebarMenuItem>
        <SidebarMenuItem className={`${location.pathname == '/app/budgets' ? 'bg-torange' : ''} flex flex-row items-center gap-5 rounded-lg px-5 py-3`}>
          <Link className='flex flex-row gap-5' to='/app/budgets'>
            <Wallet className={`${location.pathname == '/app/budgets' ? 'text-white' : 'text-gray-400'}`} />
            <p className={`${location.pathname == '/app/budgets' ? 'text-white' : 'text-gray-400'}`}>
              Budgets
            </p>
          </Link>
        </SidebarMenuItem>
        <SidebarMenuItem className={`${location.pathname == '/app/recurring' ? 'bg-torange' : ''} flex flex-row items-center gap-5 rounded-lg px-5 py-3`}>
          <Link className='flex flex-row gap-5' to='/app/recurring'>
            <CalendarClock className={`${location.pathname == '/app/recurring' ? 'text-white' : 'text-gray-400'}`} />
            <p className={`${location.pathname == '/app/recurring' ? 'text-white' : 'text-gray-400'}`}>
              Recurring
            </p>
          </Link>
        </SidebarMenuItem>
        <SidebarMenuItem className={`${location.pathname == '/app/insights' ? 'bg-torange' : ''} flex flex-row items-center gap-5 rounded-lg px-5 py-3`}>
          <Link className='flex flex-row gap-5' to='/app/insights'>
            <Sparkles className={`${location.pathname == '/app/insights' ? 'text-white' : 'text-gray-400'}`} />
            <p className={`${location.pathname == '/app/insights' ? 'text-white' : 'text-gray-400'}`}>
              Insights
            </p>
          </Link>
        </SidebarMenuItem>
      </SidebarContent>
    </Sidebar>
  )
}

