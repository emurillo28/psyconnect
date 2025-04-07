"use client"

import Link from "next/link"
import { Calendar, FileText, Home, ClipboardCheck, User } from "lucide-react"
import React from 'react';
import { Avatar } from '../../components/Avatar';
import { GamificationProgress } from '../../components/GamificationProgress';
import { Achievements } from '../../components/Achievements';
import { Rewards } from '../../components/Rewards';
import { Notifications } from '../../components/Notifications';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

export default function Dashboard() {
  // In a real app, this would come from authentication
  const [userRole, setUserRole] = useState<"patient" | "therapist">("patient")

  // Toggle role for demo purposes
  const toggleRole = () => {
    setUserRole(userRole === "patient" ? "therapist" : "patient")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Section */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center space-x-4">
                <Avatar size="large" showLevel showAccessories />
                <div>
                  <h1 className="text-2xl font-bold">Welcome back!</h1>
                  <p className="text-gray-600">Keep up the good work on your mental health journey</p>
                </div>
              </div>
            </div>

            {/* Progress Section */}
            <div className="bg-white rounded-lg shadow p-6">
              <GamificationProgress />
            </div>

            {/* Achievements Section */}
            <div className="bg-white rounded-lg shadow p-6">
              <Achievements />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Rewards Section */}
            <div className="bg-white rounded-lg shadow p-6">
              <Rewards />
            </div>

            {/* Notifications Section */}
            <div className="bg-white rounded-lg shadow p-6">
              <Notifications />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PatientDashboard() {
  return (
    <div className="space-y-8">
      <section>
        <h3 className="text-lg font-medium mb-4">Tus Próximas Citas</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
          <Card className="border-blue-100 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Sesión con Dr. Michael Chen</CardTitle>
              <CardDescription>Terapia de Grupo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-blue-400" />
                <span>March 19, 2:30 PM</span>
              </div>
              <Button className="w-full mt-4 bg-blue-300 hover:bg-blue-400 transition-all duration-300" size="sm">
                Ver Detalles
              </Button>
            </CardContent>
          </Card>
          <div className="flex items-center justify-center p-6 border border-dashed border-gray-200 rounded-lg">
            <Button variant="outline" className="text-blue-500" asChild>
              <Link href="/appointments">
                <Calendar className="mr-2 h-4 w-4" />
                Programar Nueva Cita
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-medium mb-4">Tu Seguimiento de Ánimo</h3>
        <Card className="border-green-100">
          <CardHeader>
            <CardTitle className="text-base">Registros Recientes de Ánimo</CardTitle>
            <CardDescription>Haz seguimiento de tu bienestar emocional</CardDescription>
          </CardHeader>
          <CardContent>
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
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-500">😌</span>
                  </div>
                  <div>
                    <p className="font-medium">Tranquilo</p>
                    <p className="text-xs text-muted-foreground">Ayer, 8:15 PM</p>
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

      <section>
        <h3 className="text-lg font-medium mb-4">Evaluaciones Recomendadas</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
          <Card className="border-purple-100 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Evaluación de Ánimo</CardTitle>
              <CardDescription>5 preguntas • ~2 min</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Evalúa tus patrones de ánimo y bienestar emocional</p>
              <Button
                className="w-full bg-purple-300 hover:bg-purple-400 transition-all duration-300"
                size="sm"
                asChild
              >
                <Link href="/assessments">Start Assessment</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

function TherapistDashboard() {
  return (
    <div className="space-y-8">
      <section>
        <h3 className="text-lg font-medium mb-4">Citas de Hoy</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
          <Card className="border-blue-100 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Sesión de Grupo</CardTitle>
              <CardDescription>Manejo de Ansiedad</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-blue-400" />
                <span>Hoy, 2:30 PM</span>
              </div>
              <div className="flex gap-2 mt-4">
                <Button className="flex-1 bg-blue-300 hover:bg-blue-400 transition-all duration-300" size="sm">
                  Iniciar Sesión
                </Button>
                <Button className="flex-1" variant="outline" size="sm">
                  Ver Asistentes
                </Button>
              </div>
            </CardContent>
          </Card>
          <div className="flex items-center justify-center p-6 border border-dashed border-gray-200 rounded-lg">
            <Button variant="outline" className="text-blue-500" asChild>
              <Link href="/appointments">
                <Calendar className="mr-2 h-4 w-4" />
                Gestionar Agenda
              </Link>
            </Button>
          </div>
        </div>
      </section>

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
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <FileText className="h-4 w-4 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium">Emily Chen añadió una nueva entrada al diario</p>
                    <p className="text-xs text-muted-foreground">Ayer, 8:15 PM</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-green-500">
                  Revisar
                </Button>
              </div>
            </div>
            <Button className="w-full mt-4 bg-blue-300 hover:bg-blue-400 transition-all duration-300">
              Ver Todas las Actualizaciones de Pacientes
            </Button>
          </CardContent>
        </Card>
      </section>

      <section>
        <h3 className="text-lg font-medium mb-4">Gestionar Evaluaciones</h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-purple-100 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Asignar Evaluaciones</CardTitle>
              <CardDescription>Enviar evaluaciones a pacientes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Asigna evaluaciones personalizadas para hacer seguimiento del progreso del paciente
              </p>
              <Button className="w-full bg-purple-300 hover:bg-purple-400 transition-all duration-300" size="sm">
                Asignar Evaluación
              </Button>
            </CardContent>
          </Card>
          <Card className="border-purple-100 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Crear Evaluación Personalizada</CardTitle>
              <CardDescription>Diseña tu propia evaluación</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Crea evaluaciones personalizadas adaptadas a las necesidades de tus pacientes
              </p>
              <Button className="w-full bg-purple-300 hover:bg-purple-400 transition-all duration-300" size="sm">
                Crear Evaluación
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

