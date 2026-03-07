import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../types";
import { ShoppingCart, Plus } from "lucide-react";
import { motion } from "motion/react";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden border border-olive-900/5 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-amber-600 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>
      </Link>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/product/${product.id}`}>
            <h3 className="text-xl font-serif font-bold text-olive-900 group-hover:text-amber-600 transition-colors">
              {product.name}
            </h3>
          </Link>
          <span className="text-lg font-bold text-olive-700">${product.price}</span>
        </div>
        
        <p className="text-sm text-olive-900/60 line-clamp-2 mb-4 font-light">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-olive-900/40 uppercase tracking-wider font-semibold">
            {product.weight}
          </span>
          <button className="bg-olive-800 hover:bg-olive-700 text-white p-2 rounded-full transition-colors flex items-center justify-center">
            <Plus size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
