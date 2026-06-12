import { type ReactNode } from "react"
import { Header } from "../components/header/Header"
import { Footer } from "../components/footer/Footer"
import { useQuery } from "@tanstack/react-query"
import { useAuth } from "@/auth/store/auth.store"

interface Props {
  children: ReactNode
}

export const MainLayout = ({ children }: Props) => {

  const { checkAuthStatus } = useAuth()

  const { data } = useQuery({
    queryKey: ['user'],
    queryFn: checkAuthStatus,
    staleTime: 1000 * 60 * 60 * 1.5,
    retry: false
  })

  return (
    <div className="w-screen box-border flex flex-col">
      <Header />
      {children}
      < Footer />
    </div>
  )
}

