import type { ReactNode } from "react"

interface Props {
  icon: ReactNode,
  title: string,
  decription: string
}

export const DetailCard = ({ icon, title, decription }: Props) => {
  return (
    <li className="flex flex-col p-10 bg-white rounded-2xl gap-3.5">
      {icon}
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-gray-500 text-sm">{decription}</p>
    </li>
  )
}

