"use client";
import products from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductList() {
  const { addToCart } = useCart();

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded shadow p-4 flex flex-col items-center transition-transform hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 sm:h-48 object-contain mb-2"
            />
            <h3 className="font-semibold text-lg text-center">{product.name}</h3>
            <p className="text-gray-600 text-center text-sm sm:text-base">
              {product.description}
            </p>
            <p className="font-bold mt-2 text-green-700">Ksh {product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600 w-full"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
