// lib/auth.ts

import { jwtDecode } from "jwt-decode"

// Token management
export const getToken = () => {
  if (typeof window === "undefined") return null
  return localStorage.getItem("token")
}

export const setToken = (token: string) => {
  localStorage.setItem("token", token)
}

export const clearToken = () => {
  localStorage.removeItem("token")
}

// User authentication
export const isAuthenticated = () => {
  const token = getToken()
  if (!token) return false

  try {
    const decoded: any = jwtDecode(token)
    return decoded.exp * 1000 > Date.now()
  } catch (error) {
    clearToken()
    return false
  }
}

// User information
export const getUserInfo = () => {
  const token = getToken()
  if (!token) return null

  try {
    const decoded: any = jwtDecode(token)
    return {
      id: decoded.sub,
      name: decoded.name,
      email: decoded.email,
      role: decoded.role,
    }
  } catch (error) {
    clearToken()
    return null
  }
}

// Role-based access control
export const hasRole = (requiredRole: string) => {
  const userInfo = getUserInfo()
  if (!userInfo) return false
  return userInfo.role === requiredRole
}

// Token refresh
export const refreshToken = async () => {
  const token = getToken()
  if (!token) return false

  try {
    // Future integration: API call to refresh token
    // const response = await api.post('/auth/refresh', { token });
    // setToken(response.data.token);
    return true
  } catch (error) {
    clearToken()
    return false
  }
}
