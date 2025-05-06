"use client"

// This file will be the main dashboard after login
// It will integrate with AWS Amplify for data management and session handling

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, FileText, Home, ClipboardCheck, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  // In a real app, this would come from authentication context
  const [userRole, setUserRole] = useState<"patient" | "therapist">("patient")
  const [isLoading, setIsLoading] = useState(true)

  // Simulate data loading
  useEffect(() => {
    // Future integration: Fetch user data from AWS Amplify
    // const fetchUserData = async () => {
    //   try {
    //     const userData = await Auth.currentAuthenticatedUser();
    //     setUserRole(userData.attributes['custom:role']);
    //   } catch (error) {
    //     console.error('Error fetching user data:', error);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };

    // fetchUserData();

    // For now, just simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Toggle role for demo purposes
  const toggleRole = () => {
    setUserRole(userRole === "patient" ? "therapist" : "patient")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-300"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Link href="/dashboard" className="flex items-center gap-2">
              <Image src="/soul-logo.png" alt="Soul Logo" width={30} height={30} />
              <h1 className="text-xl font-medium">soul</h1>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <nav className="flex gap-1 sm:gap-4">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="flex flex-col items-center px-2 sm:flex-row sm:px-3 bg-pink-50"
              >
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
              <Button variant="ghost" size="sm" asChild className="flex flex-col items-center px-2 sm:flex-row sm:px-3">
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
            <h2 className="text-2xl font-medium">
              Bienvenido de nuevo, {userRole === "patient" ? "Alex" : "Dr. Johnson"}
            </h2>
            <p className="text-muted-foreground">
              {userRole === "patient"
                ? "Haz seguimiento de tu progreso y gestiona tus citas"
                : "Gestiona tus pacientes y citas"}
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Demo: </span>
            <Button variant="outline" size="sm" onClick={toggleRole} className="text-xs">
              Cambiar a vista de {userRole === "patient" ? "Terapeuta" : "Paciente"}
            </Button>
          </div>
        </div>

        {/* Dashboard content will be different based on user role */}
        {userRole === "patient" ? <PatientDashboard /> : <TherapistDashboard />}
      </main>
    </div>
  )
}

// Patient dashboard component
function PatientDashboard() {
  // Future integration: Fetch patient data from AWS Amplify and API
  return (
    <div className="space-y-8">
      {/* Appointments section */}
      <section>
        <h3 className="text-lg font-medium mb-4">Tus Próximas Citas</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Sample appointment cards */}
          <Card className="border-blue-100 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Sesión con Dra. Sarah Johnson</CardTitle>
              <CardDescription>Terapia Individual</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-blue-400" />
                <span>Mañana, 10:00 AM</span>
              </div>
              <Button className="w-full mt-4 bg-blue-300 hover:bg-blue-400 transition-all duration-300" size="sm">
                Unirse a la Sesión
              </Button>
            </CardContent>
          </Card>

          {/* More appointment cards would be dynamically generated */}
        </div>
      </section>

      {/* Mood tracking section */}
      <section>
        <h3 className="text-lg font-medium mb-4">Tu Seguimiento de Ánimo</h3>
        <Card className="border-green-100">
          <CardHeader>
            <CardTitle className="text-base">Registros Recientes de Ánimo</CardTitle>
            <CardDescription>Haz seguimiento de tu bienestar emocional</CardDescription>
          </CardHeader>
          <CardContent>
            {/* This would be connected to the diary entries in RDS */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-500">😊</span>
                  </div>
                  <div>
                    <p className="font-medium">Feliz</p>
                    <p className="text-xs text-muted-foreground">Hoy, 9:30 AM</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-green-500" asChild>
                  <Link href="/diary">Ver</Link>
                </Button>
              </div>
            </div>
            <Button className="w-full mt-4 bg-green-300 hover:bg-green-400 transition-all duration-300" asChild>
              <Link href="/diary">Registrar Ánimo de Hoy</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Assessments section */}
      <section>
        <h3 className="text-lg font-medium mb-4">Evaluaciones Recomendadas</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* This would be connected to the RESTful assessment endpoints */}
          <Card className="border-purple-100 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Evaluación de Ansiedad</CardTitle>
              <CardDescription>5 preguntas • ~2 min</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Evalúa tus niveles de ansiedad y síntomas</p>
              <Button
                className="w-full bg-purple-300 hover:bg-purple-400 transition-all duration-300"
                size="sm"
                asChild
              >
                <Link href="/assessments">Iniciar Evaluación</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

// Therapist dashboard component
function TherapistDashboard() {
  // Future integration: Fetch therapist data from AWS Amplify and API
  return (
    <div className="space-y-8">
      {/* Appointments section */}
      <section>
        <h3 className="text-lg font-medium mb-4">Citas de Hoy</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Sample appointment cards */}
          <Card className="border-blue-100 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Alex Johnson</CardTitle>
              <CardDescription>Terapia Individual</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-blue-400" />
                <span>Hoy, 10:00 AM</span>
              </div>
              <div className="flex gap-2 mt-4">
                <Button className="flex-1 bg-blue-300 hover:bg-blue-400 transition-all duration-300" size="sm">
                  Iniciar Sesión
                </Button>
                <Button className="flex-1" variant="outline" size="sm">
                  Reprogramar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Patient updates section */}
      <section>
        <h3 className="text-lg font-medium mb-4">Actualizaciones de Pacientes</h3>
        <Card className="border-green-100">
          <CardHeader>
            <CardTitle className="text-base">Actividad Reciente de Pacientes</CardTitle>
            <CardDescription>Haz seguimiento del progreso de tus pacientes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <ClipboardCheck className="h-4 w-4 text-purple-500" />
                  </div>
                  <div>
                    <p className="font-medium">Alex Johnson completó la Evaluación de Ansiedad</p>
                    <p className="text-xs text-muted-foreground">Hoy, 9:30 AM</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-purple-500">
                  Ver Resultados
                </Button>
              </div>
            </div>
            <Button className="w-full mt-4 bg-blue-300 hover:bg-blue-400 transition-all duration-300">
              Ver Todas las Actualizaciones de Pacientes
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
