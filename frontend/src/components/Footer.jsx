import React from 'react'
import { Link } from 'react-router-dom'
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'

const Footer = () => {
  const { theme } = useTheme()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Treks', path: '/treks' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  const destinations = [
    { name: 'Uttarakhand', path: '/treks?state=uttarakhand' },
    { name: 'Himachal Pradesh', path: '/treks?state=himachal' },
    { name: 'Kedarkantha', path: '/treks/kedarkantha' },
    { name: 'Hampta Pass', path: '/treks/hampta-pass' },
    { name: 'Valley of Flowers', path: '/treks/valley-of-flowers' },
    { name: 'Triund Trek', path: '/treks/triund' },
  ]

  const importantLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Refund Policy', path: '/refund' },
    { name: 'Cancellation Policy', path: '/cancellation' },
    { name: 'Safety Guidelines', path: '/safety' },
    { name: 'FAQs', path: '/faq' },
  ]

  return (
    <footer className={`${theme === 'dark' ? 'bg-primary-dark' : 'bg-gray-900'} text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-green to-primary-blue flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-bold">Traventure</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Discover the Himalayas like never before. Premium adventure travel experiences with expert guides, safety first approach, and unforgettable memories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-blue transition-colors">
                <FiFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-orange transition-colors">
                <FiInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-blue transition-colors">
                <FiTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <FiYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-green">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-green">Popular Destinations</h3>
            <ul className="space-y-2">
              {destinations.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-green">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FiMapPin className="text-primary-orange mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm">
                  123 Adventure Street, Delhi, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="text-primary-orange flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm">+91 9876 XXX XXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="text-primary-orange flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm">info@traventure.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Traventure. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {importantLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
