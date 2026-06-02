import { Button } from '@/components/ui/button'
import logo from '@/assets/logo.svg'

export const Header = () => {
  return (
    <header className='flex flex-row p-4 items-center justify-between border-b-1 border-gray-200 bg-white'>
      <div className='flex flex-row items-center gap-3'>
        <h1 className='flex flex-row items-center gap-3'>
          <img src={logo} width={40} />
          <p className='font-semibold text-xl'>ChesFin Finance</p>
        </h1>
      </div>
      <div className='flex flex-row'>
        <Button>GetStarted</Button>
      </div>
    </header>
  )
}

