"use client";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cartItems, addToCart, removeFromCart, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0)
    return <p style={{ padding: "2rem" }}>Your cart is empty.</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Your Cart</h2>

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            borderBottom: "1px solid #ddd",
            padding: "1rem 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h4 style={{ margin: "0 0 0.3rem 0" }}>{item.name}</h4>
            <p style={{ margin: 0 }}>Ksh {item.price * item.quantity}</p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <button
              onClick={() => removeFromCart(item.id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "0.4rem 0.7rem",
                cursor: "pointer",
                borderRadius: "3px",
              }}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => addToCart(item)}
              style={{
                background: "green",
                color: "white",
                border: "none",
                padding: "0.4rem 0.7rem",
                cursor: "pointer",
                borderRadius: "3px",
              }}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <div
        style={{
          marginTop: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <strong style={{ fontSize: "1.2rem" }}>Total: Ksh {totalPrice}</strong>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            onClick={clearCart}
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Clear Cart
          </button>
          <button
            style={{
              background: "green",
              color: "white",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
