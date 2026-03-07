import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, ShieldCheck, Truck, Leaf, Plus } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS } from "../constants";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-olive-900">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1920"
            alt="Fresh Vegetables and Spices"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-olive-900 via-olive-900/80 to-transparent z-10"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-cream/80 text-lg md:text-xl mb-8 leading-relaxed font-light">
                Experience the rich flavors of homemade pickles and snacks, made from organic ingredients and age-old recipes passed down through generations.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  to="/shop"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center group"
                >
                  Shop Now <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="border border-cream/30 hover:border-cream text-cream px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center"
                >
                  Our Story
                </Link>
              </div>

              {/* Popular Picks - Populated with requested images */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-12"
              >
                <p className="text-cream/60 text-xs font-bold uppercase tracking-widest mb-4">Popular Picks:</p>
                <div className="flex flex-wrap items-center gap-4">
                  {PRODUCTS.filter(p => ["1", "3", "5", "6"].includes(p.id)).map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      className="group relative w-16 h-16 rounded-full overflow-hidden border-2 border-cream/20 hover:border-amber-600 transition-all shadow-lg bg-olive-800"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-olive-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Plus size={16} className="text-white" />
                      </div>
                    </Link>
                  ))}
                  <div className="hidden sm:block ml-2">
                    <p className="text-cream font-serif italic text-sm">Mango, Makhana, Chips & more...</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Featured Image - Spicy Mango Pickle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="hidden lg:block relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white/10 aspect-[4/5] w-full max-w-md mx-auto bg-olive-800">
                <img
                  src={PRODUCTS[0].image}
                  alt="Featured Spicy Mango Pickle"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-olive-900 to-transparent">
                  <p className="text-amber-600 font-serif italic text-xl">Best Seller</p>
                  <h3 className="text-cream text-3xl font-serif font-bold">{PRODUCTS[0].name}</h3>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-600/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-olive-600/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: <Leaf className="text-amber-600" size={32} />, title: "100% Organic", desc: "Sourced directly from local farmers" },
              { icon: <ShieldCheck className="text-amber-600" size={32} />, title: "No Preservatives", desc: "Pure, natural, and healthy" },
              { icon: <Truck className="text-amber-600" size={32} />, title: "Fast Delivery", desc: "Freshly packed and shipped" },
              { icon: <Star className="text-amber-600" size={32} />, title: "Traditional Recipes", desc: "Authentic taste in every bite" }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-serif font-bold text-olive-900 mb-2">{feature.title}</h3>
                <p className="text-olive-900/60 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section - NEW */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1544145945-f904253d0c7b?auto=format&fit=crop&q=80&w=600"
                  alt="Fresh Vegetables"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1589135303604-b936edcbb10d?auto=format&fit=crop&q=80&w=600"
                  alt="Spices"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-8 rounded-2xl shadow-2xl hidden md:block">
                <p className="text-3xl font-serif font-bold italic">30+ Years</p>
                <p className="text-sm uppercase tracking-widest font-bold">Of Heritage</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-amber-600 font-serif italic text-lg block mb-2">Our Craft</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-olive-900 mb-6 leading-tight">
                Traditional Methods, <span className="text-amber-600 italic">Modern Standards</span>
              </h2>
              <p className="text-olive-900/70 text-lg mb-8 leading-relaxed font-light">
                Every jar of pickle and every packet of snack is a labor of love. We follow traditional sun-drying and slow-curing methods that have been used for centuries, ensuring that the natural flavors and nutrients are perfectly preserved.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Sun-dried ingredients for maximum flavor",
                  "Cold-pressed oils for health and aroma",
                  "Hand-ground spices prepared in small batches",
                  "No artificial colors or synthetic flavors"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-olive-900 font-medium">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="text-olive-900 font-bold border-b-2 border-amber-600 pb-1 hover:text-amber-600 transition-colors">
                Learn more about our process
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - NEW */}
      <section className="py-24 bg-olive-900 text-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-serif italic text-lg block mb-2">Customer Stories</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold">What People Are Saying</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Anjali Sharma",
                role: "Food Blogger",
                text: "The Mango Pickle took me straight back to my grandmother's kitchen. The authenticity is unmatched!",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
              },
              {
                name: "Rahul Verma",
                role: "Health Enthusiast",
                text: "Finally found a snack that's actually healthy and delicious. The Roasted Makhana is my new favorite.",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
              },
              {
                name: "Priya Patel",
                role: "Home Maker",
                text: "I trust HomeMade for my family. No preservatives and pure organic ingredients make all the difference.",
                img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
              }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10"
              >
                <div className="flex items-center mb-6">
                  <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-amber-600" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-cream">{t.name}</h4>
                    <p className="text-xs text-amber-600 uppercase tracking-widest font-bold">{t.role}</p>
                  </div>
                </div>
                <p className="text-cream/70 italic leading-relaxed">"{t.text}"</p>
                <div className="flex text-amber-600 mt-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-amber-600 font-serif italic text-lg block mb-2">Our Best Sellers</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-olive-900">Featured Products</h2>
            </div>
            <Link to="/shop" className="text-olive-900 hover:text-amber-600 font-bold flex items-center group transition-colors">
              View All <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {PRODUCTS.filter(p => ["2", "4"].includes(p.id)).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-olive-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1621841957884-1210fe19d66d?auto=format&fit=crop&q=80&w=1920"
            alt="CTA Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-10">
          <div className="absolute top-10 left-10 w-64 h-64 border-4 border-cream rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-cream rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-20">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-cream mb-8 leading-tight">
            Ready to taste the <span className="text-amber-600 italic">homemade goodness?</span>
          </h2>
          <p className="text-cream/80 text-lg mb-12 max-w-2xl mx-auto font-light">
            Join thousands of happy customers who have rediscovered the authentic flavors of traditional Indian pickles and snacks.
          </p>
          <Link
            to="/shop"
            className="bg-cream text-olive-900 hover:bg-white px-12 py-5 rounded-full font-bold text-lg transition-all inline-block shadow-xl"
          >
            Start Shopping
          </Link>
        </div>
      </section>
    </div>
  );
}
