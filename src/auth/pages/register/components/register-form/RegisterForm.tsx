import { useAuth } from "@/auth/store/auth.store"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, Lock, Mail, User } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { toast } from "sonner"

export const RegisterForm = () => {

  const { register, getValues, handleSubmit, formState: { errors } } = useForm()
  const { register: registerUser } = useAuth()

  const [isHiddenPassword, setIsHiddenPassword] = useState<boolean>(true)
  const navigate = useNavigate()

  const onSubmit = async () => {
    if (errors)
      console.log({ errors })
    const name = getValues('name')
    const email = getValues('email')
    const password = getValues('password')

    const res = await registerUser({ name, email, password })

    if (!res) {
      toast.error('email already in use', { position: 'top-center' })
      return
    }
    navigate('/app/dashboard')
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col bg-white border-2 border-gray-100 p-5 rounded-lg"
    >
      <legend className="font-jetbrains font-semibold text-gray-500 text-sm">FULL NAME</legend>
      <fieldset className="flex flex-row border-2 border-gary-100 p-4 rounded-md gap-2 mb-5">
        <User color="oklch(55.1% 0.027 264.364)" />
        <input
          required
          type="text"
          placeholder="Your Name"
          {...register('name')}
        />
      </fieldset>
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
          className="w-full"
          required
          type={isHiddenPassword ? 'password' : 'text'}
          placeholder="**********"
          {...register('password')}
        />
        <button
          type="button"
          onClick={() => setIsHiddenPassword(prev => !prev)}
        >
          <Eye color="oklch(55.1% 0.027 264.364)" />
        </button>
      </fieldset>
      <label className="flex flex-row gap-2 items-center mb-5">
        <Checkbox required className="w-6 h-6" />
        <p>I agree to the Terms and Conditions and the Privacy Policy.</p>
      </label>
      <Button
        type="submit"
        className="bg-torange font-semibold text-lg py-8"
      >
        Create Account
      </Button>
    </form>
  )
}

