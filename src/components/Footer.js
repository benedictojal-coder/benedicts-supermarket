// src/components/Footer.jsx
"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Links */}
        <div>
          <h3 className="font-bold mb-3">Our Company</h3>
          <ul className="space-y-1">
            <li>About Us</li>
            <li>Careers</li>
            <li>Our Stories</li>
            <li>Contact Us</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="font-bold mb-3">Our Policies</h3>
          <ul className="space-y-1">
            <li>Privacy Hub</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Payment Terms</li>
            <li>Corporate & Bulk Purchases</li>
          </ul>
        </div>

        {/* Rewards & Contact */}
        <div>
          <h3 className="font-bold mb-3">Earn Rewards Everytime You Shop</h3>
          <p>📞 +254 795 673902</p>
          <p>📮 P.O. BOX 61600 - 00200, Nairobi, Kenya</p>
          <p>✉️ info@benedict.online</p>
          <p className="mt-2">Connect with us on social media:</p>
          <div className="flex gap-3 mt-1 text-2xl">
            <span className="cursor-pointer">📘</span>
            <span className="cursor-pointer">🐦</span>
            <span className="cursor-pointer">📸</span>
            <span className="cursor-pointer">▶️</span>
          </div>
        </div>

        {/* Payment Methods */}
        <div>
          <h3 className="font-bold mb-3">Payment Methods</h3>
          <div className="flex flex-col gap-1">
            <span>💳 Visa</span>
            <span>💳 Mastercard</span>
            <span>📱 M-Pesa</span>
            <span>💰 PayPal</span>
            <span>🏦 Bank Transfer</span>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Benedict’s Supermarket. All rights reserved.
      </div>
    </footer>
  );
}
