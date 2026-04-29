"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  ChevronRight,
  Mail,
} from "lucide-react";

const Footer = () => {
  const [imgErrors, setImgErrors] = useState({});

  const exploreLinks = [
    { label: "Home", href: "https://matrixtissues.com/" },
    { label: "About Us", href: "https://matrixtissues.com/about-us/" },
    { label: "Our Products", href: "https://matrixtissues.com/our-products/" },
    { label: "Blog", href: "https://matrixtissues.com/blog/" },
    { label: "Career", href: "https://matrixtissues.com/career/" },
    { label: "Contact Us", href: "https://matrixtissues.com/contact-us/" },
    { label: "Privacy Policy", href: "https://matrixtissues.com/privacy-policy/" },
    { label: "Terms & Conditions", href: "https://matrixtissues.com/terms-and-conditions/" },
    { label: "Shipping Policy", href: "https://matrixtissues.com/shipping-policy/" },
    { label: "Return & Refund Policy", href: "https://matrixtissues.com/return-refund-policy/" },
  ];

  const productLinks = [
    { label: "Face Tissue", href: "https://matrixtissues.com/product-category/face-tissue/" },
    { label: "Paper Napkin", href: "https://matrixtissues.com/product-category/paper-napkin/" },
    { label: "Kitchen Towel", href: "https://matrixtissues.com/product-category/kitchen-towel/" },
   
    { label: "Butter Paper", href: "https://matrixtissues.com/product-category/butter-paper/" },
    { label: "Cling Film", href: "https://matrixtissues.com/product-category/cling-film/" },
    { label: "Aluminium Foil", href: "https://matrixtissues.com/product-category/aluminium-foil/" },
  ];

  const recentPhotos = [
    { src: "/recent/recent1.webp", href: "https://matrixtissues.com/our-products/" },
    { src: "/recent/recent2.webp", href: "https://matrixtissues.com/our-products/" },
    { src: "/recent/recent3.webp", href: "https://matrixtissues.com/our-products/" },
    { src: "/recent/recent4.webp", href: "https://matrixtissues.com/our-products/" },
    { src: "/recent/recent5.webp", href: "https://matrixtissues.com/our-products/" },
    { src: "/recent/recent6.webp", href: "https://matrixtissues.com/our-products/" },
  ];

  return (
    <footer className="bg-[#637D77] relative text-white overflow-hidden">
      
      {/* Top Row */}
      <div className="flex flex-wrap items-center justify-evenly gap-4 px-4 border-b border-gray-600">
        
        {/* Logo */}
        <div className="w-40 h-20 flex items-center">
          <img src="/nav/nav-logo.png" alt="logo" />
        </div>

        {/* Address */}
        <div className="flex items-center gap-3 text-white text-sm md:text-base">
          <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
            <MapPin size={20} />
          </div>
          <span>I-237, Sec-3, Bawana Industrial Area, Delhi – 110039</span>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3 text-white">
          <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
            <Phone size={20} />
          </div>
          <a href="tel:8810540823" className="text-lg">
            +91-8810540823
          </a>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-wrap gap-8 px-6 py-4 border-b border-[#2a2a2a]">

        {/* Explore */}
        <div className="flex-1 min-w-[150px]">
          <h4 className="text-lg font-semibold text-white mb-4 border-b pb-2">
            Explore
          </h4>
          <ul className="space-y-2">
            {exploreLinks.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="flex items-center gap-2 hover:text-white">
                  <ChevronRight size={14} className="text-[#1d9e75]" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div className="flex-1 min-w-[150px]">
          <h4 className="text-lg font-semibold text-white mb-4 border-b pb-2">
            Products
          </h4>
          <ul className="space-y-2">
            {productLinks.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="flex items-center gap-2 hover:text-white">
                  <ChevronRight size={14} className="text-[#1d9e75]" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Photos */}
        <div className="flex-1 min-w-[150px]">
          <h4 className="text-lg font-semibold text-white mb-4 border-b pb-2">
            Recent Photos
          </h4>
          <div className="grid grid-cols-3 gap-2">
            {recentPhotos.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="aspect-square overflow-hidden rounded"
              >
                <img
                  src={item.src}
                  alt="recent"
                  className="w-full h-full object-cover hover:scale-105 transition"
                  onError={() =>
                    setImgErrors((prev) => ({ ...prev, [i]: true }))
                  }
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Subscribe */}
        <div className="flex-1 min-w-[200px] max-w-[260px]">
          <h4 className="text-lg font-semibold text-white mb-4 border-b pb-2">
            Subscribe
          </h4>
          <p className="text-sm mb-4">
            Stay updated with our latest products and offers.
          </p>

          <div className="flex items-center gap-2 bg-[#1d1d1d] border rounded px-3 py-2 mb-3">
            <Mail size={16} />
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          <button className="w-full py-2 bg-red-500 hover:bg-white hover:text-red-500 text-white rounded transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-4 px-4 text-center text-sm text-white">
        <div className="flex flex-col md:flex-row justify-between gap-2">
          <span>
            Copyrights © 2026 Matrix tissues All Rights Reserved.
          </span>

          <span>
            Website Designed By Promozione Branding Pvt. Ltd.
            <a
              href="https://promozionebranding.com/"
              target="_blank"
              className="font-bold underline ml-1"
            >
              Website Designing Company
            </a>
          </span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;