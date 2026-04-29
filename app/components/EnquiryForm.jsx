"use client";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";

const EnquiryForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        platform: "Matrix Tissue",
        platformEmail: "matrixtissues@gmail.com",
        name,
        phone,
        email,
        place: "N/A",
        product,
        message,
      };

      const { data } = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData,
      );

      if (data?.success) {
        const whatsappText = `Hi, I am ${name}.
          Email: ${email}
          Requirements: ${product}

          Message: ${message}

          Phone: ${phone}`;

        const waUrl = `https://wa.me/+918810540823?text=${encodeURIComponent(
          whatsappText,
        )}`;

        setTimeout(() => {
          window.open(waUrl, "_blank");
        }, 1000);

        setName("");
        setPhone("");
        setEmail("");
        setProduct("");
        setMessage("");
      }

      console.log("all good");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className="px-5 py-12 md:py-20 lg:px-10 bg-white flex flex-col items-center lg:py-5">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-7xl bg-gray-50 rounded-[2.5rem] border border-gray-200 shadow-sm transition-all hover:shadow-md overflow-hidden flex flex-col lg:flex-row"
        >
          {/* Left Side: Image */}
          <div className="relative w-full lg:w-5/12 min-h-[300px] lg:min-h-[70vh]">
            <Image
              src="/products/FT7-1-1.webp"
              alt="Matrix Facial Tissue"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden flex items-end p-5">
              <h2 className="text-3xl font-bebas text-white tracking-wide">
                Get a Free Quote
              </h2>
            </div>
          </div>

          {/* Right Side: Form Content */}
          <div className="w-full lg:w-7/12 p-4 md:p-8">
            <div className="text-left mb-3 md:mb-6">
              <h2 className="text-3xl md:text-5xl font-bebas text-gray-900 mb-2 tracking-wide">
                Get the Best Facial Tissue in Delhi Today
              </h2>
              <p className="text-xl md:text-2xl font-bold text-red-700 mb-2">
                Looking for a trusted facial tissue in Delhi?
              </p>
              <p className="text-gray-600 text-lg leading-6">
                Matrix Tissue offers premium quality, soft, and hygienic facial
                tissue products at competitive prices. Fill out the form below
                and get a quick quote.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-left">
              <div className="flex flex-col gap-0.5">
                <label className="font-bold text-gray-700 ml-1 text-lg">
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-white"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="font-bold text-gray-700 ml-1 text-lg">
                  Phone Number
                </label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  onInput={(e) => {
                    e.target.value = e.target.value
                      .replace(/[^0-9]/g, "") // remove alphabets & symbols
                      .slice(0, 10); // limit to 10 digits
                  }}
                  required
                  placeholder="Enter your contact number"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-white"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="font-bold text-gray-700 ml-1 text-lg">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-white"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="font-bold text-gray-700 ml-1 text-lg">
                  Requirement
                </label>
                <input
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  type="text"
                  placeholder="Box / Pocket / Bulk"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all bg-white"
                />
              </div>
              <div className="flex flex-col gap-0.5 md:col-span-2">
                <label className="font-bold text-gray-700 ml-1 text-lg">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="3"
                  placeholder="Share your specific needs"
                  className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none bg-white"
                ></textarea>
              </div>

              <div className="md:col-span-2 flex flex-col items-center gap-3 mt-2">
                <button className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-3 rounded-xl text-xl transition-all shadow-lg active:scale-[0.98]">
                  Get Free Quote
                </button>
                <a
                  href="https://wa.link/rt47ko"
                  target="_blank"
                  className="text-green-600 font-bold text-base hover:text-green-700 transition-colors"
                >
                  “Get Instant Quote on WhatsApp”
                </a>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default EnquiryForm;
