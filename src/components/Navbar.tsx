import { Link } from "react-router-dom";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-cream border-b border-olive-900/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-serif font-bold text-olive-900 tracking-tight">
              HomeMade <span className="text-amber-600 italic">Pickles & Snacks</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-olive-900 hover:text-amber-600 font-medium transition-colors">Home</Link>
            <Link to="/shop" className="text-olive-900 hover:text-amber-600 font-medium transition-colors">Shop</Link>
            <Link to="/about" className="text-olive-900 hover:text-amber-600 font-medium transition-colors">Our Story</Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-olive-900 hover:text-amber-600 transition-colors">
              <Search size={20} />
            </button>
            <Link to="/login" className="text-olive-900 hover:text-amber-600 transition-colors">
              <User size={20} />
            </Link>
            <Link to="/checkout" className="text-olive-900 hover:text-amber-600 transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-olive-900 hover:text-amber-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream border-t border-olive-900/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <Link to="/" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-olive-900">Home</Link>
              <Link to="/shop" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-olive-900">Shop</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-olive-900">Our Story</Link>
              <div className="pt-4 flex items-center space-x-6 border-t border-olive-900/10">
                <Link to="/login" onClick={() => setIsOpen(false)} className="flex items-center text-olive-900">
                  <User size={20} className="mr-2" /> Account
                </Link>
                <Link to="/checkout" onClick={() => setIsOpen(false)} className="flex items-center text-olive-900">
                  <ShoppingCart size={20} className="mr-2" /> Cart (2)
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
