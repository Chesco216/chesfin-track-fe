import { Button } from "@/components/ui/button"
import { Details } from "../components/details/Details"
import { MainLayout } from "../layouts/MainLayout"
import { Sparkles } from "lucide-react"
import { Savings } from "../components/savings/Savings"
import { useNavigate } from "react-router"

export const Landing = () => {

  const navigate = useNavigate()

  //TODO: Redirect if user is already logged-in
  return (
    <MainLayout>
      <div className="xl:hidden flex flex-col my-15 gap-5">
        <h2 className="self-center bg-tblue text-white px-4 py-1.5 rounded-3xl font-jetbrains text-md">MASTER YOUR MONEY</h2>
        <p className="px-10 text-center">Take control of your finance with precision and minimalism. Designed for clarity, speed and growth</p>
      </div>

      <div className="hidden xl:flex self-center my-15 flex-col gap-20 px-60 items-center">
        <p className="flex flex-row font-jetbrains text-tpurlple bg-gray-200 py-3 px-5 gap-5 rounded-4xl"><Sparkles color="#452E5A" /> FINANCIAL PRECISION REIMAGINED</p>
        <p className="text-center text-8xl">Master Your Money with Effortless Clarity</p>
      </div>

      <div className="flex xl:flex-row justify-center mb-10">
        <Button
          onClick={() => navigate('/auth/register')}
          className="bg-torange hover:text-torange hover:bg-orange-200 mx-5 py-10 text-lg xl:px-20 xl:rounded-lg"
        >
          Start for free
        </Button>
        <Button
          onClick={() => navigate('/auth/login')}
          className="hidden xl:flex bg-white text-black border border-black hover:text-white hover:bg-black py-10 text-lg px-20 box-border rounded-lg"
        >
          Log in
        </Button>
      </div>
      <Details />
      <Savings />
      <div className="hidden xl:flex flex-col py-15 items-center bg-tblue">
        <h3 className="text-5xl text-white mb-5">Ready to reach your submit?</h3>
        <p className="text-gray-300 mb-10">Join now to transfor your relationship with money with precision tracking</p>
        <Button
          onClick={() => navigate('/auth/register')}
          className="bg-torange hover:text-torange hover:bg-orange-200 mx-5 py-10 text-lg xl:px-20 xl:rounded-lg"
        >
          Get Started Now — It's Free
        </Button>
      </div>
    </MainLayout>
  )
}


