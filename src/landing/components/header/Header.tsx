import { Button } from '@/components/ui/button'
import logo from '@/assets/logo.svg'
import { useNavigate } from 'react-router'

export const Header = () => {

  const navigate = useNavigate()

  return (
    <header className='flex flex-row p-4 items-center justify-between lg:px-40 border-b border-gray-200 bg-white'>
      <div className='flex flex-row items-center gap-3'>
        <h1 className='flex flex-row items-center gap-3'>
          <img src={logo} width={40} />
          <p className='font-semibold text-xl lg:text-3xl'>ChesFin Finance</p>
        </h1>
      </div>
      <div className='flex flex-row gap-3'>
        <Button
          onClick={() => navigate('/auth/login')}
          className='hidden lg:flex lg:bg-white lg:border lg:border-black lg:text-black hover:bg-black hover:text-white lg:text-lg'
        >
          Log in
        </Button>
        <Button
          onClick={() => navigate('/auth/register')}
          className='lg:text-lg p-4'
        >
          GetStarted
        </Button>
      </div>
    </header>
  )
}

