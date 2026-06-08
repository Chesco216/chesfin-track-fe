import { create } from 'zustand'
import type { User } from '../interfaces/User.interface';
import type { CreateUserDto } from '../dto/create-user.dto';
import type { LoginUserDto } from '../dto/login-user.dto';
import { loginAction } from '../actions/login-action';
import { registerAction } from '../actions/register-action';
import { checkAuthstatus } from '../actions/check-auth-status-action';

type AuthStatus = "authenticated" | "not-authenticated" | "checking"

type UserState = {
  user: User | null;
  token: string | null;
  authStatus: AuthStatus
}

type AuthActions = {
  login: (credentials: LoginUserDto) => Promise<boolean>
  register: (payload: CreateUserDto) => Promise<boolean>
  checkAuthStatus: () => Promise<boolean>
  logout: () => void
}

type AuthState = UserState & AuthActions

export const useAuth = create<AuthState>()((set) => ({
  user: null,
  token: null,
  authStatus: 'not-authenticated',
  login: async (credentials: LoginUserDto) => {
    try {
      const res = await loginAction(credentials)
      localStorage.setItem('token', res.token)
      set({ ...res, authStatus: 'authenticated' })
      return true
    } catch (error) {
      localStorage.removeItem('token')
      return false
    }
  },
  register: async (user: CreateUserDto) => {
    try {
      const res = await registerAction(user)
      localStorage.setItem('token', res.token)
      set({ ...res, authStatus: 'authenticated' })
      return true
    } catch (error) {
      return false
    }
  },
  checkAuthStatus: async () => {
    try {
      const res = await checkAuthstatus()
      localStorage.setItem('token', res.token)
      set(res)
      return true
    } catch (error) {
      set({ user: null, token: null, authStatus: 'not-authenticated' })
      return false

    }
  },
  logout: () => {
    localStorage.removeItem('token')
    set({ user: null, token: null, authStatus: 'not-authenticated' })
  }
}))
