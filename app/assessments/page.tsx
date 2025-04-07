"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Home, Calendar, FileText, ClipboardCheck, User, ArrowLeft, ArrowRight, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

// Sample assessment data
const assessments = [
  {
    id: "anxiety",
    title: "Evaluación de Ansiedad",
    description: "Evalúa tus niveles de ansiedad y síntomas",
    color: "purple",
    questions: [
      {
        id: "q1",
        question: "¿Con qué frecuencia te sientes nervioso, ansioso o al límite?",
        options: [
          { value: "0", label: "Nunca" },
          { value: "1", label: "Varios días" },
          { value: "2", label: "Más de la mitad de los días" },
          { value: "3", label: "Casi todos los días" },
        ],
      },
      {
        id: "q2",
        question: "¿Con qué frecuencia te preocupas demasiado por diferentes cosas?",
        options: [
          { value: "0", label: "Nunca" },
          { value: "1", label: "Varios días" },
          { value: "2", label: "Más de la mitad de los días" },
          { value: "3", label: "Casi todos los días" },
        ],
      },
      {
        id: "q3",
        question: "¿Con qué frecuencia tienes problemas para relajarte?",
        options: [
          { value: "0", label: "Nunca" },
          { value: "1", label: "Varios días" },
          { value: "2", label: "Más de la mitad de los días" },
          { value: "3", label: "Casi todos los días" },
        ],
      },
      {
        id: "q4",
        question: "¿Con qué frecuencia te sientes inquieto o tienes dificultad para quedarte quieto?",
        options: [
          { value: "0", label: "Nunca" },
          { value: "1", label: "Varios días" },
          { value: "2", label: "Más de la mitad de los días" },
          { value: "3", label: "Casi todos los días" },
        ],
      },
      {
        id: "q5",
        question: "¿Con qué frecuencia te irritas o te enojas fácilmente?",
        options: [
          { value: "0", label: "Nunca" },
          { value: "1", label: "Varios días" },
          { value: "2", label: "Más de la mitad de los días" },
          { value: "3", label: "Casi todos los días" },
        ],
      },
    ],
  },
  {
    id: "mood",
    title: "Evaluación de Estado de Ánimo",
    description: "Evalúa tus patrones de estado de ánimo y bienestar emocional",
    color: "blue",
    questions: [
      {
        id: "q1",
        question: "¿Con qué frecuencia sientes poco interés o placer en hacer cosas?",
        options: [
          { value: "0", label: "Nunca" },
          { value: "1", label: "Varios días" },
          { value: "2", label: "Más de la mitad de los días" },
          { value: "3", label: "Casi todos los días" },
        ],
      },
      {
        id: "q2",
        question: "¿Con qué frecuencia te sientes decaído, deprimido o sin esperanza?",
        options: [
          { value: "0", label: "Nunca" },
          { value: "1", label: "Varios días" },
          { value: "2", label: "Más de la mitad de los días" },
          { value: "3", label: "Casi todos los días" },
        ],
      },
      {
        id: "q3",
        question:
          "¿Con qué frecuencia tienes problemas para conciliar el sueño, para mantenerte dormido o duermes demasiado?",
        options: [
          { value: "0", label: "Nunca" },
          { value: "1", label: "Varios días" },
          { value: "2", label: "Más de la mitad de los días" },
          { value: "3", label: "Casi todos los días" },
        ],
      },
      {
        id: "q4",
        question: "¿Con qué frecuencia te sientes cansado o tienes poca energía?",
        options: [
          { value: "0", label: "Nunca" },
          { value: "1", label: "Varios días" },
          { value: "2", label: "Más de la mitad de los días" },
          { value: "3", label: "Casi todos los días" },
        ],
      },
      {
        id: "q5",
        question: "¿Con qué frecuencia te sientes mal contigo mismo o sientes que eres un fracaso?",
        options: [
          { value: "0", label: "Nunca" },
          { value: "1", label: "Varios días" },
          { value: "2", label: "Más de la mitad de los días" },
          { value: "3", label: "Casi todos los días" },
        ],
      },
    ],
  },
  {
    id: "stress",
    title: "Evaluación de Estrés",
    description: "Evalúa tus niveles de estrés y mecanismos de afrontamiento",
    color: "pink",
    questions: [
      {
        id: "q1",
        question: "¿Con qué frecuencia te has sentido molesto por algo que sucedió inesperadamente?",
        options: [
          { value: "0", label: "Nunca" },
          { value: "1", label: "Casi nunca" },
          { value: "2", label: "A veces" },
          { value: "3", label: "Con bastante frecuencia" },
          { value: "4", label: "Con mucha frecuencia" },
        ],
      },
      {
        id: "q2",
        question: "¿Con qué frecuencia has sentido que eras incapaz de controlar las cosas importantes en tu vida?",
        options: [
          { value: "0", label: "Nunca" },
          { value: "1", label: "Casi nunca" },
          { value: "2", label: "A veces" },
          { value: "3", label: "Con bastante frecuencia" },
          { value: "4", label: "Con mucha frecuencia" },
        ],
      },
      {
        id: "q3",
        question: "¿Con qué frecuencia te has sentido nervioso y estresado?",
        options: [
          { value: "0", label: "Nunca" },
          { value: "1", label: "Casi nunca" },
          { value: "2", label: "A veces" },
          { value: "3", label: "Con bastante frecuencia" },
          { value: "4", label: "Con mucha frecuencia" },
        ],
      },
      {
        id: "q4",
        question: "¿Con qué frecuencia te has sentido seguro sobre tu capacidad para manejar tus problemas personales?",
        options: [
          { value: "4", label: "Nunca" },
          { value: "3", label: "Casi nunca" },
          { value: "2", label: "A veces" },
          { value: "1", label: "Con bastante frecuencia" },
          { value: "0", label: "Con mucha frecuencia" },
        ],
      },
      {
        id: "q5",
        question: "¿Con qué frecuencia has sentido que no podías afrontar todas las cosas que tenías que hacer?",
        options: [
          { value: "0", label: "Nunca" },
          { value: "1", label: "Casi nunca" },
          { value: "2", label: "A veces" },
          { value: "3", label: "Con bastante frecuencia" },
          { value: "4", label: "Con mucha frecuencia" },
        ],
      },
    ],
  },
]

