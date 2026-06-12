import { useAuth } from "@/auth/store/auth.store"
import { useEffect, type PropsWithChildren } from "react"
import { Navigate, Outlet } from "react-router"
import { toast } from "sonner"

export const Authenticated = ({ children }: PropsWithChildren) => {

  const { authStatus } = useAuth()

  if (authStatus == 'not-authenticated') {
    toast.error('Log in to access dashboard ')
    return <Navigate to='/' />
  }

  return children
}

export const NotAuthenticated = () => {

  const { authStatus, checkAuthStatus } = useAuth()
  useEffect(() => {
    checkAuthStatus().then()
  }, [])

  if (authStatus == 'authenticated') {
    return <Navigate to='/app/dashboard' />
  }

  return <Outlet />
}
