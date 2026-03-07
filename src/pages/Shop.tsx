import { useState } from "react";
import { PRODUCTS } from "../constants";
import ProductCard from "../components/ProductCard";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { motion } from "motion/react";

export default function Shop() {
  const [category, setCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory = category === "All" || p.category === category;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ["All", "Pickles", "Snacks"];

  return (
    <div className="bg-cream min-h-screen">
      {/* Header with Background */}
      <section className="relative h-[40vh] flex items-center overflow-hidden bg-olive-900">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1621841957884-1210fe19d66d?auto=format&fit=crop&q=80&w=1920"
            alt="Shop Header"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-olive-900/60 to-olive-900 z-10"></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-amber-600 font-serif italic text-lg block mb-2"
          >
            Our Collection
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif font-bold text-cream"
          >
            Shop All Products
          </motion.h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-6 md:space-y-0">
          <div className="flex items-center space-x-2 bg-white rounded-full px-6 py-2 border border-olive-900/10 shadow-sm w-full md:w-auto">
            <Search size={18} className="text-olive-900/40" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none focus:outline-none text-olive-900 w-full md:w-64"
            />
          </div>

          <div className="flex items-center space-x-4 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all whitespace-nowrap ${
                  category === cat
                    ? "bg-amber-600 text-white shadow-lg"
                    : "bg-white text-olive-900 border border-olive-900/10 hover:border-amber-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-2xl font-serif italic text-olive-900/40">No products found matching your criteria.</p>
              <button
                onClick={() => { setCategory("All"); setSearchQuery(""); }}
                className="mt-6 text-amber-600 font-bold border-b-2 border-amber-600 pb-1"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
