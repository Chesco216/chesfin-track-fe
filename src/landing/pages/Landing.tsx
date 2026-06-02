import { Button } from "@/components/ui/button"
import { Details } from "../components/details/Details"
import { MainLayout } from "../layouts/MainLayout"

export const Landing = () => {
  return (
    <MainLayout>
      <div className="flex flex-col mt-15 mb-15 gap-5">
        <h2 className="self-center bg-tblue text-white text-xl px-4 py-1.5 rounded-3xl">Master your money</h2>
        <p className="px-10 text-center">Take control of your finance with precision and minimalism. Designed for clarity, speed and growth</p>
      </div>
      <Button className="bg-torange mx-5 py-10 mb-20 text-lg">Start for free</Button>
      <Details />
    </MainLayout>
  )
}

