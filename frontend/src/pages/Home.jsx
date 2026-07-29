import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiStar, FiUsers, FiMap, FiAward, FiClock } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { useInView } from 'react-intersection-observer'
import { trekData } from '../data/trekData'

const Home = () => {
  const { theme } = useTheme()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const featuredTreks = trekData.filter(t => t.featured).slice(0, 3)

  const destinations = [
    { name: 'Uttarakhand', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=400', treks: trekData.filter(t => t.state === 'Uttarakhand').length },
    { name: 'Himachal Pradesh', image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=400', treks: trekData.filter(t => t.state === 'Himachal Pradesh').length },
    { name: 'Kashmir', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400', treks: trekData.filter(t => t.state === 'Kashmir').length },
  ]

  const whyChooseUs = [
    { icon: FiAward, title: 'Expert Guides', description: 'Certified trek leaders with years of experience' },
    { icon: FiUsers, title: 'Small Groups', description: 'Personalized attention with limited group sizes' },
    { icon: FiMap, title: 'Curated Routes', description: 'Handpicked trails for the best experience' },
    { icon: FiClock, title: '24/7 Support', description: 'Round-the-clock assistance during treks' },
  ]

  const stats = [
    { value: '15000+', label: 'Happy Customers' },
    { value: '500+', label: 'Trips Completed' },
    { value: '8+', label: 'Years Experience' },
    { value: '4.8', label: 'Average Rating' },
  ]

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-primary-dark' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920"
            alt="Himalayan Mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Discover the Himalayas
            <br />
            <span className="text-primary-orange">Like Never Before</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Premium adventure travel experiences with expert guides, safety-first approach, and unforgettable memories in Uttarakhand and Himachal Pradesh.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/treks"
              className="px-8 py-4 bg-primary-green text-white rounded-full font-semibold text-lg hover:bg-green-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Explore Adventures</span>
              <FiArrowRight size={20} />
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 bg-white/20 backdrop-blur-lg text-white rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              Learn More
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Popular Destinations
            </h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Explore the most breathtaking locations in the Himalayas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{destination.name}</h3>
                  <p className="text-gray-300">{destination.treks} Treks Available</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* featured Treks */}
      <section className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Featured Treks
            </h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Handpicked adventures for unforgettable experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTreks.map((trek, index) => (
              <motion.div
                key={trek._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="relative">
                  <img
                    src={trek.images[0]}
                    alt={trek.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {trek.discount}% OFF
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                    <FiStar className="text-yellow-500" size={16} />
                    <span className="text-sm font-semibold">{trek.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-primary-green font-medium">{trek.state}</span>
                    <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {trek.difficulty}
                    </span>
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {trek.name}
                  </h3>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm">
                    <span className={`flex items-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      <FiClock className="mr-1" size={16} />
                      {trek.duration}
                    </span>
                    <span className={`flex items-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      <FiMap className="mr-1" size={16} />
                      {trek.altitude}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-primary-green">₹{trek.price.toLocaleString()}</span>
                      <span className={`text-sm line-through ml-2 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
                        ₹{trek.originalPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  
                  <Link
                    to={`/treks/${trek.slug}`}
                    className="block w-full py-3 bg-primary-green text-white rounded-lg font-semibold text-center hover:bg-green-700 transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/treks"
              className="inline-flex items-center space-x-2 px-8 py-3 border-2 border-primary-green text-primary-green rounded-full font-semibold hover:bg-primary-green hover:text-white transition-all duration-300"
            >
              <span>View All Treks</span>
              <FiArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Why Choose Traventure?
            </h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Experience adventure with confidence and safety
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-8 rounded-2xl text-center ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="w-16 h-16 bg-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="text-primary-green" size={32} />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {item.title}
                </h3>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-green mb-2">
                  {stat.value}
                </div>
                <div className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1533588701443-3c52b029e8ee?w=1200"
              alt="Adventure"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-green/90 to-primary-blue/90" />
            <div className="absolute inset-0 flex items-center justify-center text-center px-4">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Ready for Your Next Adventure?
                </h2>
                <p className="text-xl text-gray-200 mb-8">
                  Join thousands of happy travelers who've experienced the Himalayas with us
                </p>
                <Link
                  to="/treks"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-primary-green rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
                >
                  <span>Start Your Journey</span>
                  <FiArrowRight size={20} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
