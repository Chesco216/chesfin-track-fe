import type { ReactNode } from "react"
import logo from '@/assets/logo.svg'
import { Link, useLocation, useNavigate } from "react-router"
import { Copyright } from "lucide-react"

interface Props {
  title: string,
  description: string
  children: ReactNode
}

export const AuthLayout = ({ children, title, description }: Props) => {

  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className="flex flex-col w-screen h-screen bg-slate-50">
      <div className="hidden xl:flex flex-row bg-gray-100 py-4 px-20 justify-between items-center">
        <div className="flex flex-row items-center gap-5">
          <img className='' src={logo} alt="logo" width={60} onClick={() => navigate('/')} />
          <h2 className="font-semibold text-2xl">Chesfin Finance</h2>
        </div>
        <div className="flex flex-row gap-3">
          <p className="font-jetbrains uppercase text-gray-500">{location.pathname == '/auth/login' ? 'Dont have an account?' : 'Already have an account?'}</p>
          <Link className="font-semibold underline" to={location.pathname == '/auth/login' ? '/auth/register' : '/auth/login'}>{location.pathname == '/auth/login' ? 'Create an account' : 'Login'}</Link>
        </div>
      </div>
      <div className="xl:grid xl:grid-cols-2 h-full">
        <div className="hidden xl:flex flex-col bg-tblue items-center gap-10 justify-center p-20">
          <h3 className="text-white text-6xl text-center">
            {
              location.pathname == '/login'
                ? 'Precision in every penny'
                : 'Precision in every penny, clarity in every decision'
            }
          </h3>
          <p className=" text-gray-500 text-xl">
            Experience a sophisticated financial trajectory with a minimalist tracking tools, designed for high-end wealth management and quiet clarity.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center gap-3 mb-10 p-5'>
          <img className='mb-4' src={logo} alt="logo" width={80} />
          <h1 className='text-2xl'>{title}</h1>
          <p className='text-gray-500 text-center'>{description}</p>
          {children}
        </div>
      </div>
      <div className="hidden xl:flex flex-row bg-gray-100 py-4 px-20 justify-between items-end">
        <div className="flex flex-col items-start gap-5">
          <img className='grayscale' src={logo} alt="logo" width={40} />
          <p className="flex flex-row gap-3 items-center font-semibold text-md text-gray-500"><Copyright /> 2026 Chesfin Finance Precision Minimalism</p>
        </div>
        <ul className="flex flex-row gap-10">
          <li className="font-jetbrains text-gray-500 underline">Private Policy</li>
          <li className="font-jetbrains text-gray-500 underline">Terms of Service</li>
        </ul>
      </div>
    </div>
  )
}

