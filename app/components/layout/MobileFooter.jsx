"use client";

import Link from "next/link";

const MobileStickyFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-15 z-50 bg-white border-t shadow-lg flex lg:hidden">
      
      <Link href="https://matrixtissues.com/" className="flex flex-col items-center flex-1 py-2">
        <i className="fa-solid fa-house text-2xl"></i>
        <span className="text-md">Home</span>
      </Link>

      <Link href="https://matrixtissues.com/about-us/" className="flex flex-col items-center flex-1 py-2">
        <i className="fa-solid fa-user text-2xl"></i>
        <span className="text-md">About</span>
      </Link>

      <Link href="https://matrixtissues.com/our-products/" className="flex flex-col items-center flex-1 py-2">
        <i className="fa-solid fa-boxes-stacked text-2xl"></i>
        <span className="text-md">Products</span>
      </Link>

      <Link href="https://matrixtissues.com/contact-us/" className="flex flex-col items-center flex-1 py-2">
        <i className="fa-solid fa-envelopes-bulk text-2xl"></i>
        <span className="text-md">Contact Us</span>
      </Link>

      <a
        href="tel:8810540823"
        className="flex flex-col items-center flex-1 py-2 "
      >
        <i className="fa-solid fa-phone text-2xl"></i>
        <span className="text-md">Call</span>
      </a>

    </div>
  );
};

export default MobileStickyFooter;