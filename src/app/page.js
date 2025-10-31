import ProductList from "../components/ProductList";
import PriceList from "../components/PriceList";
import LoyaltySignup from "../components/LoyaltySignup";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 max-w-7xl mx-auto p-6 space-y-10">
      {/* Product List */}
      <ProductList />

      {/* Price List Table */}
      <PriceList />

      {/* Loyalty Signup Form */}
      <LoyaltySignup />
    </main>
  );
}
