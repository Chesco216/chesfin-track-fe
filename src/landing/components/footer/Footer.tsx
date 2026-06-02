import { Copyright } from 'lucide-react'
import logo from '../../../assets/logo.svg'

export const Footer = () => {
  return (
    <footer className="flex flex-col p-6 gap-2 justify-center mt-15 bg-gray-100">
      <div className='flex flex-row items-center justify-center gap-3'>
        <img src={logo} width={20} />
        <p>Ches Finance</p>
      </div>
      <p className='flex flex-row gap-2 text-sm text-gray-500'>
        <Copyright />
        2026 ChesFin Finance. Precision. Minimalism
      </p>
    </footer>
  )
}

