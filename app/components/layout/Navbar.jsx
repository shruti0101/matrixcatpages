"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { nav } from "@/data";
import { FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { useState } from "react";
import Form from "../Form";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <>
      {open && <Form setOpen={setOpen} />}

      <nav className="h-[14vh] bg-pink-100/50 flex items-center justify-between px-4 overflow-hidden border-b md:px-20 lg:px-5  ">
        <Image
          height={1000}
          width={1000}
          alt="logo"
          src={"/nav/nav-logo.png"}
          className="h-[7vh] w-auto"
          loading="eager"
        />

        {/* dexstop view only  */}
        <div className="lg:flex flex-wrap items-center text-2xl gap-6 bg-white p-5 rounded-xl justify-center hidden">
          {nav.map((item, idx) => (
            <Link href={item?.link} key={idx} className="flex gap-2">
              <span className="text-blue-500">•</span>{" "}
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </div>

        <Link
          href={"https://tissuekart.com/"}
          className="text-red-500 text-2xl bg-white px-4 py-2 xl:py-2 lg:px-2 lg:py-1 border border-red-500 uppercase animate-pulse rounded hidden lg:flex"
        >
          Shop Online
        </Link>
        {/* 
      <a href="https://wa.link/rt47ko" target="_blank">
        <Image
          height={1000}
          width={1000}
          alt="whatsapp"
          src={"/nav/whatspp.png"}
          className="h-[7vh] w-auto lg:hidden "
        />  
      </a> */}

        <button
          
          onClick={() => {
            setSheetOpen(false)
            setOpen(!open);
          }}
          className="text-xl  bg-red-700 hover:bg-red-800 sm:hidden md:flex lg:flex text-white px-3 py-1 rounded-lg font-teko md:text-2xl lg:rounded xl:text-2xl xl:py-2 xl:px-5 lg:font-bold   lg:px-2 lg:py-2"
        >
          Get a Quote
        </button>

        <div className="hidden lg:flex    gap-3 z-50">
          <a
            href="https://wa.link/rt47ko"
            target="_blank"
            className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-green-500 text-white shadow-md hover:scale-110 transition "
          >
            <FaWhatsapp className="w-9 h-9" />
          </a>
        </div>

        <div className="fixed right-4 bottom-16 md:bottom-2 flex flex-col gap-3 z-50">
          <a
            href="https://wa.link/rt47ko"
            target="_blank"
            className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500 text-white shadow-md hover:scale-110 transition animate-bounce"
          >
            <FaWhatsapp className="w-9 h-9" />
          </a>

          <a
            href="tel:8810540823"
            className="w-14 h-14 flex items-center justify-center rounded-full bg-red-500 text-white shadow-md hover:scale-110 transition animate-bounce"
          >
            <MdCall className="w-7 h-7" />
          </a>
        </div>

        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          {/* ✅ FIX 1: use asChild */}
          <SheetTrigger asChild>
            <Menu className="lg:hidden cursor-pointer" onClick={() => setSheetOpen(true)} />
          </SheetTrigger>

          <SheetContent side="left" className=" p-5">
            {/* ✅ FIX 2: REQUIRED for accessibility */}
            <SheetHeader className="p-0 mb-0">
              <SheetTitle className="sr-only">Menu</SheetTitle>
            </SheetHeader>

            {/* HEADER */}
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/nav/nav-logo.png"
                width={1000}
                height={1000}
                alt="logo"
                className="h-10 w-auto"
              />
            </div>

            {/* NAV LINKS */}
            <div className="flex flex-col gap-4 text-lg">
              {nav.map((item, idx) => (
                <SheetClose asChild key={idx}>
                  <Link
                    href={item.link}
                    className="border-b pb-2 hover:text-red-500"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </div>

            {/* CTA BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="mt-6 w-full bg-red-600 text-white py-2 rounded-lg"
            >
              Get a Quote
            </button>

            {/* CONTACT BUTTONS */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://wa.link/rt47ko"
                target="_blank"
                className="flex-1 bg-green-500 text-white py-2 rounded-lg text-center"
              >
                WhatsApp
              </a>

              <a
                href="tel:8810540823"
                className="flex-1 bg-red-500 text-white py-2 rounded-lg text-center"
              >
                Call
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
};

export default Navbar;
