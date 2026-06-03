import { createBrowserRouter, type RouteObject } from "react-router"
import { Landing } from "../landing/pages/Landing"
import { Login } from "@/auth/pages/login/Login"
import { Register } from "@/auth/pages/register/Register"


const routes: RouteObject[] = [
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
]

export const router = createBrowserRouter(routes)


