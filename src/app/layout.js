// src/app/layout.jsx
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

export const metadata = {
  title: "Benedict’s Supermarket",
  description: "Shop quality products at the best prices",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        <CartProvider>
          <Header />
          <main style={{ minHeight: "80vh" }}>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

