import { motion } from "motion/react";
import { Star, ShieldCheck, Leaf, Truck, Heart, Users, History } from "lucide-react";

export default function About() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-olive-900">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&q=80&w=1920"
            alt="Traditional Kitchen"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-olive-900/60 to-olive-900 z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-amber-600 font-serif italic text-xl mb-4 block"
          >
            Since 1994
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-cream mb-6"
          >
            Our Story of <span className="text-amber-600 italic">Heritage</span>
          </motion.h1>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold text-olive-900 mb-8">
                Preserving the <span className="text-amber-600 italic">Authentic Flavors</span> of India
              </h2>
              <p className="text-olive-900/70 text-lg mb-6 leading-relaxed">
                What started in a small home kitchen in a quiet village has grown into a mission to bring the authentic, preservative-free taste of traditional Indian pickles and snacks to the world.
              </p>
              <p className="text-olive-900/70 text-lg mb-10 leading-relaxed">
                We believe that food is more than just sustenance; it's a connection to our roots, our families, and our history. That's why every jar we produce follows the exact recipes passed down through three generations of our family.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-start">
                  <div className="bg-amber-600/10 p-3 rounded-xl mr-4">
                    <Heart className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-olive-900">Made with Love</h4>
                    <p className="text-sm text-olive-900/60">Every batch is hand-crafted</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-600/10 p-3 rounded-xl mr-4">
                    <History className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-olive-900">30 Years</h4>
                    <p className="text-sm text-olive-900/60">Of culinary excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1544145945-f904253d0c7b?auto=format&fit=crop&q=80&w=800"
                alt="Traditional Spices"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-amber-600 text-white p-8 rounded-2xl shadow-2xl hidden md:block">
                <p className="text-4xl font-serif font-bold">100%</p>
                <p className="text-sm uppercase tracking-widest font-bold">Natural Ingredients</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-olive-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Leaf size={40} />,
                title: "Organic Sourcing",
                desc: "We partner directly with local farmers who use sustainable, organic practices to grow our ingredients."
              },
              {
                icon: <ShieldCheck size={40} />,
                title: "Zero Preservatives",
                desc: "Our preservation methods are purely traditional—using salt, oil, and sun-drying to ensure safety and flavor."
              },
              {
                icon: <Users size={40} />,
                title: "Community First",
                desc: "We provide employment opportunities to local village women, empowering them through their traditional skills."
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all text-center border border-olive-900/5"
              >
                <div className="text-amber-600 mb-6 flex justify-center">{value.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-olive-900 mb-4">{value.title}</h3>
                <p className="text-olive-900/60 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Kitchen Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=400"
                alt="Kitchen 1"
                className="rounded-2xl h-64 w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?auto=format&fit=crop&q=80&w=400"
                alt="Kitchen 2"
                className="rounded-2xl h-64 w-full object-cover mt-8"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=400"
                alt="Kitchen 3"
                className="rounded-2xl h-64 w-full object-cover -mt-8"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=400"
                alt="Kitchen 4"
                className="rounded-2xl h-64 w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-serif font-bold text-olive-900 mb-8">
                Where the <span className="text-amber-600 italic">Magic Happens</span>
              </h2>
              <p className="text-olive-900/70 text-lg mb-6 leading-relaxed">
                Our kitchen isn't a factory. It's a place of rhythm, aroma, and care. We work in small batches to ensure that every jar meets our high standards of quality and taste.
              </p>
              <p className="text-olive-900/70 text-lg mb-10 leading-relaxed">
                From the careful selection of spices to the patient sun-drying of mangoes, our process is slow, deliberate, and deeply respectful of the ingredients.
              </p>
              <div className="flex items-center space-x-8">
                <div>
                  <p className="text-3xl font-serif font-bold text-olive-900">50+</p>
                  <p className="text-xs uppercase tracking-widest font-bold text-olive-900/40">Village Artisans</p>
                </div>
                <div className="w-px h-12 bg-olive-900/10"></div>
                <div>
                  <p className="text-3xl font-serif font-bold text-olive-900">10k+</p>
                  <p className="text-xs uppercase tracking-widest font-bold text-olive-900/40">Happy Families</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
