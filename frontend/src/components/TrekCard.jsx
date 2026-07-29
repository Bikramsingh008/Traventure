import React from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { FaMountain, FaStar, FaMapMarkerAlt, FaClock, FaUtensils, FaBed, FaCar, FaArrowRight } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'

const TrekCard = ({ trek }) => {
  const { theme } = useTheme()
  const { user } = useAuth()
  const navigate = useNavigate()

  const handleBookNow = () => {
    if (!user) {
      toast.error('Please login or signup to book this trek', { duration: 3000 })
      navigate('/login')
      return
    }
    toast.success(`Booking request for ${trek.name} received!`, { duration: 3000 })
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500'
      case 'Moderate': return 'bg-yellow-500'
      case 'Difficult': return 'bg-orange-500'
      case 'Challenging': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const includedIcons = {
    'Meals': <FaUtensils />,
    'Hotel Stay': <FaBed />,
    'Transportation': <FaCar />,
    'Pickup from Delhi': <FaCar />
  }

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={`rounded-2xl overflow-hidden shadow-lg ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <div className="relative">
        <img
          src={trek.images[0] || 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800'}
          alt={trek.name}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className={`${getDifficultyColor(trek.difficulty)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
            {trek.difficulty}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
            {trek.state}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
          <FaStar className="text-yellow-500" />
          <span className="text-sm font-semibold">{trek.rating}</span>
          <span className="text-xs text-gray-600">({trek.totalRatings})</span>
        </div>
      </div>

      <div className="p-5">
        <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {trek.name}
        </h3>
        
        <div className="flex flex-wrap gap-3 mb-4 text-sm">
          <div className={`flex items-center gap-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            <FaClock />
            <span>{trek.duration}</span>
          </div>
          <div className={`flex items-center gap-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            <FaMountain />
            <span>{trek.altitude}</span>
          </div>
          <div className={`flex items-center gap-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            <FaMapMarkerAlt />
            <span>{trek.pickupPoint}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {trek.included.slice(0, 4).map((item, index) => (
            <span
              key={index}
              className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
                theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
              }`}
            >
              {includedIcons[item]}
              {item}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <span className={`text-sm line-through ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
              ₹{trek.originalPrice.toLocaleString()}
            </span>
            <span className="text-2xl font-bold text-primary-green ml-2">
              ₹{trek.price.toLocaleString()}
            </span>
            <span className="text-sm text-primary-orange ml-1">
              ({trek.discount}% off)
            </span>
          </div>
        </div>

        <div className="flex gap-2">
          <Link to={`/treks/${trek.slug}`} className="flex-1 bg-primary-green text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
            <span>View Details</span>
            <FaArrowRight className="text-sm" />
          </Link>
          <button onClick={handleBookNow} className="flex-1 border-2 border-primary-green text-primary-green py-2 px-4 rounded-lg font-semibold hover:bg-primary-green hover:text-white transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default TrekCard
