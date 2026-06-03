import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, Lock, Mail, User } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"

export const RegisterForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const [isHiddenPassword, setIsHiddenPassword] = useState<boolean>(true)

  const onSubmit = () => {
    if (errors)
      console.log({ errors })
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
        <Checkbox className="w-6 h-6" />
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

