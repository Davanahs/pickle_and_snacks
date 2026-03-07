import { Link } from "react-router-dom";
import { Mail, Lock, ArrowRight, User } from "lucide-react";
import { motion } from "motion/react";

export default function Signup() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white rounded-3xl shadow-2xl border border-olive-900/5 p-10"
      >
        <div className="text-center mb-10">
          <Link to="/" className="text-2xl font-serif font-bold tracking-tight mb-4 inline-block">
            HomeMade <span className="text-amber-600 italic">Pickles & Snacks</span>
          </Link>
          <h2 className="text-3xl font-serif font-bold text-olive-900">Join Our Family</h2>
          <p className="text-olive-900/60 text-sm mt-2">Create an account to start shopping</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-olive-900 uppercase tracking-widest mb-2">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-olive-900/40" size={18} />
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-cream border border-olive-900/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-600 transition-all text-olive-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-olive-900 uppercase tracking-widest mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-olive-900/40" size={18} />
              <input
                type="email"
                placeholder="hello@example.com"
                className="w-full bg-cream border border-olive-900/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-600 transition-all text-olive-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-olive-900 uppercase tracking-widest mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-olive-900/40" size={18} />
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-cream border border-olive-900/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-amber-600/20 focus:border-amber-600 transition-all text-olive-900"
              />
            </div>
          </div>

          <button className="w-full bg-olive-800 hover:bg-olive-700 text-white py-4 rounded-2xl font-bold text-lg transition-all shadow-xl flex items-center justify-center group">
            Create Account <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-sm text-olive-900/60">
            Already have an account?{" "}
            <Link to="/login" className="text-amber-600 font-bold hover:text-amber-700 transition-colors">Sign In</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
