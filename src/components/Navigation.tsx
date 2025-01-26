import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, BarChart3, Settings, Phone, LogIn, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  const getLinks = () => {
    const baseLinks = [
      { to: '/home', icon: Home, label: 'Home' },
      { to: '/services', icon: Settings, label: 'Services' },
      { to: '/contact', icon: Phone, label: 'Contact' },
    ];

    if (isAuthenticated) {
      return [
        ...baseLinks,
        { to: '/dashboard', icon: BarChart3, label: 'Dashboard' },
        { onClick: handleLogout, icon: LogOut, label: 'Logout' },
      ];
    }

    return [
      ...baseLinks,
      { to: '/auth', icon: LogIn, label: 'Login' },
    ];
  };

  const links = getLinks();

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/home" className="flex items-center space-x-3">
            <Settings className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">Smart Space</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <motion.div
                key={link.label}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                {link.to ? (
                  <Link
                    to={link.to}
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <link.icon className="w-5 h-5" />
                    <span>{link.label}</span>
                    {location.pathname === link.to && (
                      <motion.div
                        layoutId="underline"
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-600"
                      />
                    )}
                  </Link>
                ) : (
                  <button
                    onClick={link.onClick}
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <link.icon className="w-5 h-5" />
                    <span>{link.label}</span>
                  </button>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{ height: isMenuOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden bg-white"
      >
        <div className="px-4 py-2 space-y-1">
          {links.map((link) => (
            <motion.div
              key={link.label}
              whileHover={{ scale: 1.02 }}
              className="block"
            >
              {link.to ? (
                <Link
                  to={link.to}
                  className="flex items-center space-x-2 p-3 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <link.icon className="w-5 h-5" />
                  <span>{link.label}</span>
                </Link>
              ) : (
                <button
                  onClick={link.onClick}
                  className="flex items-center space-x-2 w-full p-3 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                >
                  <link.icon className="w-5 h-5" />
                  <span>{link.label}</span>
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navigation;