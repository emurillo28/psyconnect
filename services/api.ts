// services/api.ts
// Integration point for API calls to Spring Boot backend

import axios from "axios"
import { getToken } from "@/lib/auth"

// Create axios instance with base URL from environment variable
// This will be configured to point to your Spring Boot API
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api",
})

// Add token to all requests
api.interceptors.request.use((config) => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Future integration: Add response interceptor for token refresh
// api.interceptors.response.use(...);

// API endpoints for different features
export const authApi = {
  login: (credentials: { email: string; password: string }) => api.post("/auth/login", credentials),
  register: (userData: { name: string; email: string; password: string; role: string }) =>
    api.post("/auth/register", userData),
  // Future: password reset, email verification, etc.
}

export const appointmentsApi = {
  getAll: () => api.get("/appointments"),
  getById: (id: string) => api.get(`/appointments/${id}`),
  create: (data: any) => api.post("/appointments", data),
  update: (id: string, data: any) => api.put(`/appointments/${id}`, data),
  delete: (id: string) => api.delete(`/appointments/${id}`),
}

export const diaryApi = {
  // Future integration with AWS RDS for diary entries
  getEntries: () => api.get("/diary"),
  createEntry: (data: any) => api.post("/diary", data),
  // More diary-related endpoints
}

export const assessmentsApi = {
  // Future integration with RESTful endpoints for interactive assessments
  getAvailable: () => api.get("/assessments"),
  getById: (id: string) => api.get(`/assessments/${id}`),
  submitResponse: (id: string, data: any) => api.post(`/assessments/${id}/responses`, data),
  // More assessment-related endpoints
}

export default api
