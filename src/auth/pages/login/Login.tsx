import { AuthLayout } from "@/auth/layouts/AuthLayout"
import { LoginForm } from "./components/LoginForm"
import { Link } from "react-router"

export const Login = () => {
  return (
    <AuthLayout
      title="Welcome Back"
      description="Enter your credentials to access your wealth dashboard"
    >
      <LoginForm />
      <p className='mt-5'>Already have an account?
        <Link
          className='ml-2 font-semibold underline'
          to='/register'
        >
          Create an account
        </Link>
      </p>
    </AuthLayout>
  )
}

