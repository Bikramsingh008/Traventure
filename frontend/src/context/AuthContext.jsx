import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(undefined)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  const login = async (email, password) => {
    // This will be replaced with actual API call
    // For now, mock login
    const mockUser = {
      id: '1',
      name: 'John Doe',
      email,
      role: 'user',
    }
    setUser(mockUser)
    localStorage.setItem('user', JSON.stringify(mockUser))
  }

  const signup = async (name, email, password) => {
    // This will be replaced with actual API call
    const mockUser = {
      id: '1',
      name,
      email,
      role: 'user',
    }
    setUser(mockUser)
    localStorage.setItem('user', JSON.stringify(mockUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  const isAuthenticated = !!user
  const isAdmin = user?.role === 'admin'

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated, isAdmin }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
