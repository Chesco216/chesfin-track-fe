import { useAuth } from "@/auth/store/auth.store"
import type { PropsWithChildren } from "react"
import { Navigate } from "react-router"

export const Authenticated = ({ children }: PropsWithChildren) => {

  const { authStatus } = useAuth()

  if (authStatus == 'not-authenticated') <Navigate to='/' />

  return children


}

