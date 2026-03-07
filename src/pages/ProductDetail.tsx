import { useParams, Link } from "react-router-dom";
import { PRODUCTS } from "../constants";
import { ShoppingCart, ArrowLeft, Star, ShieldCheck, Leaf, Truck, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-cream">
        <h1 className="text-4xl font-serif font-bold text-olive-900 mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-amber-600 hover:text-amber-700 font-bold flex items-center">
          <ArrowLeft size={20} className="mr-2" /> Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/shop" className="text-olive-900/60 hover:text-olive-900 font-medium flex items-center mb-8 transition-colors group">
          <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-olive-900/5 bg-white"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-6 left-6">
              <span className="bg-amber-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                {product.category}
              </span>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex text-amber-600">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="text-sm text-olive-900/60 font-medium">(48 Reviews)</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-serif font-bold text-olive-900 mb-4 leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-3xl font-bold text-olive-700">${product.price}</span>
              <span className="text-sm text-olive-900/40 uppercase tracking-widest font-bold border-l border-olive-900/20 pl-4">
                {product.weight}
              </span>
            </div>

            <p className="text-lg text-olive-900/70 mb-10 leading-relaxed font-light">
              {product.description}
            </p>

            <div className="mb-10">
              <h4 className="text-sm font-bold text-olive-900 uppercase tracking-widest mb-4">Ingredients</h4>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ing, idx) => (
                  <span key={idx} className="bg-white border border-olive-900/10 px-3 py-1 rounded-full text-xs text-olive-900/60 font-medium">
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center mb-12">
              <div className="flex items-center border border-olive-900/20 rounded-full px-4 py-2 bg-white">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 text-olive-900 hover:text-amber-600 transition-colors"
                >
                  <Minus size={18} />
                </button>
                <span className="w-12 text-center font-bold text-lg text-olive-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 text-olive-900 hover:text-amber-600 transition-colors"
                >
                  <Plus size={18} />
                </button>
              </div>
              
              <button className="flex-1 w-full bg-olive-800 hover:bg-olive-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center shadow-xl group">
                <ShoppingCart size={22} className="mr-3" /> Add to Cart
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-olive-900/10">
              <div className="text-center">
                <Leaf className="mx-auto text-amber-600 mb-2" size={24} />
                <span className="text-[10px] uppercase tracking-widest font-bold text-olive-900/60">Organic</span>
              </div>
              <div className="text-center">
                <ShieldCheck className="mx-auto text-amber-600 mb-2" size={24} />
                <span className="text-[10px] uppercase tracking-widest font-bold text-olive-900/60">Pure</span>
              </div>
              <div className="text-center">
                <Truck className="mx-auto text-amber-600 mb-2" size={24} />
                <span className="text-[10px] uppercase tracking-widest font-bold text-olive-900/60">Fast</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
