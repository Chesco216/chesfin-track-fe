import { useAuth } from "@/auth/store/auth.store"
import { Spinner } from "@/components/ui/spinner"
import { useEffect, useRef, useState, type PropsWithChildren } from "react"
import { Navigate, Outlet } from "react-router"
import { toast } from "sonner"

export const Authenticated = ({ children }: PropsWithChildren) => {

  const { authStatus, checkAuthStatus, logout } = useAuth()
  const [localeChecking, setLocaleChecking] = useState(false)
  const triedRef = useRef(false)

  useEffect(() => {
    if (!triedRef.current) {
      const token = localStorage.getItem('token')
      if (token) {
        triedRef.current = true
        setLocaleChecking(true)
        checkAuthStatus().finally(() => setLocaleChecking(false))
      } else {
        logout()
      }
    }
  }, [logout, checkAuthStatus])

  if (authStatus == 'checking' || localeChecking) {
    return (
      <div className="flex flex-row w-screen h-screen justify-center items-center">
        <Spinner />
      </div>
    )
  }

  if (authStatus == 'not-authenticated') {
    toast.error('Log in to access dashboard')
    return <Navigate to='/' />
  }

  return children
}

export const NotAuthenticated = () => {

  const { authStatus, checkAuthStatus } = useAuth()
  const token = localStorage.getItem('token')
  useEffect(() => {
    if (token)
      checkAuthStatus().catch()
  }, [])

  if (authStatus == 'authenticated') {
    return <Navigate to='/app/dashboard' />
  }

  return <Outlet />
}


