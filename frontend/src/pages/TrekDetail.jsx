import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiArrowLeft, FiStar, FiClock, FiMap, FiCalendar,
  FiCheck, FiX, FiChevronDown, FiChevronUp,
  FiUsers, FiPhone, FiPackage, FiThermometer
} from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'
import { useAuth } from '../context/AuthContext'
import { trekData } from '../data/trekData'
import toast from 'react-hot-toast'

const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case 'Easy': return 'bg-green-500 text-white'
    case 'Moderate': return 'bg-yellow-500 text-white'
    case 'Difficult': return 'bg-orange-500 text-white'
    case 'Challenging': return 'bg-red-500 text-white'
    default: return 'bg-gray-500 text-white'
  }
}

const TrekDetail = () => {
  const { id } = useParams()
  const { theme } = useTheme()
  const { user } = useAuth()
  const navigate = useNavigate()
  const dark = theme === 'dark'

  const trek = trekData.find(t => t.slug === id || t._id === id)

  const [activeImg, setActiveImg] = useState(0)
  const [activeTab, setActiveTab] = useState('itinerary')
  const [openFaq, setOpenFaq] = useState(null)
  const [selectedPickup, setSelectedPickup] = useState('')
  const [groupSize, setGroupSize] = useState(1)

  useEffect(() => {
    if (trek && trek.pickupOptions) setSelectedPickup(trek.pickupOptions[0])
    window.scrollTo(0, 0)
  }, [trek])

  if (!trek) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center pt-24 ${dark ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
        <div className="text-6xl mb-4">🏔️</div>
        <h1 className="text-3xl font-bold mb-4">Trek Not Found</h1>
        <p className={`mb-8 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>The trek you're looking for doesn't exist.</p>
        <Link to="/treks" className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition">
          Browse All Treks
        </Link>
      </div>
    )
  }

  const diffClass = getDifficultyColor(trek.difficulty)

  const tabs = [
    { key: 'itinerary', label: '📅 Itinerary' },
    { key: 'includes', label: '✅ Inclusions' },
    { key: 'packing', label: '🎒 Packing List' },
    { key: 'faq', label: '❓ FAQs' },
  ]

  const handleBookNow = () => {
    if (!user) {
      toast.error('Please login or signup to book this trek', { duration: 3000 })
      navigate('/login')
      return
    }
    toast.success(`Booking request for ${trek.name} received! Our team will contact you shortly.`, { duration: 4000 })
  }

  return (
    <div className={`min-h-screen pt-20 ${dark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        <button
          onClick={() => navigate(-1)}
          className={`flex items-center gap-2 font-medium transition-colors ${dark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
        >
          <FiArrowLeft size={18} />
          Back
        </button>
      </div>

      {/* Hero Image Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-4">
        <div className="relative rounded-3xl overflow-hidden h-[50vh] md:h-[60vh]">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeImg}
              src={trek.images[activeImg]}
              alt={trek.name}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* Badges on image */}
          <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
            {trek.discount > 0 && (
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                {trek.discount}% OFF
              </span>
            )}
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${diffClass}`}>
              {trek.difficulty}
            </span>
          </div>

          {/* Rating */}
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <FiStar className="text-yellow-500 fill-yellow-500" size={16} />
            <span className="font-bold text-gray-900">{trek.rating}</span>
            <span className="text-gray-500 text-sm">({trek.totalRatings})</span>
          </div>

          {/* Image thumbnails */}
          {trek.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {trek.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === activeImg ? 'bg-white scale-125' : 'bg-white/50'}`}
                />
              ))}
            </div>
          )}

          {/* Trek name on image */}
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-green-400 font-semibold text-sm mb-1 uppercase tracking-wider">{trek.state}</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white">{trek.name}</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-8">

            {/* Quick Stats */}
            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-2xl p-6 ${dark ? 'bg-gray-900 border border-gray-800' : 'bg-white border shadow-sm'}`}>
              {[
                { icon: <FiClock size={20} />, label: 'Duration', value: trek.duration },
                { icon: <FiMap size={20} />, label: 'Altitude', value: trek.altitude },
                { icon: <FiCalendar size={20} />, label: 'Best Season', value: trek.bestSeason.slice(0, 2).join(', ') },
                { icon: <FiThermometer size={20} />, label: 'Temp (Day)', value: trek.temperature?.day || 'N/A' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className={`flex justify-center mb-1 ${dark ? 'text-green-400' : 'text-green-600'}`}>
                    {stat.icon}
                  </div>
                  <p className={`text-xs font-medium uppercase tracking-wider mb-1 ${dark ? 'text-gray-500' : 'text-gray-400'}`}>{stat.label}</p>
                  <p className={`text-sm font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div>
              <h2 className={`text-2xl font-bold mb-3 ${dark ? 'text-white' : 'text-gray-900'}`}>About This Trek</h2>
              <p className={`text-base leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-600'}`}>{trek.description}</p>
            </div>

            {/* Best Season Full */}
            <div className={`rounded-2xl p-5 ${dark ? 'bg-gray-900 border border-gray-800' : 'bg-white border shadow-sm'}`}>
              <h3 className={`text-lg font-bold mb-3 ${dark ? 'text-white' : 'text-gray-900'}`}>
                🌸 Best Seasons
              </h3>
              <div className="flex flex-wrap gap-2">
                {trek.bestSeason.map((m) => (
                  <span key={m} className={`px-3 py-1 rounded-full text-sm font-medium ${dark ? 'bg-green-900/30 text-green-400 border border-green-800' : 'bg-green-50 text-green-700 border border-green-200'}`}>
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div>
              <div className={`flex gap-1 p-1 rounded-xl mb-6 flex-wrap ${dark ? 'bg-gray-900' : 'bg-gray-100'}`}>
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      activeTab === tab.key
                        ? 'bg-green-600 text-white shadow-md'
                        : dark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Itinerary */}
              {activeTab === 'itinerary' && (
                <div className="space-y-4">
                  {trek.itinerary?.map((day, i) => (
                    <motion.div
                      key={day.day}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className={`flex gap-4 rounded-2xl p-5 ${dark ? 'bg-gray-900 border border-gray-800' : 'bg-white border shadow-sm'}`}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-sm">
                          {day.day}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className={`font-bold mb-1 ${dark ? 'text-white' : 'text-gray-900'}`}>{day.title}</h4>
                        <p className={`text-sm mb-3 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>{day.description}</p>
                        <div className="flex gap-4 text-xs flex-wrap">
                          <span className={`flex items-center gap-1 ${dark ? 'text-gray-500' : 'text-gray-500'}`}>
                            🍽️ {day.meals}
                          </span>
                          {day.stay !== '-' && (
                            <span className={`flex items-center gap-1 ${dark ? 'text-gray-500' : 'text-gray-500'}`}>
                              🏕️ {day.stay}
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Inclusions & Exclusions */}
              {activeTab === 'includes' && (
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className={`rounded-2xl p-5 ${dark ? 'bg-gray-900 border border-gray-800' : 'bg-white border shadow-sm'}`}>
                    <h3 className={`text-lg font-bold mb-4 text-green-600`}>✅ What's Included</h3>
                    <ul className="space-y-2">
                      {trek.included?.map((item) => (
                        <li key={item} className={`flex items-start gap-2 text-sm ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
                          <FiCheck className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-2xl p-5 ${dark ? 'bg-gray-900 border border-gray-800' : 'bg-white border shadow-sm'}`}>
                    <h3 className={`text-lg font-bold mb-4 text-red-500`}>❌ What's Excluded</h3>
                    <ul className="space-y-2">
                      {trek.excluded?.map((item) => (
                        <li key={item} className={`flex items-start gap-2 text-sm ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
                          <FiX className="text-red-400 mt-0.5 flex-shrink-0" size={16} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Temperature */}
                  <div className={`sm:col-span-2 rounded-2xl p-5 ${dark ? 'bg-gray-900 border border-gray-800' : 'bg-white border shadow-sm'}`}>
                    <h3 className={`text-lg font-bold mb-4 ${dark ? 'text-white' : 'text-gray-900'}`}>
                      🌡️ Temperature
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className={`p-4 rounded-xl ${dark ? 'bg-gray-800' : 'bg-orange-50'}`}>
                        <p className={`text-xs font-semibold uppercase mb-1 ${dark ? 'text-orange-400' : 'text-orange-500'}`}>Daytime</p>
                        <p className={`text-lg font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>{trek.temperature?.day || 'N/A'}</p>
                      </div>
                      <div className={`p-4 rounded-xl ${dark ? 'bg-gray-800' : 'bg-blue-50'}`}>
                        <p className={`text-xs font-semibold uppercase mb-1 ${dark ? 'text-blue-400' : 'text-blue-500'}`}>Nighttime</p>
                        <p className={`text-lg font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>{trek.temperature?.night || 'N/A'}</p>
                      </div>
                    </div>
                  </div>
                  {/* Cancellation Policy */}
                  {trek.cancellationPolicy && (
                    <div className={`sm:col-span-2 rounded-2xl p-5 border-l-4 border-yellow-500 ${dark ? 'bg-yellow-900/10' : 'bg-yellow-50'}`}>
                      <h3 className="text-lg font-bold mb-2 text-yellow-600">⚠️ Cancellation Policy</h3>
                      <p className={`text-sm ${dark ? 'text-gray-300' : 'text-gray-700'}`}>{trek.cancellationPolicy}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Packing List */}
              {activeTab === 'packing' && (
                <div className="space-y-4">
                  {trek.packingList && trek.packingList.length > 0 ? (
                    trek.packingList.map((cat, i) => (
                      <motion.div
                        key={cat.category}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className={`rounded-2xl p-5 ${dark ? 'bg-gray-900 border border-gray-800' : 'bg-white border shadow-sm'}`}
                      >
                        <h3 className={`text-base font-bold mb-3 flex items-center gap-2 ${dark ? 'text-white' : 'text-gray-900'}`}>
                          <FiPackage className="text-green-500" size={18} />
                          {cat.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {cat.items.map((item) => (
                            <span
                              key={item}
                              className={`px-3 py-1.5 rounded-full text-sm ${dark ? 'bg-gray-800 text-gray-300 border border-gray-700' : 'bg-gray-100 text-gray-700 border border-gray-200'}`}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <p className={dark ? 'text-gray-400' : 'text-gray-500'}>Detailed packing list will be shared after booking.</p>
                  )}
                </div>
              )}

              {/* FAQs */}
              {activeTab === 'faq' && (
                <div className="space-y-3">
                  {trek.faqs && trek.faqs.length > 0 ? (
                    trek.faqs.map((faq, i) => (
                      <div
                        key={i}
                        className={`rounded-2xl overflow-hidden border ${dark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200 shadow-sm'}`}
                      >
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          className={`w-full flex items-center justify-between p-5 text-left font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}
                        >
                          <span>{faq.question}</span>
                          {openFaq === i ? <FiChevronUp className="text-green-500 flex-shrink-0" /> : <FiChevronDown className="flex-shrink-0" />}
                        </button>
                        <AnimatePresence>
                          {openFaq === i && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <p className={`px-5 pb-5 text-sm leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                                {faq.answer}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))
                  ) : (
                    <p className={dark ? 'text-gray-400' : 'text-gray-500'}>No FAQs available for this trek. Contact us for any questions!</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right: Booking Card (Sticky) */}
          <div className="lg:col-span-1">
            <div className={`sticky top-24 rounded-3xl p-6 border shadow-xl ${dark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
              
              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-extrabold text-green-600">₹{trek.price.toLocaleString()}</span>
                  <span className={`text-base line-through ${dark ? 'text-gray-600' : 'text-gray-400'}`}>
                    ₹{trek.originalPrice.toLocaleString()}
                  </span>
                  <span className="text-sm font-semibold text-orange-500 bg-orange-100 dark:bg-orange-900/30 px-2 py-0.5 rounded-full">
                    {trek.discount}% off
                  </span>
                </div>
                <p className={`text-xs mt-1 ${dark ? 'text-gray-500' : 'text-gray-400'}`}>per person, all inclusive</p>
              </div>

              {/* Pickup Option */}
              <div className="mb-4">
                <label className={`block text-sm font-semibold mb-2 ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <FiMap size={14} className="inline mr-1" />
                  Pickup Option
                </label>
                <select
                  value={selectedPickup}
                  onChange={(e) => setSelectedPickup(e.target.value)}
                  className={`w-full rounded-xl px-4 py-3 text-sm border outline-none focus:ring-2 focus:ring-green-500 ${dark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
                >
                  {trek.pickupOptions?.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Group Size */}
              <div className="mb-6">
                <label className={`block text-sm font-semibold mb-2 ${dark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <FiUsers size={14} className="inline mr-1" />
                  Group Size
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setGroupSize(Math.max(1, groupSize - 1))}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg border transition ${dark ? 'border-gray-700 text-white hover:bg-gray-800' : 'border-gray-300 text-gray-900 hover:bg-gray-50'}`}
                  >
                    −
                  </button>
                  <span className={`text-xl font-bold w-8 text-center ${dark ? 'text-white' : 'text-gray-900'}`}>{groupSize}</span>
                  <button
                    onClick={() => setGroupSize(Math.min(20, groupSize + 1))}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg border transition ${dark ? 'border-gray-700 text-white hover:bg-gray-800' : 'border-gray-300 text-gray-900 hover:bg-gray-50'}`}
                  >
                    +
                  </button>
                  <span className={`ml-2 text-sm ${dark ? 'text-gray-400' : 'text-gray-500'}`}>person(s)</span>
                </div>
              </div>

              {/* Total */}
              <div className={`flex items-center justify-between p-4 rounded-2xl mb-5 ${dark ? 'bg-green-900/20 border border-green-900' : 'bg-green-50 border border-green-200'}`}>
                <span className={`text-sm font-semibold ${dark ? 'text-green-400' : 'text-green-700'}`}>Total Amount</span>
                <span className="text-xl font-extrabold text-green-600">₹{(trek.price * groupSize).toLocaleString()}</span>
              </div>

              {/* Book Now Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleBookNow}
                className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-bold text-lg transition-colors shadow-lg shadow-green-600/20"
              >
                Book Now
              </motion.button>

              {/* Call us */}
              <a
                href="tel:+919999999999"
                className={`flex items-center justify-center gap-2 w-full py-3 mt-3 rounded-2xl font-semibold text-sm border transition ${dark ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
              >
                <FiPhone size={16} />
                Call for Enquiry
              </a>

              {/* Seats left */}
              <p className={`text-center text-xs mt-4 ${dark ? 'text-gray-600' : 'text-gray-400'}`}>
                🔥 Limited seats — book early to secure your spot!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* More Treks from Same State */}
      <div className={`py-16 px-4 sm:px-6 ${dark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-2xl md:text-3xl font-bold mb-8 ${dark ? 'text-white' : 'text-gray-900'}`}>
            More Treks in {trek.state}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trekData
              .filter((t) => t.state === trek.state && t._id !== trek._id)
              .slice(0, 3)
              .map((t) => (
                <Link
                  key={t._id}
                  to={`/treks/${t.slug}`}
                  className={`group rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl ${dark ? 'bg-gray-800 border-gray-700 hover:border-green-600' : 'bg-white border-gray-200 hover:border-green-400'}`}
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={t.images[0]}
                      alt={t.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(t.difficulty)}`}>
                      {t.difficulty}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className={`font-bold text-lg mb-1 ${dark ? 'text-white' : 'text-gray-900'}`}>{t.name}</h3>
                    <div className={`flex items-center gap-3 text-sm mb-3 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
                      <span className="flex items-center gap-1"><FiClock size={14} />{t.duration}</span>
                      <span className="flex items-center gap-1"><FiMap size={14} />{t.altitude}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-green-600 font-bold">₹{t.price.toLocaleString()}</span>
                      <span className="text-green-600 text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">
                        View Details →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrekDetail
