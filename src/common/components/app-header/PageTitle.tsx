import { cn } from "@/lib/utils"
import { useLocation } from "react-router"

interface Props {
  className?: string
}

export const PageTitle = ({ className }: Props) => {

  const location = useLocation()

  return (
    <h1 className={cn("font-bold text-xl xl:hidden", className)} >
      {
        location.pathname == '/app/dashboard'
          ? 'Dashboard'
          : 'pipipi'
      }
    </h1 >
  )
}

