
    import React from 'react';
    import { Link, NavLink } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Camera, Linkedin, Instagram, Mail } from 'lucide-react';

    const Header = () => {
      const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
      ];

      return (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 50 }}
          className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
        >
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo_tran.png" alt="Logo" className="h-8 w-8" />
              <span className="text-2xl font-bold font-heading avocado-gradient-text">
                Avokado Foto
              </span>
            </Link>

            <nav className="hidden md:flex space-x-6 items-center">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-gray-600 hover:text-avocado-end transition-colors ${
                      isActive ? 'text-avocado-end font-semibold' : ''
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-avocado-end transition-colors">
                 <Linkedin size={20} />
               </a>
               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-avocado-end transition-colors">
                 <Instagram size={20} />
               </a>
               <a href="mailto:hello@avocadofoto.com" className="text-gray-500 hover:text-avocado-end transition-colors">
                 <Mail size={20} />
               </a>
             </div>

            {/* Mobile Menu Button (optional implementation) */}
            {/* <button className="md:hidden">Menu</button> */}
          </div>
        </motion.header>
      );
    };

    export default Header;
  