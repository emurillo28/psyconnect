"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Clock, Home, Plus, Calendar, FileText, ClipboardCheck, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AppointmentsPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()

    // First day of the month
    const firstDay = new Date(year, month, 1)
    // Last day of the month
    const lastDay = new Date(year, month + 1, 0)

    // Get the day of the week for the first day (0 = Sunday, 6 = Saturday)
    const firstDayOfWeek = firstDay.getDay()

    // Calculate days from previous month to show
    const daysFromPrevMonth = firstDayOfWeek

    // Calculate total days to show (previous month days + current month days)
    const totalDays = daysFromPrevMonth + lastDay.getDate()

    // Calculate rows needed (7 days per row)
    const rows = Math.ceil(totalDays / 7)

    // Generate calendar days
    interface CalendarDay {
      date: Date
      dayOfMonth: number
      isCurrentMonth: boolean
      isToday: boolean
      hasAppointment: boolean
    }
    
    const days: CalendarDay[] = []
    let dayCount = 1 - daysFromPrevMonth

    for (let i = 0; i < rows * 7; i++) {
      // Create date safely by using the current month's year and month
      const date = new Date(year, month, dayCount)
      const isCurrentMonth = date.getMonth() === month

      days.push({
        date,
        dayOfMonth: date.getDate(),
        isCurrentMonth,
        isToday: isCurrentMonth && date.toDateString() === new Date().toDateString(),
        hasAppointment: isCurrentMonth && [5, 12, 19, 26].includes(date.getDate()),
      })

      dayCount++
    }

    return days
  }

  const days = generateCalendarDays()
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ]
  const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
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
                <Link href="/">
                  <Home className="h-5 w-5 text-pink-200" />
                  <span className="hidden text-xs sm:ml-2 sm:inline-block sm:text-sm">Inicio</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="flex flex-col items-center px-2 sm:flex-row sm:px-3 bg-blue-50"
              >
                <Link href="/appointments">
                  <Calendar className="h-5 w-5 text-blue-200" />
                  <span className="hidden text-xs sm:ml-2 sm:inline-block sm:text-sm">Citas</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild className="flex flex-col items-center px-2 sm:flex-row sm:px-3">
                <Link href="/diary">
                  <FileText className="h-5 w-5 text-green-200" />
                  <span className="hidden text-xs sm:ml-2 sm:inline-block sm:text-sm">Diario</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild className="flex flex-col items-center px-2 sm:flex-row sm:px-3">
                <Link href="/assessments">
                  <ClipboardCheck className="h-5 w-5 text-purple-200" />
                  <span className="hidden text-xs sm:ml-2 sm:inline-block sm:text-sm">Evaluaciones</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild className="flex flex-col items-center px-2 sm:flex-row sm:px-3">
                <Link href="/profile">
                  <User className="h-5 w-5 text-yellow-200" />
                  <span className="hidden text-xs sm:ml-2 sm:inline-block sm:text-sm">Perfil</span>
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Calendar */}
          <Card className="md:col-span-2 border-blue-100 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] float-animation-slow">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
              <div className="flex items-center justify-between">
                <CardTitle>Calendario</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" onClick={prevMonth} className="border-blue-200 text-blue-500">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="min-w-24 text-center font-medium">
                    {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                  </span>
                  <Button variant="outline" size="icon" onClick={nextMonth} className="border-blue-200 text-blue-500">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1">
                {dayNames.map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-muted-foreground">
                    {day}
                  </div>
                ))}
                {days.map((day, index) => (
                  <button
                    key={index}
                    className={`aspect-square rounded-md p-2 text-center text-sm ${
                      day.isCurrentMonth ? "hover:bg-blue-50" : "text-gray-300"
                    } ${day.isToday ? "bg-blue-100 font-bold" : ""} ${
                      selectedDate && day.date.toDateString() === selectedDate.toDateString() ? "bg-blue-200" : ""
                    }`}
                    onClick={() => setSelectedDate(day.date)}
                    disabled={!day.isCurrentMonth}
                  >
                    <span>{day.dayOfMonth}</span>
                    {day.hasAppointment && <div className="mx-auto mt-1 h-1 w-1 rounded-full bg-blue-400"></div>}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Appointments List */}
          <Card className="border-blue-100 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] float-animation">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
              <CardTitle>Próximas Sesiones</CardTitle>
              <CardDescription>
                {selectedDate
                  ? `Citas para ${selectedDate.toLocaleDateString()}`
                  : "Tus sesiones de terapia programadas"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-lg border border-blue-100 p-4 bg-white transition-all duration-300 hover:shadow-sm hover:translate-y-[-2px]">
                  <div className="rounded-full bg-blue-100 p-2">
                    <Clock className="h-4 w-4 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium">Dra. Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">Mañana, 10:00 AM</p>
                    <p className="mt-2 text-sm">Sesión de Terapia Individual</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border border-blue-100 p-4 bg-white transition-all duration-300 hover:shadow-sm hover:translate-y-[-2px]">
                  <div className="rounded-full bg-blue-100 p-2">
                    <Clock className="h-4 w-4 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium">Dr. Michael Chen</p>
                    <p className="text-sm text-muted-foreground">19 de marzo, 2:30 PM</p>
                    <p className="mt-2 text-sm">Sesión de Terapia de Grupo</p>
                  </div>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-blue-200 hover:bg-blue-300 transition-all duration-300">
                      <Plus className="mr-2 h-4 w-4" />
                      Programar Nueva Cita
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Programar Cita</DialogTitle>
                      <DialogDescription>Elige tu terapeuta, fecha y hora preferidos.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="therapist">Terapeuta</Label>
                        <Select>
                          <SelectTrigger id="therapist">
                            <SelectValue placeholder="Seleccionar terapeuta" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dr-johnson">Dra. Sarah Johnson</SelectItem>
                            <SelectItem value="dr-chen">Dr. Michael Chen</SelectItem>
                            <SelectItem value="dr-patel">Dra. Anita Patel</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="date">Fecha</Label>
                        <input
                          id="date"
                          type="date"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="time">Hora</Label>
                        <Select>
                          <SelectTrigger id="time">
                            <SelectValue placeholder="Seleccionar hora" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="9:00">9:00 AM</SelectItem>
                            <SelectItem value="10:00">10:00 AM</SelectItem>
                            <SelectItem value="11:00">11:00 AM</SelectItem>
                            <SelectItem value="13:00">1:00 PM</SelectItem>
                            <SelectItem value="14:00">2:00 PM</SelectItem>
                            <SelectItem value="15:00">3:00 PM</SelectItem>
                            <SelectItem value="16:00">4:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="type">Tipo de Sesión</Label>
                        <Select>
                          <SelectTrigger id="type">
                            <SelectValue placeholder="Seleccionar tipo de sesión" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="individual">Terapia Individual</SelectItem>
                            <SelectItem value="group">Terapia de Grupo</SelectItem>
                            <SelectItem value="assessment">Evaluación Inicial</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit" className="bg-blue-200 hover:bg-blue-300 transition-all duration-300">
                        Programar Cita
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

