import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiSun, FiMoon, FiUser, FiLogOut } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { user, logout, isAuthenticated } = useAuth()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Treks', path: '/treks' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? theme === 'dark'
            ? 'bg-primary-dark/95 backdrop-blur-lg shadow-lg'
            : 'bg-white/95 backdrop-blur-lg shadow-lg'
          : theme === 'dark'
          ? 'bg-primary-dark/80 backdrop-blur-md'
          : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-green to-primary-blue flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Traventure
            </span>
          </Link>

          {/* Desktop Navigation */}
{/* Desktop Navigation */}
<div className="hidden md:flex items-center space-x-8">
  {navLinks.map((link) => {
    const isActive = location.pathname === link.path

    return (
      <Link
        key={link.path}
        to={link.path}
        className="relative group py-2"
      >
        <span
          className={`font-semibold text-[16px] transition-all duration-300 ${
            isActive
              ? 'text-primary-green'
              : theme === 'dark'
              ? 'text-gray-300 group-hover:text-white'
              : 'text-gray-700 group-hover:text-primary-green'
          }`}
        >
          {link.name}
        </span>

        {/* Underline */}
        <span
          className={`absolute left-0 -bottom-1 h-[3px] rounded-full bg-primary-green transition-all duration-300 ${
            isActive
              ? 'w-full'
              : 'w-0 group-hover:w-full'
          }`}
        />
      </Link>
    )
  })}
</div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-200 ${
                theme === 'dark'
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            {/* Auth Buttons */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <Link
                  to={user?.role === 'admin' ? '/admin' : '/profile'}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    theme === 'dark'
                      ? 'bg-gray-800 text-white hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  <FiUser size={18} />
                  <span>{user?.name}</span>
                </Link>
                <button
                  onClick={logout}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-primary-orange text-white hover:bg-orange-600 transition-all duration-200"
                >
                  <FiLogOut size={18} />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
  to="/login"
  className="relative group px-2 py-2"
>
  <span
    className={`font-medium transition-all duration-300 ${
      location.pathname === '/login'
        ? 'text-primary-green'
        : theme === 'dark'
        ? 'text-gray-300 group-hover:text-white'
        : 'text-gray-700 group-hover:text-primary-green'
    }`}
  >
    Login
  </span>

  <span
    className={`absolute left-0 -bottom-1 h-[3px] rounded-full bg-primary-green transition-all duration-300 ${
      location.pathname === '/login'
        ? 'w-full'
        : 'w-0 group-hover:w-full'
    }`}
  />
</Link>
                <Link
  to="/signup"
  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
    location.pathname === '/signup'
      ? 'bg-green-700 ring-2 ring-green-300 text-white'
      : 'bg-primary-green hover:bg-green-700 text-white'
  }`}
>
  Sign Up
</Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-200 ${
                theme === 'dark'
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all duration-200 ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-white'
                  : 'text-gray-700 hover:text-primary-green'
              }`}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`md:hidden py-4 border-t transition-all duration-200 ${
              theme === 'dark'
                ? 'bg-gray-900 border-gray-800'
                : 'bg-white border-gray-200'
            }`}
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-primary-green'
                      : theme === 'dark'
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-700 hover:text-primary-green'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                {isAuthenticated ? (
                  <div className="flex flex-col space-y-3">
                    <Link
                      to={user?.role === 'admin' ? '/admin' : '/profile'}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                        theme === 'dark'
                          ? 'bg-gray-800 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <FiUser size={18} />
                      <span>Profile</span>
                    </Link>
                    <button
                      onClick={() => {
                        logout()
                        setIsOpen(false)
                      }}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-primary-orange text-white"
                    >
                      <FiLogOut size={18} />
                      <span>Logout</span>
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-3">
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-2 rounded-lg text-center font-medium ${
                        theme === 'dark'
                          ? 'text-gray-300 hover:text-white'
                          : 'text-gray-700 hover:text-primary-green'
                      }`}
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-2 rounded-lg bg-primary-green text-white font-medium text-center"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
