"use client";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#222",
        color: "#fff",
        padding: "3rem 2rem",
        marginTop: "2rem",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Company Links */}
        <div>
          <h3 style={{ fontWeight: "bold", marginBottom: "1rem" }}>Our Company</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>About Us</li>
            <li>Careers</li>
            <li>Our Stories</li>
            <li>Contact Us</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 style={{ fontWeight: "bold", marginBottom: "1rem" }}>Our Policies</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>Privacy Hub</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Payment Terms</li>
            <li>Corporate & Bulk Purchases</li>
          </ul>
        </div>

        {/* Rewards & Contact */}
        <div>
          <h3 style={{ fontWeight: "bold", marginBottom: "1rem" }}>Earn Rewards Everytime You Shop</h3>
          <p>📞 +254 795 673902</p>
          <p>📮 P.O. BOX 61600 - 00200, Nairobi, Kenya</p>
          <p>✉️ info@benedict.online</p>
          <p>Connect with us on our social media pages:</p>
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
            <span style={{ fontSize: "1.5rem", cursor: "pointer" }}>📘</span> {/* Facebook */}
            <span style={{ fontSize: "1.5rem", cursor: "pointer" }}>🐦</span> {/* Twitter */}
            <span style={{ fontSize: "1.5rem", cursor: "pointer" }}>📸</span> {/* Instagram */}
            <span style={{ fontSize: "1.5rem", cursor: "pointer" }}>▶️</span> {/* YouTube */}
          </div>
        </div>

        {/* Payment Methods */}
        <div>
          <h3 style={{ fontWeight: "bold", marginBottom: "1rem" }}>Payment Methods</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <span>💳 Visa</span>
            <span>💳 Mastercard</span>
            <span>📱 M-Pesa</span>
            <span>💰 PayPal</span>
            <span>🏦 Bank Transfer</span>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "2rem", fontSize: "0.9rem", opacity: 0.7 }}>
        &copy; {new Date().getFullYear()} Benedict’s Supermarket. All rights reserved.
      </div>
    </footer>
  );
}
