"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import pujas from "@/data/pujas.json";
import { Puja } from "@/types/puja";
import { Button } from "@/components/ui";

interface BookingForm {
  name: string;
  email: string;
  phone: string;
  address: string;
  puja: string;
  date: string;
}

export default function BookPujaPage() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<BookingForm>({
    name: "",
    email: "",
    phone: "",
    address: "",
    puja: "",
    date: "",
  });

  const [success, setSuccess] = useState(false);
  const [selectedPuja, setSelectedPuja] = useState<Puja | null>(null);

  // Pre-select puja from query
  useEffect(() => {
    const pujaId = searchParams.get("puja");
    if (pujaId) {
      const pujaObj = (pujas as Puja[]).find((p) => p.id === pujaId);
      if (pujaObj) {
        setForm((prev) => ({ ...prev, puja: pujaObj.title }));
        setSelectedPuja(pujaObj);
      }
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    if (e.target.name === "puja") {
      const pujaObj = (pujas as Puja[]).find((p) => p.title === e.target.value);
      setSelectedPuja(pujaObj || null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking Form Data:", form);

    // TODO: send to API
    // await fetch("/api/book-puja", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(form),
    // });

    setSuccess(true);
    setForm({ name: "", email: "", phone: "", address: "", puja: "", date: "" });
    setSelectedPuja(null);
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-6">Book a Puja</h1>
      <p className="text-center text-gray-700 mb-12">
        Fill the form below to book your desired Puja with our verified Pandits.
      </p>

      {success && (
        <div className="mb-6 text-green-700 font-medium bg-green-100 p-3 rounded text-center">
          Your Puja booking request has been submitted successfully!
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Column - Puja Image */}
        <div className="lg:w-1/2 relative rounded-xl overflow-hidden shadow-lg">
          {selectedPuja ? (
            <Image
              src={selectedPuja.image}
              alt={selectedPuja.title}
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-100 text-gray-400 font-medium text-center p-6">
              Select a Puja to see its image
            </div>
          )}
        </div>

        {/* Right Column - Form + QR */}
        <div className="lg:w-1/2 space-y-6">
          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Address</label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                required
                rows={3}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Select Puja */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Select Puja</label>
              <select
                name="puja"
                value={form.puja}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="">-- Select a Puja --</option>
                {(pujas as Puja[]).map((puja) => (
                  <option key={puja.id} value={puja.title}>
                    {puja.title} - ₹{puja.price.toLocaleString()}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Preferred Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Submit */}
            <div className="text-center">
              <Button
                type="submit"
                label="Book Puja"
                variant="primary"
                className="px-8 py-3 rounded-full"
              />
            </div>
          </form>

          {/* QR Code Section */}
          <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-inner flex flex-col items-center">
            <h3 className="font-semibold mb-2">Scan to Pay</h3>
            {/* Replace with your QR code image */}
            <img
              src="/assets/qr.jpeg"
              alt="QR Code"
              className="w-40 h-40 mb-3"
            />
            <p className="text-sm text-gray-700 text-center">
              Account Holder: <strong>Shri Pandit Ji</strong>
              <br />
              UPI ID / Bank Details here
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
