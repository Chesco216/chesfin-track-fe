import { createBrowserRouter, type RouteObject } from "react-router"
import { Landing } from "../landing/pages/Landing"
import { Login } from "@/auth/pages/login/Login"
import { Register } from "@/auth/pages/register/Register"
import { Authenticated, NotAuthenticated } from "./private-routes/Authenticated.route"
import { DashboardPage } from "@/dashboard/pages/dashboard/DashboardPage"
import { AuthenticatedLayout } from "@/common/layouts/AuthenticatedLayout"


const routes: RouteObject[] = [
  {
    path: '/',
    element: <NotAuthenticated />,
    children: [
      {
        index: true,
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
      }
    ]
  },
  {
    path: '/app',
    element:
      <Authenticated>
        <AuthenticatedLayout />
      </Authenticated>,
    children: [
      {
        path: 'dashboard',
        element: <DashboardPage />
      },
    ]
  }
]

export const router = createBrowserRouter(routes)


