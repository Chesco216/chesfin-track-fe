import { createBrowserRouter, type RouteObject } from "react-router"
import { Landing } from "../landing/pages/Landing"
import { Login } from "@/auth/pages/login/Login"
import { Register } from "@/auth/pages/register/Register"
import { Authenticated } from "./private-routes/Authenticated.route"
import { DashboardPage } from "@/dashboard/pages/dashboard/DashboardPage"


const routes: RouteObject[] = [
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/auth',
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      }

    ]
  },
  {
    path: '/app',
    element: <Authenticated />,
    children: [
      {
        path: 'dashboard',
        element: <DashboardPage />
      }
    ]
  }
]

export const router = createBrowserRouter(routes)


