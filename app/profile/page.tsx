"use client"

import { Textarea } from "@/components/ui/textarea"

import { useState } from "react"
import Link from "next/link"
import { Calendar, FileText, Home, ClipboardCheck, User, LogOut, Settings, Bell, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProfilePage() {
  const [userRole, setUserRole] = useState<"patient" | "therapist">("patient")

  // Toggle role for demo purposes
  const toggleRole = () => {
    setUserRole(userRole === "patient" ? "therapist" : "patient")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-medium">psyconnect</h1>
          </div>
          <div className="flex items-center gap-4">
            <nav className="flex gap-1 sm:gap-4">
              <Button variant="ghost" size="sm" asChild className="flex flex-col items-center px-2 sm:flex-row sm:px-3">
                <Link href="/dashboard">
                  <Home className="h-5 w-5 text-pink-300" />
                  <span className="hidden text-xs sm:ml-2 sm:inline-block sm:text-sm">Inicio</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild className="flex flex-col items-center px-2 sm:flex-row sm:px-3">
                <Link href="/appointments">
                  <Calendar className="h-5 w-5 text-blue-300" />
                  <span className="hidden text-xs sm:ml-2 sm:inline-block sm:text-sm">Citas</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild className="flex flex-col items-center px-2 sm:flex-row sm:px-3">
                <Link href="/diary">
                  <FileText className="h-5 w-5 text-green-300" />
                  <span className="hidden text-xs sm:ml-2 sm:inline-block sm:text-sm">Diario</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild className="flex flex-col items-center px-2 sm:flex-row sm:px-3">
                <Link href="/assessments">
                  <ClipboardCheck className="h-5 w-5 text-purple-300" />
                  <span className="hidden text-xs sm:ml-2 sm:inline-block sm:text-sm">Evaluaciones</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="flex flex-col items-center px-2 sm:flex-row sm:px-3 bg-yellow-50"
              >
                <Link href="/profile">
                  <User className="h-5 w-5 text-yellow-300" />
                  <span className="hidden text-xs sm:ml-2 sm:inline-block sm:text-sm">Perfil</span>
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl font-medium">Configuración de Perfil</h2>
            <p className="text-muted-foreground">Gestiona la configuración y preferencias de tu cuenta</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Demo: </span>
            <Button variant="outline" size="sm" onClick={toggleRole} className="text-xs">
              Cambiar a vista de {userRole === "patient" ? "Terapeuta" : "Paciente"}
            </Button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          {/* Sidebar */}
          <Card className="border-yellow-100 md:col-span-1 transition-all duration-300 hover:shadow-md">
            <CardContent className="p-4">
              <div className="flex flex-col items-center space-y-4 py-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder-user.jpg" alt="Profile" />
                  <AvatarFallback className="bg-yellow-100 text-yellow-800">
                    {userRole === "patient" ? "AJ" : "SJ"}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-center">
                  <h3 className="font-medium">{userRole === "patient" ? "Alex Johnson" : "Dr. Sarah Johnson"}</h3>
                  <p className="text-sm text-muted-foreground capitalize">{userRole}</p>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Cambiar Foto
                </Button>
              </div>

              <Separator className="my-4" />

              <div className="space-y-1">
                <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                  <Link href="/profile">
                    <User className="mr-2 h-4 w-4" />
                    Información Personal
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                  <Link href="/profile?tab=security">
                    <Shield className="mr-2 h-4 w-4" />
                    Seguridad
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                  <Link href="/profile?tab=notifications">
                    <Bell className="mr-2 h-4 w-4" />
                    Notificaciones
                  </Link>
                </Button>
                {userRole === "therapist" && (
                  <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                    <Link href="/profile?tab=practice">
                      <Settings className="mr-2 h-4 w-4" />
                      Configuración de Práctica
                    </Link>
                  </Button>
                )}
              </div>

              <Separator className="my-4" />

              <Button
                variant="outline"
                size="sm"
                className="w-full text-red-500 hover:bg-red-50 hover:text-red-600"
                asChild
              >
                <Link href="/">
                  <LogOut className="mr-2 h-4 w-4" />
                  Cerrar Sesión
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Main Content */}
          <Card className="border-yellow-100 md:col-span-3 transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <CardTitle>Configuración de Cuenta</CardTitle>
              <CardDescription>Actualiza tu información personal y preferencias</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="personal">
                <TabsList className="mb-4">
                  <TabsTrigger value="personal">Información Personal</TabsTrigger>
                  <TabsTrigger value="security">Seguridad</TabsTrigger>
                  <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
                  {userRole === "therapist" && <TabsTrigger value="practice">Práctica</TabsTrigger>}
                </TabsList>

                <TabsContent value="personal" className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">Nombre</Label>
                        <Input id="first-name" defaultValue={userRole === "patient" ? "Alex" : "Sarah"} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Apellido</Label>
                        <Input id="last-name" defaultValue="Johnson" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico</Label>
                      <Input id="email" type="email" defaultValue="alex@example.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Número de Teléfono</Label>
                      <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timezone">Zona Horaria</Label>
                      <select
                        id="timezone"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option>Pacific Time (US & Canada)</option>
                        <option>Mountain Time (US & Canada)</option>
                        <option>Central Time (US & Canada)</option>
                        <option>Eastern Time (US & Canada)</option>
                      </select>
                    </div>
                  </div>

                  <Button className="bg-yellow-300 hover:bg-yellow-400 transition-all duration-300">
                    Guardar Cambios
                  </Button>
                </TabsContent>

                <TabsContent value="security" className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Contraseña Actual</Label>
                      <Input id="current-password" type="password" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="new-password">Nueva Contraseña</Label>
                      <Input id="new-password" type="password" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirmar Nueva Contraseña</Label>
                      <Input id="confirm-password" type="password" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="2fa">Autenticación de Dos Factores</Label>
                        <Switch id="2fa" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Añade una capa extra de seguridad a tu cuenta habilitando la autenticación de dos factores.
                      </p>
                    </div>
                  </div>

                  <Button className="bg-yellow-300 hover:bg-yellow-400 transition-all duration-300">
                    Actualizar Contraseña
                  </Button>
                </TabsContent>

                <TabsContent value="notifications" className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="email-notifications">Notificaciones por Correo Electrónico</Label>
                        <Switch id="email-notifications" defaultChecked />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Recibe notificaciones por correo electrónico para citas, recordatorios y actualizaciones.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="sms-notifications">Notificaciones SMS</Label>
                        <Switch id="sms-notifications" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Recibe notificaciones por mensaje de texto para citas y recordatorios.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="app-notifications">Notificaciones de la Aplicación</Label>
                        <Switch id="app-notifications" defaultChecked />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Recibe notificaciones en la aplicación para mensajes, citas y actualizaciones.
                      </p>
                    </div>
                  </div>

                  <Button className="bg-yellow-300 hover:bg-yellow-400 transition-all duration-300">
                    Guardar Preferencias
                  </Button>
                </TabsContent>

                {userRole === "therapist" && (
                  <TabsContent value="practice" className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="practice-name">Nombre de la Práctica</Label>
                        <Input id="practice-name" defaultValue="Servicios de Terapia Johnson" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="specialization">Especialización</Label>
                        <Input id="specialization" defaultValue="Ansiedad, Depresión, Trauma" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="bio">Biografía Profesional</Label>
                        <Textarea
                          id="bio"
                          rows={4}
                          defaultValue="Terapeuta licenciada con más de 10 años de experiencia especializada en ansiedad, depresión y trauma. Utilizo una combinación de terapia cognitivo-conductual y técnicas de mindfulness para ayudar a mis clientes a alcanzar sus objetivos."
                        />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="accepting-patients">Aceptando Nuevos Pacientes</Label>
                          <Switch id="accepting-patients" defaultChecked />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Desactiva esto cuando no estés aceptando nuevos pacientes.
                        </p>
                      </div>
                    </div>

                    <Button className="bg-yellow-300 hover:bg-yellow-400 transition-all duration-300">
                      Actualizar Información de Práctica
                    </Button>
                  </TabsContent>
                )}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

