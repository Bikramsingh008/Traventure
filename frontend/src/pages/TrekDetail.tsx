import React from 'react'
import { useTheme } from '../context/ThemeContext'

const TrekDetail = () => {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen pt-24 px-4 ${theme === 'dark' ? 'bg-primary-dark' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        <h1 className={`text-4xl md:text-5xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Trek Detail
        </h1>
        <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Detailed information about the trek with itinerary and booking.
        </p>
      </div>
    </div>
  )
}

export default TrekDetail
