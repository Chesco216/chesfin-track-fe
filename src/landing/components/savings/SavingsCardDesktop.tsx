import { Progress } from "@/components/ui/progress"

export const SavingsCardDesktop = () => {
  return (
    <div className="hidden xl:flex flex-col m-10 p-10 border-2 border-slate-200 bg-white rounded-lg gap-5">
      <div className="flex flex-col justify-between border border-slate-200 rounded-lg p-5 gap-5">
        <div className="flex flex-row justify-between">
          <p className="font-jetbrains font-semibold text-gray-500 text-sm">HOME DOWN PAYMENT</p>
          <p className="font-jetbrains text-sm text-torange">$42,500 / $60,000</p>
        </div>
        <div className="flex flex-col gap-2">
          <Progress indicatorClassName=" bg-gradient-to-r from-tblue to-torange" max={100} value={71} />
          <div className="flex flex-row justify-between">
            <p className="text-gray-500 text-sm">71% Achieved</p>
            <p className="text-sm">8 months remaining</p>
          </div>
        </div>
      </div>
      <ul className="grid grid-cols-2 gap-20">
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
  )
}

