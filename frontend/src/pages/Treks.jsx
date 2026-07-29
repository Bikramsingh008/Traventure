import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, Mountain, MapPinned, Calendar, SlidersHorizontal, X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import TrekCard from '../components/TrekCard'
import { trekData } from '../data/trekData'

const DIFFICULTIES = ['All', 'Easy', 'Moderate', 'Difficult', 'Challenging']
const STATES = ['All', 'Uttarakhand', 'Himachal Pradesh', 'Kashmir']
const DURATIONS = ['All', '1-3 Days', '4-6 Days', '7+ Days']
const SORT_OPTIONS = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Rating', 'Duration']

const Treks = () => {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedState, setSelectedState] = useState('All')
  const [selectedDifficulty, setSelectedDifficulty] = useState('All')
  const [selectedDuration, setSelectedDuration] = useState('All')
  const [sortBy, setSortBy] = useState('Featured')
  const [showFilters, setShowFilters] = useState(false)

  const filteredTreks = useMemo(() => {
    let result = [...trekData]

    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(t =>
        t.name.toLowerCase().includes(q) ||
        t.state.toLowerCase().includes(q) ||
        t.difficulty.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q)
      )
    }

    // State
    if (selectedState !== 'All') {
      result = result.filter(t => t.state === selectedState)
    }

    // Difficulty
    if (selectedDifficulty !== 'All') {
      result = result.filter(t => t.difficulty === selectedDifficulty)
    }

    // Duration
    if (selectedDuration !== 'All') {
      result = result.filter(t => {
        const days = parseInt(t.duration)
        if (selectedDuration === '1-3 Days') return days <= 3
        if (selectedDuration === '4-6 Days') return days >= 4 && days <= 6
        if (selectedDuration === '7+ Days') return days >= 7
        return true
      })
    }

    // Sort
    if (sortBy === 'Price: Low to High') result.sort((a, b) => a.price - b.price)
    else if (sortBy === 'Price: High to Low') result.sort((a, b) => b.price - a.price)
    else if (sortBy === 'Rating') result.sort((a, b) => b.rating - a.rating)
    else if (sortBy === 'Duration') result.sort((a, b) => parseInt(a.duration) - parseInt(b.duration))
    else result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))

    return result
  }, [searchQuery, selectedState, selectedDifficulty, selectedDuration, sortBy])

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedState('All')
    setSelectedDifficulty('All')
    setSelectedDuration('All')
    setSortBy('Featured')
  }

  const hasActiveFilters = selectedState !== 'All' || selectedDifficulty !== 'All' || selectedDuration !== 'All' || searchQuery.trim() !== ''

  return (
    <div className={`min-h-screen pt-24 transition-all duration-300 ${dark ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Hero */}
        <section className="text-center py-12">
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${dark ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700'}`}>
            🏔️ EXPLORE HIMALAYAN ADVENTURES
          </span>
          <h1 className={`mt-6 text-5xl md:text-6xl font-extrabold ${dark ? 'text-white' : 'text-gray-900'}`}>
            Find Your <span className="text-green-600">Perfect Trek</span>
          </h1>
          <p className={`mt-4 max-w-2xl mx-auto text-lg ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
            {trekData.length} curated trekking adventures across Uttarakhand, Himachal Pradesh & Kashmir
          </p>
        </section>

        {/* Search Bar */}
        <div className={`rounded-2xl p-4 shadow-xl mb-6 ${dark ? 'bg-slate-800 border border-slate-700' : 'bg-white border shadow-md'}`}>
          <div className="flex gap-3 flex-wrap md:flex-nowrap">
            <div className="relative flex-1 min-w-[200px]">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by trek name, state, difficulty..."
                className={`w-full pl-11 pr-4 py-3.5 rounded-xl border outline-none focus:ring-2 focus:ring-green-500 text-sm ${dark ? 'bg-slate-900 border-slate-700 text-white placeholder:text-gray-500' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <X size={16} />
                </button>
              )}
            </div>

            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className={`rounded-xl px-4 py-3.5 border text-sm font-medium ${dark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
            >
              {STATES.map(s => <option key={s}>{s}</option>)}
            </select>

            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className={`rounded-xl px-4 py-3.5 border text-sm font-medium ${dark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
            >
              {DIFFICULTIES.map(d => <option key={d}>{d}</option>)}
            </select>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm transition ${
                showFilters ? 'bg-green-600 text-white' : dark ? 'bg-slate-900 border border-slate-700 text-gray-300 hover:bg-slate-800' : 'bg-gray-50 border border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              <SlidersHorizontal size={16} />
              More Filters
            </button>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              className="mt-4 pt-4 border-t flex flex-wrap gap-4 items-end"
              style={{ borderColor: dark ? '#334155' : '#e5e7eb' }}
            >
              <div>
                <label className={`block text-xs font-semibold mb-1.5 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>Duration</label>
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className={`rounded-xl px-4 py-2.5 border text-sm ${dark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-gray-50 border-gray-300'}`}
                >
                  {DURATIONS.map(d => <option key={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label className={`block text-xs font-semibold mb-1.5 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className={`rounded-xl px-4 py-2.5 border text-sm ${dark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-gray-50 border-gray-300'}`}
                >
                  {SORT_OPTIONS.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold text-red-500 border border-red-300 hover:bg-red-50 transition"
                >
                  <X size={14} />
                  Clear All
                </button>
              )}
            </motion.div>
          )}
        </div>

        {/* Quick Filter Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {['Easy', 'Moderate', 'Difficult', 'Weekend Treks', 'Snow Treks'].map((tag) => {
            const isActive =
              (tag === 'Weekend Treks' && selectedDuration === '1-3 Days') ||
              selectedDifficulty === tag
            return (
              <button
                key={tag}
                onClick={() => {
                  if (tag === 'Weekend Treks') {
                    setSelectedDuration(selectedDuration === '1-3 Days' ? 'All' : '1-3 Days')
                  } else {
                    setSelectedDifficulty(selectedDifficulty === tag ? 'All' : tag)
                  }
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  isActive
                    ? 'bg-green-600 text-white'
                    : dark
                    ? 'bg-slate-800 text-gray-300 hover:bg-green-600 hover:text-white border border-slate-700'
                    : 'bg-white border text-gray-700 hover:bg-green-600 hover:text-white hover:border-green-600'
                }`}
              >
                {tag}
              </button>
            )
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6">
          {[
            { icon: <Mountain size={28} />, value: `${trekData.length}+`, title: 'Trek Packages' },
            { icon: <MapPinned size={28} />, value: '3', title: 'States Covered' },
            { icon: <Calendar size={28} />, value: '365', title: 'Trips Every Year' },
            { icon: '⭐', value: '4.8', title: 'Avg. Rating' },
          ].map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl p-5 text-center ${dark ? 'bg-slate-800 border border-slate-700' : 'bg-white border shadow-sm'}`}
            >
              <div className="text-green-600 flex justify-center mb-2 text-2xl">
                {typeof item.icon === 'string' ? item.icon : item.icon}
              </div>
              <h2 className={`text-3xl font-extrabold ${dark ? 'text-white' : 'text-gray-900'}`}>{item.value}</h2>
              <p className={`mt-1 text-sm ${dark ? 'text-gray-400' : 'text-gray-500'}`}>{item.title}</p>
            </div>
          ))}
        </div>

        {/* Results header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-xl font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
            {filteredTreks.length === 0
              ? 'No treks found'
              : `${filteredTreks.length} Trek${filteredTreks.length !== 1 ? 's' : ''} Found`}
            {selectedState !== 'All' && <span className="text-green-600"> in {selectedState}</span>}
          </h2>
          {hasActiveFilters && (
            <button onClick={clearFilters} className="text-sm text-green-600 hover:underline font-medium">
              Clear filters
            </button>
          )}
        </div>

        {/* Trek Cards Grid */}
        {filteredTreks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
            {filteredTreks.map((trek, i) => (
              <div key={trek._id} style={{ animationDelay: `${i * 0.05}s` }}>
                <TrekCard trek={trek} />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className={`text-2xl font-bold mb-3 ${dark ? 'text-white' : 'text-gray-900'}`}>No Treks Found</h3>
            <p className={`mb-6 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
              Try adjusting your search or filters to find the perfect trek.
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Treks