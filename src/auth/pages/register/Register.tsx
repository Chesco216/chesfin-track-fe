import { Link } from 'react-router'
import { RegisterForm } from './components/register-form/RegisterForm'
import { AuthLayout } from '@/auth/layouts/AuthLayout'

export const Register = () => {

  return (
    <AuthLayout
      title='Empower your Wealth'
      description='Join now to track and grow your assets'
    >
      <RegisterForm />
      <p className='mt-5 lg:hidden'>Already have an account?
        <Link
          className='ml-2 font-semibold underline'
          to='/auth/login'
        >
          Login here
        </Link>
      </p>
    </AuthLayout>
  )
}

