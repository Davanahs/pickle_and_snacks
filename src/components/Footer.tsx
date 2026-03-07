import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-olive-900 text-cream">
      {/* Instagram Feed Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-serif font-bold text-olive-900">Follow us @HomeMadeTradition</h3>
            <a href="#" className="text-amber-600 font-bold flex items-center hover:text-amber-700 transition-colors">
              Follow on Instagram <Instagram size={18} className="ml-2" />
            </a>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[
              "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=300",
              "https://images.unsplash.com/photo-1589135303604-b936edcbb10d?auto=format&fit=crop&q=80&w=300",
              "https://images.unsplash.com/photo-1544145945-f904253d0c7b?auto=format&fit=crop&q=80&w=300",
              "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&q=80&w=300",
              "https://images.unsplash.com/photo-1621841957884-1210fe19d66d?auto=format&fit=crop&q=80&w=300",
              "https://images.unsplash.com/photo-1605666807844-78fbad0d9445?auto=format&fit=crop&q=80&w=300"
            ].map((img, idx) => (
              <a key={idx} href="#" className="aspect-square overflow-hidden group relative">
                <img
                  src={img}
                  alt={`Instagram ${idx}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-olive-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram size={24} className="text-white" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-serif font-bold tracking-tight mb-6 block">
              HomeMade <span className="text-amber-600 italic">Pickles & Snacks</span>
            </Link>
            <p className="text-cream/60 text-sm leading-relaxed mb-6">
              Preserving tradition, one jar at a time. Our recipes are passed down through generations, using only the finest organic ingredients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-600 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-amber-600 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-amber-600 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-amber-600">Quick Links</h4>
            <ul className="space-y-4 text-sm text-cream/60">
              <li><Link to="/" className="hover:text-cream transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-cream transition-colors">Shop All</Link></li>
              <li><Link to="/about" className="hover:text-cream transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-cream transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-cream transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-amber-600">Categories</h4>
            <ul className="space-y-4 text-sm text-cream/60">
              <li><Link to="/shop?category=pickles" className="hover:text-cream transition-colors">Traditional Pickles</Link></li>
              <li><Link to="/shop?category=snacks" className="hover:text-cream transition-colors">Healthy Snacks</Link></li>
              <li><Link to="/shop?category=spices" className="hover:text-cream transition-colors">Hand-ground Spices</Link></li>
              <li><Link to="/shop?category=gifts" className="hover:text-cream transition-colors">Gift Hampers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6 text-amber-600">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-cream/60">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-amber-600 flex-shrink-0" />
                <span>123 Heritage Lane, Traditional Village, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-amber-600 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-amber-600 flex-shrink-0" />
                <span>hello@homemadepickles.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-cream/40">
          <p>© 2024 HomeMade Pickles & Snacks. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cream transition-colors">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
