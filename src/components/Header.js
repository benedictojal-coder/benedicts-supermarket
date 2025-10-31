"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function Header() {
  const { cartItems, removeFromCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const goToCart = () => {
    router.push("/cart");
    setIsOpen(false);
    setMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-green-500 via-orange-500 to-red-500 text-white p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          <div>
            <h1 className="text-xl font-bold">Benedict’s Supermarket</h1>
            <p className="text-xs italic opacity-90">Where quality meets value</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="/" className="hover:underline">Home</a>
          <a href="/shop" className="hover:underline">Shop</a>
          <a href="/deals" className="hover:underline">Deals</a>
          <a href="/about" className="hover:underline">About Us</a>
          <a href="/contact" className="hover:underline">Contact Us</a>

          {/* Cart */}
          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center gap-1">
              🛒 Cart ({totalItems})
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white text-black rounded shadow-lg p-2 z-50 max-h-80 overflow-y-auto">
                {cartItems.length === 0 ? (
                  <p className="p-2">Your cart is empty</p>
                ) : (
                  <>
                    <ul className="space-y-2">
                      {cartItems.map((item) => (
                        <li key={item.id} className="flex justify-between items-center">
                          <div>
                            <p>{item.name}</p>
                            <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500"
                          >
                            ❌
                          </button>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={goToCart}
                      className="w-full mt-2 bg-green-500 text-white py-2 rounded font-bold"
                    >
                      Go to Cart
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col gap-2 mt-2 bg-green-600 p-2 rounded transition-all duration-300 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <a href="/" className="hover:underline">Home</a>
        <a href="/shop" className="hover:underline">Shop</a>
        <a href="/deals" className="hover:underline">Deals</a>
        <a href="/about" className="hover:underline">About Us</a>
        <a href="/contact" className="hover:underline">Contact Us</a>
        <button
          onClick={toggleDropdown}
          className="flex items-center gap-1 text-white mt-2"
        >
          🛒 Cart ({totalItems})
        </button>
      </div>
    </header>
  );
}
