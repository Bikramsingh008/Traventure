import React from 'react'
import { useTheme } from '../context/ThemeContext'

const AdminDashboard = () => {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen pt-24 px-4 ${theme === 'dark' ? 'bg-primary-dark' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        <h1 className={`text-4xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Admin Dashboard
        </h1>
        <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Manage treks, bookings, and users.
        </p>
      </div>
    </div>
  )
}

export default AdminDashboard
