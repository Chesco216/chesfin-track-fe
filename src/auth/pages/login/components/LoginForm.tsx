import { loginAction } from "@/auth/actions/login-action"
import { useAuth } from "@/auth/store/auth.store"
import { Button } from "@/components/ui/button"
import { Eye, Lock, Mail } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { toast } from "sonner"

export const LoginForm = () => {

  const { register, getValues, handleSubmit, formState: { errors } } = useForm()
  const { login } = useAuth()

  const [isHiddenPassword, setIsHiddenPassword] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const navigate = useNavigate()

  const onSubmit = async () => {
    if (errors)
      console.log({ errors })

    setIsLoading(true)
    const email = getValues('email')
    const password = getValues('password')

    const res = await login({ email, password })
    if (res) setIsLoading(false)

    if (!res) {
      setIsLoading(false)
      toast.error('An error occurred. Try again Later', { position: 'top-center' })
      return
    }

    navigate('/app/dashboard')

  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col bg-white border-2 border-gray-100 p-5 rounded-lg"
    >
      <legend className="font-jetbrains font-semibold text-gray-500 text-sm">EMAIL ADRESS</legend>
      <fieldset className="flex flex-row border-2 border-gary-100 p-4 rounded-md gap-2 mb-5">
        <Mail color="oklch(55.1% 0.027 264.364)" />
        <input
          required
          type="email"
          placeholder="youremail@mail.com"
          {...register('email')}
        />
      </fieldset>
      <legend className="font-jetbrains font-semibold text-gray-500 text-sm">PASSWORD</legend>
      <fieldset className="flex flex-row border-2 border-gary-100 p-4 rounded-md gap-2 mb-5">
        <Lock color="oklch(55.1% 0.027 264.364)" />
        <input
          required
          type={isHiddenPassword ? 'password' : 'text'}
          placeholder="**********"
          {...register('password')}
        />
        <button type='button' onClick={() => setIsHiddenPassword(prev => !prev)}>
          <Eye color="oklch(55.1% 0.027 264.364)" />
        </button>
      </fieldset>
      <Button
        disabled={isLoading}
        type="submit"
        className="bg-torange font-semibold text-lg py-8 hover:bg-orange-400 disabled:cursor-progress"
      >
        Login
      </Button>
    </form>
  )
}

