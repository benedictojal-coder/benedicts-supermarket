// src/components/PriceList.jsx
"use client";

const products = [
  { id: 1, name: "Milk", price: 50, discount: 10 },
  { id: 2, name: "Bread", price: 30, discount: 5 },
  { id: 3, name: "Eggs", price: 200, discount: 15 },
  { id: 4, name: "Butter", price: 120, discount: 20 },
  { id: 5, name: "Cheese", price: 250, discount: 10 },
  { id: 6, name: "Soda", price: 100, discount: 10 },
  { id: 7, name: "Chips", price: 80, discount: 5 },
  { id: 8, name: "Juice", price: 150, discount: 15 },
  { id: 9, name: "Rice", price: 400, discount: 20 },
  { id: 10, name: "Pasta", price: 180, discount: 10 },
  { id: 11, name: "Tomatoes", price: 60, discount: 5 },
  { id: 12, name: "Onions", price: 50, discount: 10 },
  { id: 13, name: "Potatoes", price: 40, discount: 5 },
  { id: 14, name: "Carrots", price: 70, discount: 10 },
  { id: 15, name: "Chicken", price: 500, discount: 15 },
  { id: 16, name: "Beef", price: 700, discount: 20 },
  { id: 17, name: "Fish", price: 600, discount: 10 },
  { id: 18, name: "Yogurt", price: 120, discount: 5 },
  { id: 19, name: "Cereal", price: 200, discount: 10 },
  { id: 20, name: "Coffee", price: 300, discount: 15 },
];

export default function PriceList() {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Price List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-[600px] w-full border-collapse bg-white rounded shadow">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">Item</th>
              <th className="px-4 py-2 text-right">Original Price</th>
              <th className="px-4 py-2 text-right">Discount (%)</th>
              <th className="px-4 py-2 text-right">Price After Discount</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => {
              const discountedPrice = item.price - (item.price * item.discount) / 100;
              return (
                <tr key={item.id} className="border-b">
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2 text-right">KES {item.price}</td>
                  <td className="px-4 py-2 text-right">{item.discount}%</td>
                  <td className="px-4 py-2 text-right">KES {discountedPrice}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
