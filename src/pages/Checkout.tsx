import { Link } from "react-router-dom";
import { PRODUCTS } from "../constants";
import { Trash2, Plus, Minus, CreditCard, Truck, ShieldCheck, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export default function Checkout() {
  const [cart, setCart] = useState(PRODUCTS.slice(0, 2).map(p => ({ ...p, quantity: 1 })));

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  const updateQuantity = (id: string, delta: number) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="bg-cream min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-olive-900 mb-12">Your Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.length > 0 ? (
              cart.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  className="bg-white rounded-3xl p-6 border border-olive-900/5 shadow-sm flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
                >
                  <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl font-serif font-bold text-olive-900">{item.name}</h3>
                    <p className="text-sm text-olive-900/40 uppercase tracking-widest font-bold">{item.weight}</p>
                    <p className="text-lg font-bold text-olive-700 mt-1">${item.price}</p>
                  </div>

                  <div className="flex items-center border border-olive-900/10 rounded-full px-3 py-1 bg-cream">
                    <button onClick={() => updateQuantity(item.id, -1)} className="p-1 text-olive-900 hover:text-amber-600 transition-colors">
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center font-bold text-olive-900">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="p-1 text-olive-900 hover:text-amber-600 transition-colors">
                      <Plus size={16} />
                    </button>
                  </div>

                  <div className="text-right hidden sm:block">
                    <p className="text-lg font-bold text-olive-900">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-olive-900/20 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-olive-900/20">
                <p className="text-xl text-olive-900/40 font-serif italic mb-6">Your cart is empty</p>
                <Link to="/shop" className="bg-olive-800 text-white px-8 py-3 rounded-full font-bold hover:bg-olive-700 transition-all">
                  Start Shopping
                </Link>
              </div>
            )}

            <Link to="/shop" className="inline-flex items-center text-olive-900/60 hover:text-olive-900 font-bold transition-colors group">
              <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 border border-olive-900/5 shadow-xl sticky top-24">
              <h2 className="text-2xl font-serif font-bold text-olive-900 mb-8">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-olive-900/60">
                  <span>Subtotal</span>
                  <span className="font-bold text-olive-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-olive-900/60">
                  <span>Shipping</span>
                  <span className="font-bold text-olive-900">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-olive-900/60">
                  <span>Tax</span>
                  <span className="font-bold text-olive-900">$0.00</span>
                </div>
                <div className="border-t border-olive-900/10 pt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-olive-900">Total</span>
                  <span className="text-2xl font-bold text-amber-600">${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-5 rounded-2xl font-bold text-lg transition-all shadow-xl flex items-center justify-center mb-6 group">
                Place Order <CreditCard size={20} className="ml-3 group-hover:scale-110 transition-transform" />
              </button>

              <div className="space-y-4">
                <div className="flex items-center text-xs text-olive-900/40 font-bold uppercase tracking-widest">
                  <Truck size={16} className="mr-3 text-amber-600" /> Free delivery on orders over $50
                </div>
                <div className="flex items-center text-xs text-olive-900/40 font-bold uppercase tracking-widest">
                  <ShieldCheck size={16} className="mr-3 text-amber-600" /> Secure checkout guaranteed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
