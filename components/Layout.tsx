import React from 'react';
import Link from 'next/link';
import { Calendar, FileText, Home, ClipboardCheck, User, Bell } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-medium">The Soul App</h1>
          </div>
          <div className="flex items-center gap-4">
            <nav className="flex gap-1 sm:gap-4">
              <Link
                href="/dashboard"
                className="flex flex-col items-center px-2 sm:flex-row sm:px-3 text-pink-600 hover:text-pink-700"
              >
                <Home className="h-5 w-5" />
                <span className="hidden text-xs sm:ml-2 sm:inline-block sm:text-sm">Home</span>
              </Link>
              <Link
                href="/appointments"
                className="flex flex-col items-center px-2 sm:flex-row sm:px-3 text-blue-600 hover:text-blue-700"
              >
                <Calendar className="h-5 w-5" />
                <span className="hidden text-xs sm:ml-2 sm:inline-block sm:text-sm">Appointments</span>
              </Link>
              <Link
                href="/diary"
                className="flex flex-col items-center px-2 sm:flex-row sm:px-3 text-green-600 hover:text-green-700"
              >
                <FileText className="h-5 w-5" />
                <span className="hidden text-xs sm:ml-2 sm:inline-block sm:text-sm">Diary</span>
              </Link>
              <Link
                href="/assessments"
                className="flex flex-col items-center px-2 sm:flex-row sm:px-3 text-purple-600 hover:text-purple-700"
              >
                <ClipboardCheck className="h-5 w-5" />
                <span className="hidden text-xs sm:ml-2 sm:inline-block sm:text-sm">Assessments</span>
              </Link>
              <Link
                href="/notifications"
                className="flex flex-col items-center px-2 sm:flex-row sm:px-3 text-yellow-600 hover:text-yellow-700"
              >
                <Bell className="h-5 w-5" />
                <span className="hidden text-xs sm:ml-2 sm:inline-block sm:text-sm">Notifications</span>
              </Link>
              <Link
                href="/profile"
                className="flex flex-col items-center px-2 sm:flex-row sm:px-3 text-gray-600 hover:text-gray-700"
              >
                <User className="h-5 w-5" />
                <span className="hidden text-xs sm:ml-2 sm:inline-block sm:text-sm">Profile</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t bg-white py-6">
        <div className="container px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} The Soul App. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-700">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-700">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-700">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}; 