import { createBrowserRouter, type RouteObject } from "react-router"
import { Landing } from "../landing/pages/Landing"
import { Login } from "@/auth/pages/login/Login"
import { Register } from "@/auth/pages/register/Register"
import { Authenticated, NotAuthenticated } from "./private-routes/Authenticated.route"
import { DashboardPage } from "@/dashboard/pages/dashboard/DashboardPage"
import { AuthenticatedLayout } from "@/common/layouts/AuthenticatedLayout"
import { TransactionsPage } from "@/transactions/pages/TransactionsPage"


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
      {
        path: 'transactions',
        element: <TransactionsPage />
      },
      {
        path: 'budgets',
        element: <div>budgets</div>
      },
      {
        path: 'recurring',
        element: <div>recurring</div>
      },
      {
        path: 'insights',
        element: <div>insights</div>
      },
    ]
  }
]

export const router = createBrowserRouter(routes)


