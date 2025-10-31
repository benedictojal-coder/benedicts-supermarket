"use client";
import { useCart } from "../context/CartContext";
import products from "../data/products";

export default function ProductsList() {
  const { addToCart } = useCart();

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", padding: "2rem" }}>
      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "8px" }}>
          <img src={product.image} alt={product.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
          <h3>{product.name}</h3>
          <p style={{ color: "red" }}>Ksh {product.price}</p>
          <p>{product.description}</p>
          <button
            onClick={() => addToCart(product)}
            style={{ backgroundColor: "green", color: "white", padding: "0.5rem 1rem", borderRadius: "5px" }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
