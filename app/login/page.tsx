"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/contexts/auth-context"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { login, isLoading, error } = useAuth()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    await login(email, password)
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex flex-col items-center justify-center p-4">
      <Link href="/" className="mb-8 flex flex-col items-center">
        <Image src="/soul-logo.png" alt="Soul Logo" width={60} height={60} className="mb-2" />
        <span className="text-xl font-medium">soul</span>
      </Link>

      <Card className="w-full max-w-md transition-all duration-300 hover:shadow-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-medium">Iniciar sesión</CardTitle>
          <CardDescription>Ingresa tu correo electrónico y contraseña para acceder a tu cuenta</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                type="email"
                placeholder="nombre@ejemplo.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Contraseña</Label>
                <Link href="#" className="text-xs text-blue-500 hover:text-blue-600">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <Button
              type="submit"
              className="w-full bg-blue-300 hover:bg-blue-400 transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center text-muted-foreground">
            ¿No tienes una cuenta?{" "}
            <Link href="/register" className="text-blue-500 hover:text-blue-600">
              Regístrate
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
