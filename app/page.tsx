import Link from "next/link"
import Image from "next/image"
import { Calendar, FileText, ClipboardCheck, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-70"></div>

        <div className="container relative px-4 py-20 md:py-32 flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-6">
            <Image src="/soul-logo.png" alt="Soul Logo" width={80} height={80} priority />
          </div>

          <h1 className="text-4xl md:text-5xl font-medium mb-4">the soul app</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
            Tu espacio personal para el bienestar mental y la autorreflexión
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-blue-300 hover:bg-blue-400 transition-all duration-300 px-8 py-6 text-base" asChild>
              <Link href="/login">Iniciar Sesión</Link>
            </Button>
            <Button
              className="bg-purple-300 hover:bg-purple-400 transition-all duration-300 px-8 py-6 text-base"
              asChild
            >
              <Link href="/register">Registrarse</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-medium mb-12 text-center">Características</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Feature 1: Citas */}
          <Card className="border-blue-100 bg-gradient-to-br from-white to-blue-50 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] float-animation">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-400" />
                Citas
              </CardTitle>
              <CardDescription>Programa y gestiona tus sesiones de terapia</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Reserva, reprograma y haz seguimiento de tus citas de terapia en un solo lugar.
              </p>
            </CardContent>
          </Card>

          {/* Feature 2: Diario Emocional */}
          <Card className="border-green-100 bg-gradient-to-br from-white to-green-50 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] float-animation-slow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-green-400" />
                Diario Emocional
              </CardTitle>
              <CardDescription>Haz seguimiento de tu estado de ánimo y sentimientos</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Registra tus pensamientos y sentimientos para identificar patrones y seguir tu progreso.
              </p>
            </CardContent>
          </Card>

          {/* Feature 3: Evaluaciones */}
          <Card className="border-purple-100 bg-gradient-to-br from-white to-purple-50 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] float-animation-fast">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5 text-purple-400" />
                Evaluaciones
              </CardTitle>
              <CardDescription>Evalúa tu salud mental</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Completa evaluaciones interactivas para ayudar a tu terapeuta a entender tus necesidades.
              </p>
            </CardContent>
          </Card>

          {/* Feature 4: Atención Personalizada */}
          <Card className="border-pink-100 bg-gradient-to-br from-white to-pink-50 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] float-animation">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-pink-400" />
                Atención Personalizada
              </CardTitle>
              <CardDescription>Adaptada a tus necesidades</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Recibe recursos y recomendaciones personalizadas basadas en tu progreso.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* For Patients & Therapists */}
      <section className="bg-gradient-to-r from-purple-50 to-blue-50 py-16">
        <div className="container px-4">
          <h2 className="text-2xl md:text-3xl font-medium mb-12 text-center">Para Pacientes y Terapeutas</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Patient Section */}
            <div className="bg-white p-8 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
              <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                <User className="h-5 w-5 text-blue-400" />
                Para Pacientes
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-blue-100 p-1 mt-1">
                    <svg className="h-3 w-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Haz seguimiento diario de tu bienestar emocional
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-blue-100 p-1 mt-1">
                    <svg className="h-3 w-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Programa citas con tu terapeuta
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-blue-100 p-1 mt-1">
                    <svg className="h-3 w-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Completa evaluaciones para seguir tu progreso
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-blue-100 p-1 mt-1">
                    <svg className="h-3 w-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Accede a recursos y ejercicios personalizados
                </li>
              </ul>
              <Button className="mt-6 bg-blue-300 hover:bg-blue-400 transition-all duration-300 w-full" asChild>
                <Link href="/register?role=patient">Registrarse como Paciente</Link>
              </Button>
            </div>

            {/* Therapist Section */}
            <div className="bg-white p-8 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
              <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
                <User className="h-5 w-5 text-purple-400" />
                Para Terapeutas
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-purple-100 p-1 mt-1">
                    <svg className="h-3 w-3 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Gestiona las citas de tus pacientes
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-purple-100 p-1 mt-1">
                    <svg className="h-3 w-3 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Revisa el progreso y las evaluaciones de los pacientes
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-purple-100 p-1 mt-1">
                    <svg className="h-3 w-3 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Asigna evaluaciones y ejercicios personalizados
                </li>
                <li className="flex items-start gap-2">
                  <span className="rounded-full bg-purple-100 p-1 mt-1">
                    <svg className="h-3 w-3 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Haz seguimiento de los patrones emocionales de los pacientes a lo largo del tiempo
                </li>
              </ul>
              <Button className="mt-6 bg-purple-300 hover:bg-purple-400 transition-all duration-300 w-full" asChild>
                <Link href="/register?role=therapist">Registrarse como Terapeuta</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-8">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center gap-2">
              <Image src="/soul-logo.png" alt="Soul Logo" width={30} height={30} />
              <div>
                <h2 className="text-xl font-medium">soul</h2>
                <p className="text-sm text-muted-foreground">Tu compañero de bienestar mental</p>
              </div>
            </div>
            <div className="flex gap-6">
              <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground">
                Iniciar Sesión
              </Link>
              <Link href="/register" className="text-sm text-muted-foreground hover:text-foreground">
                Registrarse
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacidad
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Términos
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
