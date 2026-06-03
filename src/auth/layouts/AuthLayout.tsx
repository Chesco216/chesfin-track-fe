import type { ReactNode } from "react"
import logo from '@/assets/logo.svg'

interface Props {
  title: string,
  description: string
  children: ReactNode
}

export const AuthLayout = ({ children, title, description }: Props) => {
  return (
    <div className="flex flex-col w-screen h-screen justify-center p-5 bg-slate-50">
      <div className="hidden">some header</div>
      <div className="xl:grid xl:grid-cols-2">
        <div className="hidden">
          {/*TODO:: Desktop view*/}
          some desktop fill
        </div>
        <div className='flex flex-col justify-center items-center gap-3 mb-10'>
          <img className='mb-4' src={logo} alt="logo" width={80} />
          <h1 className='text-2xl'>{title}</h1>
          <p className='text-gray-500'>{description}</p>
        </div>
      </div>
      {children}
      <div className="hidden">some footeer</div>
    </div>
  )
}

