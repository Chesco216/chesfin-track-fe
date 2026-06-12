import { useAuth } from "@/auth/store/auth.store"
import { cn } from "@/lib/utils"
import { User } from "lucide-react"

interface Props {
  className?: string
}

export const UserHeaderInfo = ({ className }: Props) => {

  const { user } = useAuth()

  return (
    <div className={cn("flex flex-row items-center gap-2", className)}>
      {
        (user) &&
        <ul className="hidden xl:flex flex-col py-2">
          <li className="font-semibold text-md">
            {user.name}
          </li>
          <li className="text-gray-500 text-sm">
            {user.email}
          </li>
        </ul>
      }
      <div className="rounded-full border border-black p-2">
        {/* TODO: Implement DropDownMeng */}
        <User width={30} height={30} />
      </div>
    </div>
  )
}
