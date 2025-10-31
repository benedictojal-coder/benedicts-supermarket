// src/components/LoyaltySignup.jsx
"use client";
import { useState } from "react";

export default function LoyaltySignup() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Loyalty Member:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Join Our Loyalty Program</h2>
      {submitted && <p className="text-green-600 mb-4">Thank you for signing up!</p>}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md mx-auto bg-white p-4 rounded shadow"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded font-bold hover:bg-green-600"
        >
          Sign Up
        </button>
      </form>
    </section>
  );
}
