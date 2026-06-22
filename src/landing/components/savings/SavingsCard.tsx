import { Progress } from "@/components/ui/progress"

export const SavingsCard = () => {
  return (
    <div className="lg:hidden flex flex-col m-2 p-5 border border-slate-100 bg-white rounded-lg gap-5">
      <p className="font-jetbrains font-semibold text-gray-500 text-sm">CURRENT SAVINGS GOAL</p>
      <div className="flex flex-row justify-between">
        <p className="text-4xl">$42000</p>
        <p className="self-end font-jetbrains text-sm text-torange">85% achived</p>
      </div>
      <Progress indicatorClassName=" bg-gradient-to-r from-tblue to-torange bg-gradient-to-r from-tblue to-torange" max={100} value={85} />
      <div>
        <ul className="flex flex-row justify-between">
          <li className="flex flex-col gap-3 bg-gray-100 p-5 rounded-lg">
            <p className="font-jetbrains text-sm text-gray-500">Monthly ROI</p>
            <p className="font-semibold text-3xl font-jetbrains">+12,4%</p>
          </li>
          <li className="flex flex-col gap-3 bg-gray-100 p-5 rounded-lg">
            <p className="font-jetbrains text-sm text-gray-500">Net Worth</p>
            <p className="font-semibold text-3xl font-jetbrains">$184k</p>
          </li>
        </ul>
      </div>

    </div>
  )
}