export default function AssessmentsPage() {
  const [selectedAssessment, setSelectedAssessment] = useState<string | null>(null)
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isAssessmentActive, setIsAssessmentActive] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const assessment = assessments.find((a) => a.id === selectedAssessment)

  // Handle swipe gestures
  useEffect(() => {
    if (!isAssessmentActive) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && activeQuestion < (assessment?.questions.length || 0) - 1) {
        nextQuestion()
      } else if (e.key === "ArrowLeft" && activeQuestion > 0) {
        prevQuestion()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isAssessmentActive, activeQuestion, assessment])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && activeQuestion < (assessment?.questions.length || 0) - 1) {
      nextQuestion()
    } else if (isRightSwipe && activeQuestion > 0) {
      prevQuestion()
    }

    setTouchStart(null)
    setTouchEnd(null)
  }

  const startAssessment = (id: string) => {
    setSelectedAssessment(id)
    setActiveQuestion(0)
    setAnswers({})
    setIsAssessmentActive(true)
  }

  const exitAssessment = () => {
    setIsAssessmentActive(false)
    setSelectedAssessment(null)
  }

  const nextQuestion = () => {
    if (!assessment) return

    if (activeQuestion < assessment.questions.length - 1) {
      setActiveQuestion(activeQuestion + 1)
    } else {
      // Assessment complete
      setIsAssessmentActive(false)
    }
  }

  const prevQuestion = () => {
    if (activeQuestion > 0) {
      setActiveQuestion(activeQuestion - 1)
    }
  }

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers({
      ...answers,
      [questionId]: value,
    })
  }

  const getColorClass = (color: string) => {
    switch (color) {
      case "purple":
        return {
          bg: "bg-purple-50",
          border: "border-purple-100",
          text: "text-purple-300",
          button: "bg-purple-200 hover:bg-purple-300 transition-all duration-300",
          progress: "bg-purple-200",
        }
      case "blue":
        return {
          bg: "bg-blue-50",
          border: "border-blue-100",
          text: "text-blue-300",
          button: "bg-blue-200 hover:bg-blue-300 transition-all duration-300",
          progress: "bg-blue-200",
        }
      case "pink":
        return {
          bg: "bg-pink-50",
          border: "border-pink-100",
          text: "text-pink-300",
          button: "bg-pink-200 hover:bg-pink-300 transition-all duration-300",
          progress: "bg-pink-200",
        }
      default:
        return {
          bg: "bg-gray-50",
          border: "border-gray-100",
          text: "text-gray-300",
          button: "bg-gray-200 hover:bg-gray-300 transition-all duration-300",
          progress: "bg-gray-200",
        }
    }
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
              <Button variant="ghost" size="sm" asChild className="flex flex-col items-center px-2 sm:flex-row sm:px-3">
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
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="flex flex-col items-center px-2 sm:flex-row sm:px-3 bg-purple-50"
              >
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
        {isAssessmentActive && assessment ? (
          <div
            className="fixed inset-0 bg-white z-50 flex flex-col"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <Button variant="ghost" size="sm" onClick={exitAssessment}>
                <X className="h-5 w-5 mr-2" />
                Salir
              </Button>
              <div className="text-sm font-medium">
                Pregunta {activeQuestion + 1} de {assessment.questions.length}
              </div>
            </div>

            <div className="flex-1 flex flex-col p-4 md:p-8 md:justify-center md:max-w-2xl md:mx-auto w-full">
              <div className="mb-6">
                <Progress
                  value={((activeQuestion + 1) / assessment.questions.length) * 100}
                  className="h-2"
                  indicatorClassName={getColorClass(assessment.color).progress}
                />
              </div>

              <div className="space-y-8 flex-1 flex flex-col">
                <div>
                  <h2 className="text-2xl font-medium mb-2">{assessment.questions[activeQuestion].question}</h2>
                </div>

                <div className="flex-1 flex items-center">
                  <RadioGroup
                    className="w-full space-y-4"
                    value={answers[assessment.questions[activeQuestion].id] || ""}
                    onValueChange={(value) => handleAnswer(assessment.questions[activeQuestion].id, value)}
                  >
                    {assessment.questions[activeQuestion].options.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <RadioGroupItem
                          value={option.value}
                          id={`${assessment.questions[activeQuestion].id}-${option.value}`}
                          className={getColorClass(assessment.color).text}
                        />
                        <Label
                          htmlFor={`${assessment.questions[activeQuestion].id}-${option.value}`}
                          className="flex-1 py-3 px-4 rounded-lg border hover:bg-gray-50 cursor-pointer transition-all duration-300 hover:shadow-sm hover:translate-y-[-2px]"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="flex justify-between pt-4">
                  <Button variant="outline" onClick={prevQuestion} disabled={activeQuestion === 0}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Anterior
                  </Button>

                  <Button
                    onClick={nextQuestion}
                    disabled={!answers[assessment.questions[activeQuestion].id]}
                    className={getColorClass(assessment.color).button}
                  >
                    {activeQuestion < assessment.questions.length - 1 ? (
                      <>
                        Siguiente
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </>
                    ) : (
                      "Completar"
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <h2 className="mb-6 text-2xl font-medium">Evaluaciones</h2>
            <p className="mb-6 text-muted-foreground">
              Completa estas evaluaciones para ayudar a tu terapeuta a entender mejor tus necesidades.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {assessments.map((assessment, index) => {
                const colorClass = getColorClass(assessment.color)

                return (
                  <Card
                    key={assessment.id}
                    className={`${colorClass.border} overflow-hidden transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] ${
                      index % 3 === 0
                        ? "float-animation"
                        : index % 3 === 1
                          ? "float-animation-slow"
                          : "float-animation-fast"
                    }`}
                  >
                    <CardHeader className={`${colorClass.bg} bg-gradient-to-r from-${assessment.color}-50 to-white`}>
                      <CardTitle className="flex items-center gap-2">
                        <ClipboardCheck className={`h-5 w-5 ${colorClass.text}`} />
                        {assessment.title}
                      </CardTitle>
                      <CardDescription>{assessment.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-sm text-muted-foreground mb-4">
                        {assessment.questions.length} questions • Approximately {assessment.questions.length * 30}{" "}
                        seconds
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button className={`w-full ${colorClass.button}`} onClick={() => startAssessment(assessment.id)}>
                        Iniciar Evaluación
                      </Button>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
          </>
        )}
      </main>
    </div>
  )
}

