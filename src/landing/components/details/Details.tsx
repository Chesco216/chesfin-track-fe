import { ShieldUser, TrendingUp, Wallet } from "lucide-react"
import { DetailCard } from "./DetailCard"

const details = [
  {
    icon: <Wallet className="bg-gray-300 p-2 rounded-lg" width={50} height={50} color="#1E104E" />,
    title: 'Track Expenses',
    description: 'Automatic categorization of your transactions with high grade of precision'
  },
  {
    icon: <TrendingUp className="bg-orange-100 p-2 rounded-lg" width={50} height={50} color="#1E104E" />,
    title: 'Set Goals',
    description: 'Visualize your progress toward financial freedom with intuitive milestone tracking'
  },
  {
    icon: <ShieldUser className="bg-orange-200 p-2 rounded-lg" width={50} height={50} color="#FF653F" />,
    title: 'Secure Insights',
    description: 'Deep analytical reports, secured for your eyes only'
  }
]

export const Details = () => {
  return (
    <div className="flex flex-col bg-slate-100 py-10">
      <div className="self-center flex flex-col items-center gap-5">
        <h2 className="text-2xl">Build for precision</h2>
        <p className="text-gray-500">Simple tools for complex desicions</p>
      </div>
      <ul className="flex flex-col mt-15 px-8 gap-5 xl:grid xl:grid-cols-3 xl:gap-10">
        {
          details &&
          details.map(detail =>
            <DetailCard
              key={detail.title}
              icon={detail.icon}
              title={detail.title}
              decription={detail.description}
            />
          )
        }
      </ul>
    </div >
  )
}

