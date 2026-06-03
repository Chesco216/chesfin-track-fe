import { Check } from "lucide-react"
import { SavingsCard } from "./SavingsCard"
import { SavingsCardDesktop } from "./SavingsCardDesktop"

export const Savings = () => {
  return (
    <div className="flex flex-col bg-slate-50 py-15 px-5 gap-10 xl:grid xl:grid-cols-2 xl:gap-20 xl:px-20">
      <div className="flex flex-col gap-10">
        <p className="font-semibold text-xl xl:text-3xl">Uncompromising Financial Clarity</p>
        <div className="flex flex-col">
          <p>Transform raw number into actionable growth stories allowing you to focus on what matters most, your future</p>
          <p className="hidden xl:flex">Built to be the last money tool you'll ever need. By focusing on precision and removing the clutter, we help you make smarter decisions faster.</p>
        </div>
        <ul className="flex flex-col gap-5">
          <li className='flex flex-row items-center gap-3'>
            <Check className="bg-tblue rounded-full p-2" width={40} height={40} color="white" />
            <p>Sync Accuracy</p>
          </li>
          <li className='flex flex-row items-center gap-3'>
            <Check className="bg-tblue rounded-full p-2" width={40} height={40} color="white" />
            <p>Zero Advertising</p>
          </li>
          <li className='flex flex-row items-center gap-3'>
            <Check className="bg-tblue rounded-full p-2" width={40} height={40} color="white" />
            <p>Full Availability</p>
          </li>
        </ul>
      </div>
      <SavingsCard />
      <SavingsCardDesktop />
    </div>
  )
}

