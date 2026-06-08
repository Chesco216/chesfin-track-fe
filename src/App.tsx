import { RouterProvider } from "react-router"
import { router } from "./routes/app.router"
import { Toaster } from "./components/ui/sonner"

function App() {

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  )
}

export default App
