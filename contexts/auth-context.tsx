"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import { setToken, clearToken, isAuthenticated, getUserInfo } from "@/lib/auth"

type User = {
  id: string
  name: string
  email: string
  role: string
} | null

type AuthContextType = {
  user: User
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string, role: string) => Promise<void>
  logout: () => void
  isLoading: boolean
  error: string | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Check if the user is authenticated on mount
    const checkAuth = async () => {
      if (isAuthenticated()) {
        setUser(getUserInfo())
      }
      setIsLoading(false)
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    setError(null)

    try {
      // Future integration: API call to login
      // const response = await api.post('/auth/login', { email, password });
      // setToken(response.data.token);

      // For demo purposes, simulate a successful login
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6IkFsZXggSm9obnNvbiIsImVtYWlsIjoiYWxleEBleGFtcGxlLmNvbSIsInJvbGUiOiJwYXRpZW50IiwiZXhwIjoxOTg0NjU2NjIwfQ"
      setToken(token)
      setUser(getUserInfo())
      router.push("/dashboard")
    } catch (err: any) {
      setError(err.response?.data?.message || "Error al iniciar sesión")
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (name: string, email: string, password: string, role: string) => {
    setIsLoading(true)
    setError(null)

    try {
      // Future integration: API call to register
      // const response = await api.post('/auth/register', { name, email, password, role });

      // For demo purposes, redirect to login after successful registration
      router.push("/login")
    } catch (err: any) {
      setError(err.response?.data?.message || "Error al registrarse")
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    clearToken()
    setUser(null)
    router.push("/")
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading, error }}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
