"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, ChevronLeft, ChevronRight, Home, Plus, FileText, ClipboardCheck, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Textarea } from "@/components/ui/textarea"

// Sample diary entries
const sampleEntries = [
  {
    id: 1,
    date: "14 de mayo, 2025",
    mood: "Tranquilo",
    content:
      "Hoy fue un día productivo. Logré completar todas mis tareas sin sentirme abrumado. Los ejercicios de respiración que me recomendó la Dra. Johnson realmente están ayudando con mi ansiedad.",
  },
  {
    id: 2,
    date: "12 de mayo, 2025",
    mood: "Ansioso",
    content:
      "Me sentí ansioso por la próxima presentación en el trabajo. Usé las técnicas de conexión a tierra que discutimos en terapia, lo que ayudó un poco. Necesito practicar más la autocompasión.",
  },
  {
    id: 3,
    date: "10 de mayo, 2025",
    mood: "Feliz",
    content:
      "¡Tuve un gran día hoy! Pasé tiempo con amigos y me sentí genuinamente presente en el momento. Estas conexiones son muy importantes para mi salud mental.",
  },
]

export default function DiaryPage() {
  const [entries, setEntries] = useState(sampleEntries)
  const [selectedEntry, setSelectedEntry] = useState<number | null>(1)
  const [newEntry, setNewEntry] = useState({ mood: "", content: "" })
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const moodOptions = ["Feliz", "Tranquilo", "Neutral", "Triste", "Ansioso", "Enojado", "Abrumado"]

  // Simulate data loading
  useEffect(() => {
    // Future integration: Fetch diary entries from AWS RDS through API
    // const fetchEntries = async () => {
    //   try {
    //     const response = await diaryApi.getEntries();
    //     setEntries(response.data);
    //   } catch (error) {
    //     console.error('Error fetching diary entries:', error);
    //   } finally {
    //     setIsLoading(false);
    //   }
    // };

    // fetchEntries();

    // For now, just simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleNewEntry = async () => {
    // Future integration: Save to AWS RDS through API
    // try {
    //   const response = await diaryApi.createEntry({
    //     mood: newEntry.mood,
    //     content: newEntry.content,
    //   });
    //   setEntries([response.data, ...entries]);
    //   setSelectedEntry(response.data.id);
    // } catch (error) {
    //   console.error('Error creating diary entry:', error);
    // }

    // For now, just add to local state
    const today = new Date()
    const formattedDate = today.toLocaleDateString("es", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })

    const newEntryObj = {
      id: entries.length + 1,
      date: formattedDate,
      mood: newEntry.mood,
      content: newEntry.content,
    }

    setEntries([newEntryObj, ...entries])
    setSelectedEntry(newEntryObj.id)
    setNewEntry({ mood: "", content: "" })
    setIsDialogOpen(false)
  }

  const getMoodColor = (mood: string) => {
    switch (mood.toLowerCase()) {
      case "feliz":
        return "bg-green-100 text-green-800"
      case "tranquilo":
        return "bg-blue-100 text-blue-800"
      case "neutral":
        return "bg-gray-100 text-gray-800"
      case "triste":
        return "bg-indigo-100 text-indigo-800"
      case "ansioso":
        return "bg-yellow-100 text-yellow-800"
      case "enojado":
        return "bg-red-100 text-red-800"
      case "abrumado":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-300"></div>
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
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="flex flex-col items-center px-2 sm:flex-row sm:px-3 bg-green-50"
              >
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

      {/* Main Content - Mobile First Design */}
      <main className="container px-4 py-8">
        <div className="md:hidden mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-medium">Diario Emocional</h2>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button size="sm" className="bg-green-300 hover:bg-green-400">
                  <Plus className="mr-2 h-4 w-4" />
                  Nueva Entrada
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Nueva Entrada de Diario</DialogTitle>
                  <DialogDescription>
                    Registra cómo te sientes hoy. Esto ayuda a hacer seguimiento de tus patrones emocionales a lo largo
                    del tiempo.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="mood-mobile">¿Cómo te sientes?</Label>
                    <Select value={newEntry.mood} onValueChange={(value) => setNewEntry({ ...newEntry, mood: value })}>
                      <SelectTrigger id="mood-mobile">
                        <SelectValue placeholder="Selecciona estado de ánimo" />
                      </SelectTrigger>
                      <SelectContent>
                        {moodOptions.map((mood) => (
                          <SelectItem key={mood} value={mood}>
                            {mood}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="content-mobile">¿Qué tienes en mente?</Label>
                    <Textarea
                      id="content-mobile"
                      placeholder="Escribe tus pensamientos aquí..."
                      rows={6}
                      value={newEntry.content}
                      onChange={(e) => setNewEntry({ ...newEntry, content: e.target.value })}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    onClick={handleNewEntry}
                    disabled={!newEntry.mood || !newEntry.content}
                    className="bg-green-300 hover:bg-green-400"
                  >
                    Guardar Entrada
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile Entry View */}
          {selectedEntry ? (
            <Card className="mb-6 transition-all duration-300 hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle>{entries.find((e) => e.id === selectedEntry)?.date}</CardTitle>
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${getMoodColor(
                      entries.find((e) => e.id === selectedEntry)?.mood || "",
                    )}`}
                  >
                    {entries.find((e) => e.id === selectedEntry)?.mood}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-line">{entries.find((e) => e.id === selectedEntry)?.content}</p>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <div className="flex w-full justify-between">
                  <Button variant="outline" size="sm">
                    Editar
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-500">
                    Eliminar
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ) : null}

          {/* Mobile Entry List */}
          <div className="space-y-4">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className={`cursor-pointer rounded-lg border p-4 transition-all duration-300 hover:bg-gray-50 ${
                  selectedEntry === entry.id ? "border-green-300 bg-green-50" : ""
                }`}
                onClick={() => setSelectedEntry(entry.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <p className="text-sm text-muted-foreground">{entry.date}</p>
                  </div>
                  <span className={`rounded-full px-2 py-1 text-xs font-medium ${getMoodColor(entry.mood)}`}>
                    {entry.mood}
                  </span>
                </div>
                <p className="mt-2 line-clamp-2 text-sm">{entry.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {/* Entries List */}
          <Card className="border-green-100 transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Entradas</CardTitle>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button size="sm" className="bg-green-300 hover:bg-green-400">
                      <Plus className="mr-2 h-4 w-4" />
                      Nueva Entrada
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Nueva Entrada de Diario</DialogTitle>
                      <DialogDescription>
                        Registra cómo te sientes hoy. Esto ayuda a hacer seguimiento de tus patrones emocionales a lo
                        largo del tiempo.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="mood">¿Cómo te sientes?</Label>
                        <Select
                          value={newEntry.mood}
                          onValueChange={(value) => setNewEntry({ ...newEntry, mood: value })}
                        >
                          <SelectTrigger id="mood">
                            <SelectValue placeholder="Selecciona estado de ánimo" />
                          </SelectTrigger>
                          <SelectContent>
                            {moodOptions.map((mood) => (
                              <SelectItem key={mood} value={mood}>
                                {mood}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="content">¿Qué tienes en mente?</Label>
                        <Textarea
                          id="content"
                          placeholder="Escribe tus pensamientos aquí..."
                          rows={6}
                          value={newEntry.content}
                          onChange={(e) => setNewEntry({ ...newEntry, content: e.target.value })}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button
                        onClick={handleNewEntry}
                        disabled={!newEntry.mood || !newEntry.content}
                        className="bg-green-300 hover:bg-green-400"
                      >
                        Guardar Entrada
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
              <CardDescription>Registra y haz seguimiento de tu viaje emocional</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {entries.map((entry) => (
                  <div
                    key={entry.id}
                    className={`cursor-pointer rounded-lg border p-4 transition-all duration-300 hover:bg-gray-50 ${
                      selectedEntry === entry.id ? "border-green-300 bg-green-50" : ""
                    }`}
                    onClick={() => setSelectedEntry(entry.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <p className="text-sm text-muted-foreground">{entry.date}</p>
                      </div>
                      <span className={`rounded-full px-2 py-1 text-xs font-medium ${getMoodColor(entry.mood)}`}>
                        {entry.mood}
                      </span>
                    </div>
                    <p className="mt-2 line-clamp-2 text-sm">{entry.content}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Selected Entry */}
          <Card className="md:col-span-2 border-green-100 transition-all duration-300 hover:shadow-md">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>
                  {selectedEntry ? entries.find((e) => e.id === selectedEntry)?.date : "Selecciona una entrada"}
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      const currentIndex = entries.findIndex((e) => e.id === selectedEntry)
                      if (currentIndex < entries.length - 1) {
                        setSelectedEntry(entries[currentIndex + 1].id)
                      }
                    }}
                    disabled={!selectedEntry || selectedEntry === entries[entries.length - 1].id}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      const currentIndex = entries.findIndex((e) => e.id === selectedEntry)
                      if (currentIndex > 0) {
                        setSelectedEntry(entries[currentIndex - 1].id)
                      }
                    }}
                    disabled={!selectedEntry || selectedEntry === entries[0].id}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              {selectedEntry && (
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${getMoodColor(
                      entries.find((e) => e.id === selectedEntry)?.mood || "",
                    )}`}
                  >
                    {entries.find((e) => e.id === selectedEntry)?.mood}
                  </span>
                </div>
              )}
            </CardHeader>
            <CardContent>
              {selectedEntry ? (
                <div className="prose max-w-none">
                  <p className="whitespace-pre-line">{entries.find((e) => e.id === selectedEntry)?.content}</p>
                </div>
              ) : (
                <div className="flex h-40 items-center justify-center text-muted-foreground">
                  <p>Selecciona una entrada de la lista o crea una nueva</p>
                </div>
              )}
            </CardContent>
            {selectedEntry && (
              <CardFooter className="border-t px-6 py-4">
                <div className="flex w-full justify-between">
                  <Button variant="outline" className="border-green-200 text-green-600 hover:bg-green-50">
                    Editar Entrada
                  </Button>
                  <Button variant="outline" className="text-red-500 hover:bg-red-50 hover:text-red-600">
                    Eliminar
                  </Button>
                </div>
              </CardFooter>
            )}
          </Card>
        </div>
      </main>
    </div>
  )
}
