"use client";

import { useState } from "react";
import {
  whyBuyersChoose,
  productsPaperNapkin,
  allProductPaperNapkin,
  whyChooseUsPaperNapkin,
  testimonialPaperNapkin,
  faqsPaperNapkin,
} from "@/data";
import {
  BookCheck,
  ChevronDown,
  IndianRupee,
  Package,
  Quote,
} from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Form from "../components/Form";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import EnquiryForm from "../components/EnquiryForm";
import { usePathname } from "next/navigation";


const PaperNapkin = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [open, setOpen] = useState(false);
    const path = usePathname();
    const totalwords = path.split("/")[1].split("-");
  

  return (
    <> 
      {open && <Form setOpen={setOpen}/>} 
      <div>
      {/* hero done  */}
      <section className="bg-[#F2A99B] flex flex-col gap-1 items-center px-2 py-5 lg:py-6">
        <p className="font-bebas text-2xl text-white md:text-4xl">
          Searching for the Best
        </p>
        <p className="font-teko text-5xl text-white md:text-6xl">
          Paper Napkin in Delhi?
        </p>
        <p className="font-open text-center text-white md:text-xl ">
          Get high-quality, hygienic, and affordable paper napkins for hotels,
          restaurants, and bulk use.
        </p>

        <div className="grid grid-cols-3 mt-3 gap-3 text-white md:gap-8 md:mt-5">
          <div className="flex flex-col items-center gap-0.5 ">
            <BookCheck className="md:h-9 md:w-9" />
            <p className="md:text-xl">SEND REQUIREMENT</p>
          </div>
          <div className="flex flex-col items-center gap-0.5  text-center">
            <IndianRupee className="md:h-9 md:w-9" />
            <p className="md:text-xl">GET BEST PRICES</p>
          </div>
          <div className="flex flex-col items-center gap-0.5  ">
            <Package className="md:h-9 md:w-9" />
            <p className="md:text-xl">QUICK DELIVERY</p>
          </div>
        </div>

        <div className="flex gap-5 mt-3 md:gap-14 pb-2">
          <button onClick={()=>setOpen(true)}  className="bg-red-500 hover:bg-red-600 px-5 py-1 rounded text-white text-xl md:scale-115">
            Get Free Quote
          </button>
          <Link href={"https://matrixtissues.com/contact-us/"} className="bg-red-500 hover:bg-red-500 px-5 py-1 rounded text-white text-xl md:scale-115">
            Contact Us
          </Link>
        </div>
      </section>
      

      {/* product section done */}
      <section className="px-3 py-5 md:py-14 lg:px-20 flex flex-col items-center lg:py-6">
        <p className="text-4xl md:text-5xl font-bebas text-gray-900 mb-2 md:mb-4 text-center tracking-wide">
          Our Paper Napkin Collection
        </p>
        <div className="grid grid-cols-2 gap-2 mt-2 md:grid-cols-4 lg:gap-6">
          {productsPaperNapkin.map((item, idx) => (
            <div
              key={idx}
              className=" flex flex-col items-center overflow-hidden rounded-lg border shadow hover:shadow-xl duration-300"
            >
              <Image
                src={item?.image}
                width="1000"
                height="1000"
                alt={item?.title}
                className="h-auto w-full"
              />
              <h3 className="text-xl  mt-1 md:text-2xl text-center">
                {item?.title}
              </h3>
              <p className="px-2 md:text-xl font-open text-center h-full">{item?.desc}</p>

              <button onClick={()=>setOpen(!open)}  className="my-4 text-xl bg-red-700 text-white px-10 py-1 rounded-lg hover:bg-red-800">
                Get Quote
              </button>
            </div>
          ))}
        </div>

        <Link href="https://matrixtissues.com/product-category/paper-napkin/" className="mt-4 md:mt-7 bg-red-700 text-white px-8 py-2 rounded text-xl md:scale-110 lg:px-20 lg:text-2xl">
          SHOW MORE
        </Link>
      </section>

      {/* cta done  */}
      <section className="px-5  md:py-20 lg:px-24 bg-gray-50 flex flex-col items-center lg:py-6">
        {/* Bulk Supply CTA */}
        <div className="mt-8 w-full max-w-5xl bg-gradient-to-r from-red-700 to-red-900 rounded-3xl p-8 md:p-8 text-center text-white shadow-xl">
          <h3 className="text-4xl md:text-5xl font-bebas md:mb-2 tracking-wide">
            Get Best Price for Paper Napkins
          </h3>
          <p className="text-lg md:text-xl mb-4 md:mb-8 text-red-50 max-w-3xl mx-auto">
            Looking for high-quality paper napkins in bulk?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={()=>setOpen(!open)}  className="w-full sm:w-auto bg-white text-red-700 font-bold py-3 px-10 rounded-xl text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Get Free Quote
            </button>
            <a
              href="https://wa.link/rt47ko"
              target="_blank"
              className="w-full sm:w-auto flex justify-center items-center gap-1 md:gap-2 bg-transparent border-2 border-white text-white font-bold py-1 md:py-3 px-10 rounded-xl text-lg hover:bg-white/10 transition-colors"
            >
              <FaWhatsapp className="text-[50px] md:text-[40px]"/> WhatsApp Quote Available
            </a>
          </div>
        </div>
      </section>

      {/* third section done */}
      <section className="px-5 py-8 md:py-20 lg:px-24 bg-gray-50 flex flex-col items-center lg:py-6">
        <h2 className="text-3xl md:text-5xl font-bebas text-gray-900 mb-3 md:mb-4 text-center tracking-wide">
          Paper Napkin in Delhi
        </h2>
        <div className="max-w-5xl text-center space-y-3 md:space-y-4">
          <p className="text-md md:text-2xl text-black leading-6 md:leading-7">
            Matrix Tissue started its journey in 2008 under the leadership of
            Mr. Praveen Bhagwat with a vision to deliver high-quality hygiene
            products. Today, we are a recognized{" "}
            
              paper napkin manufacturer in Delhi
            
            , offering a wide range of premium{" "}
            paper napkin products  known for
            their softness, strength, and superior absorbency. Our products are
            widely used across restaurants, hotels, offices, and catering
            businesses, making us a reliable choice for{" "}
           paper napkin supply in Delhi.
          </p>

          <p className="text-lg md:text-2xl text-black leading-6 md:leading-7">
            With years of experience and a strong focus on quality, Matrix
            Tissue has become a trusted{" "}
            paper napkin supplier in Delhi{" "}
            for both retail and bulk requirements. We specialize in delivering{" "}
             customized paper napkins,{" "}
            eco-friendly solutions, and consistent bulk supply to meet diverse
            business needs. Our commitment to hygiene, timely delivery, and
            competitive pricing makes us a preferred partner for businesses
            looking for the best
            paper napkin in Delhi.  
          </p>
        </div>
      </section>

      {/* fouth section done  */}
      <section className="px-3 py-5 md:py-14 lg:px-20 flex flex-col items-center lg:py-6">
        <p className="text-3xl md:text-5xl font-bebas text-gray-900 mb-2 text-center tracking-wide">
          Best-Selling Paper Napkins in Delhi
        </p>
        <p className="text-xl text-center md:text-start md:text-2xl font-semibold leading-6 md:leading-7 text-red-700  md:mb-4">
          Explore our most popular paper napkin products trusted by businesses
          across Delhi NCR for quality and reliability.
        </p>
        <div className="grid grid-cols-2 gap-2 mt-5 md:grid-cols-4 lg:gap-6">
          {allProductPaperNapkin.map((item, idx) => (
            <div
              key={idx}
              className=" flex flex-col items-center overflow-hidden rounded-lg border shadow hover:shadow-xl duration-300"
            >
              <Image
                src={item?.image}
                width="1000"
                height="1000"
                alt={item?.title}
                className="h-auto w-full"
              />
              <h3 className="text-xl my-2 md:text-2xl text-center grow">
                {item?.title}
              </h3>

              <button onClick={()=>setOpen(!open)}  className="my-4 text-xl bg-red-700 text-white px-10 py-2 rounded-lg hover:bg-red-800 ">
                Get Quote
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section done */}
      <section className="px-5 py-5 md:py-20 lg:px-24 bg-white flex flex-col items-center lg:py-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bebas text-gray-900 mb-1 tracking-wide">
            Why Choose Our Paper Napkins
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-red-700 mb-1 md:mb-4">
            Quality You Can Trust, Supply You Can Rely On
          </p>
          <p className="max-w-4xl text-gray-600 text-lg md:text-xl leading-6 md:leading-7">
            At Matrix Tissue, we go beyond just supplying{" "}
            <span className="font-bold">paper napkins.</span> We focus on
            delivering consistent quality, hygiene, and value, making us a
            trusted{" "}
            <span className="font-bold">paper napkin supplier in Delhi.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full max-w-7xl">
          {whyChooseUsPaperNapkin.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start md:items-center text-center p-4 md:p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-center items-center gap-2">
              <div className="mb-3 p-2 bg-white rounded-full shadow-sm">
                {feature.icon}
              </div>
              <h4 className="md:text-xl text-xl font-bold text-start text-gray-900 mb-3">
                {feature.title}
              </h4>
              </div>
              <p className="text-gray-600 leading-6 md:leading-7 md:text-xl">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>


        <section className="px-5 py-4 md:py-20 lg:px-24  flex flex-col items-center lg:py-6">
         
        <div className="mt-3 w-full max-w-5xl bg-gradient-to-r from-red-700 to-red-900 rounded-3xl p-6 md:p-6 text-center text-white shadow-xl">
          <h3 className="text-4xl md:text-5xl font-bebas mb-2 tracking-wide">
            Need Bulk Paper Napkin Supply?
          </h3>
          <p className="text-lg md:text-xl mb-4 md:mb-6 text-red-50 max-w-3xl mx-auto leading-6 md:leading-7">
            Partner with a reliable paper napkin manufacturer in Delhi NCR for
            consistent quality and timely delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={()=>setOpen(!open)}  className="w-full sm:w-auto bg-white text-red-700 font-bold py-3 px-10 rounded-xl text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Get Bulk Pricing
            </button>
            <a
              href="tel:8810540823"
              className="bg-red-400 hover:bg-red-500 px-5 py-1 rounded text-white text-xl md:scale-115"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

    

      {/* why Buyer choose matrix tissue done*/}
      <section className="px-5 py-6 md:py-20 lg:px-24 bg-gray-50 flex flex-col items-center lg:py-8">
        <h2 className="text-3xl md:text-5xl font-bebas text-gray-900 mb-5 md:mb-12 text-center tracking-wide">
          Why Buyers Choose Matrix Tissue
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 w-full max-w-7xl">
          {whyBuyersChoose.map((item, index) => (
            <div
              key={index}
              className="bg-white p-3 md:p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-start md:items-center text-center hover:shadow-md transition-shadow group"
            >
              <div className="flex justify-center items-center gap-1">
              <div className="mb-4 bg-red-50 p-2 rounded-full group-hover:bg-red-100 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-start text-xl md:text-lg mb-2">
                {item.title}
              </h3>
              </div>
              <p className="text-gray-600 text-sm leading-6 md:leading-7 md:text-xl">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Also avaiable on  done */}
     <section className="px-5 py-6 md:py-20 lg:px-24 bg-white flex flex-col items-center lg:py-8">
             <div className="text-center ">
               <h2 className="text-5xl md:text-5xl font-bebas text-gray-900  mb-3 tracking-wide">
                 Also Available On
               </h2>
               <p className="text-xl md:text-2xl leading-6 md:leading-7 font-semibold text-red-700 mb-5">
                 Matrix Tissue is proudly listed on leading B2B platforms, making it
                 easier for buyers to connect with a trusted facial tissue
                 manufacturer in Delhi.
               </p>
             </div>
     
             <div className="grid gap-11 grid-cols-2 md:grid-cols-7 md:items-center lg:gap-5">
               {[
                 "/ecom2/logo1.webp",
                 "/ecom2/logo2.webp",
                 "/ecom2/logo4.webp",
                 "/ecom2/logo5.webp",
                 "/ecom2/logo8.webp",
                 "/ecom2/logo.webp",
                 "/ecom2/cropped-matrix-logo-Photoroom-2.png",
               ].map((feature, index) => (
                 <Image
                   src={feature}
                   alt="image of ecom"
                   width={1000}
                   height={1000}
                   key={index}
                   className="h-28 w-28 "
                 />
               ))}
             </div>
           </section>

      {/* premium facial tissue collection done */}
      <section className="px-5 py-5 md:py-20 lg:px-24 bg-gray-50 flex flex-col items-center lg:py-6">
        <h2 className="text-3xl md:text-5xl font-bebas text-gray-900 mb-4 text-center tracking-wide">
          Premium Paper Napkin Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 w-full max-w-7xl">
          {[
            {
              title: "Paper Napkin in Delhi",
              desc: "Premium White Paper Napkin – Soft & Absorbent Collection",
            },
            {
              title: "Paper Napkin Supplier in Delhi",
              desc: "Classic Color Paper Napkin – Stylish & Vibrant Range",
            },
            {
              title: "Paper Napkin Manufacturer in Delhi",
              desc: "Cocktail Paper Napkin – Compact & Elegant Pack",
            },
            {
              title: "Paper Napkin Products",
              desc: "Dinner Paper Napkin – Strong & Durable Range",
            },
            {
              title: "Paper Napkin in Delhi NCR",
              desc: "Eco-Friendly Paper Napkin – Sustainable Collection",
            },
            {
              title: "Paper Napkin Manufacturer",
              desc: "Customized Paper Napkins – Printed & Branding Solutions ",
            },
            {
              title: "Paper Napkin Supplier in Delhi",
              desc: "Premium Paper Napkins for Hotels & Restaurants",
            },
            {
              title: "Bulk Paper Napkin in Delhi",
              desc: "High Absorbency Paper Napkins – Commercial Use Pack ",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-all group cursor-pointer"
            >
              <div>
                <h3 className="font-bold text-gray-900 text-xl mb-2 group-hover:text-red-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-md leading-5 md:leading-6 mb-4 md:text-lg">
                  {item.desc}
                </p>
              </div>
              <a href="https://matrixtissues.com/product-category/paper-napkin/" className="text-red-600 font-semibold text-md inline-flex items-center  gap-1">
                View Collection →
              </a>
            </div>
          ))}
        </div>

       
      </section>

      {/* cta section done */}
      <section className="relative w-full py-6 md:py-32 flex items-center justify-center overflow-hidden lg:py-5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/products/FT7-1-1.webp"
            alt="Premium Facial Tissue"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-red-900/80" />
        </div>

        <div className="relative z-10 text-center px-5 max-w-5xl text-white">
          <h2 className="text-4xl md:text-7xl font-bebas mb-3 tracking-wider drop-shadow-md">
            Need Bulk Paper Napkins at the Best Price?
          </h2>
          <p className="text-lg md:text-3xl mb-4 font-medium text-gray-100 max-w-3xl mx-auto leading-6 md:leading-7">
            Connect with Matrix Tissue today and get high-quality paper napkins
            with fast delivery and unbeatable pricing.
          </p>
          <button onClick={()=>setOpen(true)}  className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded-xl text-xl md:text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
            Request Quote Now
          </button>
        </div>
      </section>

      {/* testimonial section  */}
      <section className="px-5 py-5 md:py-20 lg:px-24 bg-white flex flex-col items-center lg:py-6">
        <h2 className="text-3xl md:text-5xl font-bebas text-gray-900 mb-7 text-center tracking-wide">
          Trusted by Businesses Across Delhi NCR
        </h2>
<div className="w-full max-w-7xl mx-auto px-4">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            centeredSlides={true}
            spaceBetween={20}
            autoplay={{ delay: 2000 }}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {testimonialPaperNapkin.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group h-50">
                  <Quote className="absolute top-4 right-4 text-red-200 w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity" />

                  <p className="text-gray-700 italic mb-6 leading-6 md:leading-7 text-sm md:text-base">
                    "{item.quote}"
                  </p>

                  <div className="border-t border-red-100 pt-3">
                    <p className="font-bold text-red-700 text-xs md:text-sm tracking-wide uppercase">
                      — {item.author}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Faq section  */}
      <section className="px-5 py-5 md:py-20 lg:px-24 bg-gray-50 flex flex-col items-center lg:py-6">
        <h2 className="text-3xl md:text-5xl font-bebas text-gray-900 mb-8 text-center tracking-wide">
          Frequently Asked Questions – Paper Napkin
        </h2>

       <div className="w-full max-w-4xl space-y-4">
  {faqsPaperNapkin.map((faq, index) => {
    const isOpen = activeIndex === index;

    return (
      <div
        key={faq.question}
        className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-all duration-300"
      >
        <button
          onClick={() => setActiveIndex(isOpen ? null : index)}
          aria-expanded={isOpen}
          aria-controls={`faq-${index}`}
          className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-red-50/30 transition-colors"
        >
          <span className="font-bold text-gray-900 text-lg md:text-xl pr-4">
            {faq.question}
          </span>

          <ChevronDown
            className={`w-6 h-6 text-red-600 shrink-0 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <div
          id={`faq-${index}`}
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="p-5 md:p-6 pt-0 text-gray-600 leading-6 text-base leading-6 md:leading-7 md:text-lg border-t border-gray-100">
            {faq.answer}
          </div>
        </div>
      </div>
    );
  })}
</div>
      </section>

      


     
    </div>
    <EnquiryForm totalwords={totalwords} />
    </>

  );
};

export default PaperNapkin;
