import { createBrowserRouter, type RouteObject } from "react-router"
import { Landing } from "../landing/pages/Landing"


const routes: RouteObject[] = [
  {
    path: '/',
    element: <Landing />
  }
]

export const router = createBrowserRouter(routes)


