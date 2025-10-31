"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function Header() {
  const { cartItems, removeFromCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false); // mobile nav toggle
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const router = useRouter();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const goToCart = () => {
    router.push("/cart");
    setIsCartOpen(false);
    setNavOpen(false);
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        borderBottom: "2px solid #f2f2f2",
        background: "linear-gradient(90deg, green, orange, red)",
        color: "white",
        position: "relative",
      }}
    >
      {/* Logo + Store Name */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
        <img
          src="/logo.png"
          alt="Benedict’s Supermarket Logo"
          style={{ width: "50px", height: "50px", objectFit: "contain" }}
        />
        <div>
          <h1
            style={{
              fontSize: "1.8rem",
              margin: 0,
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            Benedict’s Supermarket
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: "0.9rem",
              fontStyle: "italic",
              opacity: 0.9,
            }}
          >
            Where quality meets value
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        {/* Hamburger menu for mobile */}
        <button
          onClick={() => setNavOpen(!navOpen)}
          style={{
            display: "none",
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
          className="hamburger-btn"
        >
          ☰
        </button>

        {/* Desktop nav links */}
        <div
          style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}
          className="nav-links"
        >
          <a href="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </a>

          {/* Shop Dropdown */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setShopDropdownOpen(true)}
            onMouseLeave={() => setShopDropdownOpen(false)}
          >
            <button
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer",
              }}
            >
              Shop ▼
            </button>
            {shopDropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "2rem",
                  left: 0,
                  background: "white",
                  color: "black",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  display: "flex",
                  flexDirection: "column",
                  padding: "0.5rem 0",
                  minWidth: "150px",
                  zIndex: 100,
                }}
              >
                <a
                  href="/category/food"
                  style={{ padding: "0.5rem 1rem", textDecoration: "none", color: "black" }}
                >
                  Food
                </a>
                <a
                  href="/category/drinks"
                  style={{ padding: "0.5rem 1rem", textDecoration: "none", color: "black" }}
                >
                  Drinks
                </a>
                <a
                  href="/category/household"
                  style={{ padding: "0.5rem 1rem", textDecoration: "none", color: "black" }}
                >
                  Household
                </a>
              </div>
            )}
          </div>

          <a href="/deals" style={{ color: "white", textDecoration: "none" }}>
            Deals
          </a>
          <a href="/about" style={{ color: "white", textDecoration: "none" }}>
            About Us
          </a>
          <a href="/contact" style={{ color: "white", textDecoration: "none" }}>
            Contact Us
          </a>

          {/* Cart */}
          <div style={{ position: "relative" }}>
            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              🛒 Cart ({totalItems})
            </button>

            <div
              style={{
                position: "absolute",
                right: 0,
                top: "2.5rem",
                width: "250px",
                background: "white",
                color: "black",
                border: "1px solid #ccc",
                borderRadius: "5px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                zIndex: 100,
                maxHeight: isCartOpen ? "350px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {cartItems.length === 0 ? (
                <p style={{ padding: "1rem" }}>Your cart is empty</p>
              ) : (
                <>
                  <ul
                    style={{
                      listStyle: "none",
                      margin: 0,
                      padding: 0,
                      flex: 1,
                    }}
                  >
                    {cartItems.map((item) => (
                      <li
                        key={item.id}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "0.5rem 1rem",
                          borderBottom: "1px solid #eee",
                        }}
                      >
                        <div>
                          <p style={{ margin: 0 }}>{item.name}</p>
                          <p style={{ margin: 0, fontSize: "0.8rem", color: "#555" }}>
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          style={{
                            background: "transparent",
                            border: "none",
                            color: "red",
                            cursor: "pointer",
                          }}
                        >
                          ❌
                        </button>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={goToCart}
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "center",
                      padding: "0.75rem",
                      background: "green",
                      color: "white",
                      border: "none",
                      fontWeight: "bold",
                      borderBottomLeftRadius: "5px",
                      borderBottomRightRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Go to Cart
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {navOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            background: "linear-gradient(90deg, green, orange, red)",
            width: "100%",
            flexDirection: "column",
            display: "flex",
            padding: "1rem",
            gap: "1rem",
            zIndex: 50,
          }}
        >
          <a href="/" style={{ color: "white", textDecoration: "none" }} onClick={() => setNavOpen(false)}>
            Home
          </a>
          <a href="/category/food" style={{ color: "white", textDecoration: "none" }} onClick={() => setNavOpen(false)}>
            Food
          </a>
          <a href="/category/drinks" style={{ color: "white", textDecoration: "none" }} onClick={() => setNavOpen(false)}>
            Drinks
          </a>
          <a href="/category/household" style={{ color: "white", textDecoration: "none" }} onClick={() => setNavOpen(false)}>
            Household
          </a>
          <a href="/deals" style={{ color: "white", textDecoration: "none" }} onClick={() => setNavOpen(false)}>
            Deals
          </a>
          <a href="/about" style={{ color: "white", textDecoration: "none" }} onClick={() => setNavOpen(false)}>
            About Us
          </a>
          <a href="/contact" style={{ color: "white", textDecoration: "none" }} onClick={() => setNavOpen(false)}>
            Contact Us
          </a>
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            style={{ background: "transparent", border: "none", color: "white", fontSize: "1rem", cursor: "pointer" }}
          >
            🛒 Cart ({totalItems})
          </button>
        </div>
      )}

      {/* Mobile CSS */}
      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .hamburger-btn {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
