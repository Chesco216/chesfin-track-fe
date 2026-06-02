import type { ReactNode } from "react"
import { Header } from "../components/header/Header"
import { Footer } from "../components/footer/Footer"

interface Props {
  children: ReactNode
}

export const MainLayout = ({ children }: Props) => {
  return (
    <div className="w-screen box-border flex flex-col">
      <Header />
      {
        children
      }
      <Footer />
    </div>
  )
}

