import { RouterProvider } from "react-router"
import { router } from "./routes/app.router"
import { Toaster } from "./components/ui/sonner"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

function App() {

  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster />
      </QueryClientProvider>
    </>
  )
}

export default App
