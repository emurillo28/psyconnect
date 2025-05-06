import type React from "react"
import { AuthProvider } from "@/contexts/auth-context"

export const metadata = {
  title: "The Soul App | Bienestar Mental y Autorreflexión",
  description: "Tu espacio personal para el bienestar mental y la autorreflexión",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}


import './globals.css'