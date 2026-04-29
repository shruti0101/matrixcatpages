"use client";

import { useState } from "react";
import {
  allProduct,
  products,
  whyChooseUs,
  whyBuyersChoose,
  faqs,
} from "@/data";
import {
  BookCheck,
  ChevronDown,
  IndianRupee,
  Package,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Grid2X2,
  ChevronRight,
  Mail,
  Quote,
} from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Form from "./components/Form";
import EnquiryForm from "./components/EnquiryForm";


// const exploreLinks = [
//   { label: "Home", href: "/" },
//   { label: "About Us", href: "/about-us/" },
//   { label: "Our Products", href: "/our-products/" },
//   { label: "Blog", href: "/blog/" },
//   { label: "Career", href: "/career/" },
//   { label: "Contact Us", href: "/contact-us/" },
//   { label: "Privacy Policy", href: "/privacy-policy/" },
//   { label: "Terms & Conditions", href: "/terms-and-conditions/" },
//   { label: "Shipping Policy", href: "/shipping-policy/" },
//   { label: "Return & Refund Policy", href: "/return-refund-policy/" },
// ];

const featuredproducts = [
  {
    name: "Premium Box Facial Tissue – Soft & Absorbent Collection",
    img: "/facial-imgP/img1.webp",
  },
  {
    name: "Pocket Facial Tissue – Travel-Friendly Hygiene Pack",
    img: "/facial-imgP/img2.webp",
  },
  {
    name: "Ultra Soft Facial Tissue – Gentle Care Collection",
    img: "/facial-imgP/img3.webp",
  },
  {
    name: "Multi-Ply Facial Tissue – Strong & Durable Range",
   img: "/facial-imgP/img4.webp",
  },
  {
    name: "Eco-Friendly Facial Tissue – Sustainable Collection",
    img: "/facial-imgP/img5.webp",
  },
  {
    name: "Customized Facial Tissue Packs – Private Label Solutions",
    img: "/facial-imgP/img6.webp",
  },
  {
    name: "Premium Facial Tissue for Hotels & Offices",
    img: "/facial-imgP/img7.webp",
  },
  {
    name: "High Absorbency Facial Tissue – Commercial Use Pack ",
    img: "/facial-imgP/img8.webp",
  },
];
 
// const productLinks = [
//   { label: "Face Tissue", href: "/product-category/face-tissue/" },
//   { label: "Paper Napkin", href: "/product-category/paper-napkin/" },
//   { label: "Kitchen Towel", href: "/product-category/kitchen-towel/" },
//   { label: "Toilet Roll", href: "/product-category/toilet-roll/" },
//   { label: "Butter Paper", href: "/product-category/butter-paper/" },
//   { label: "Cling Film", href: "/product-category/cling-film/" },
//   { label: "Aluminium Foil", href: "/product-category/aluminium-foil/" },
// ];
 
// const recentPhotos = [
//   {src:"/recent/recent1.webp"},
//   {src:"/recent/recent2.webp"},
//   {src:"/recent/recent3.webp"},
//   {src:"/recent/recent4.webp"},
//   {src:"/recent/recent5.webp"},
//   {src:"/recent/recent6.webp"},
// ];
 
// const socials = [
// ];
 
// const cities = [
//   "Delhi", "Delhi NCR", "Gurgaon", "Faridabad", "Ghaziabad", "Noida",
//   "Lucknow", "Varanasi", "Hyderabad", "Bengaluru", "Chennai", "Kolkata",
//   "Surat", "Rajkot", "Jodhpur", "Jaipur", "Haridwar", "Panipat",
//   "Sonipat", "Karnal", "Mohali", "Patiala", "Bahadurgarh", "Allahabad",
// ];
 
// const bottomLinks = [
//   { label: "Privacy Policy", href: "/privacy-policy/" },
//   { label: "Terms & Conditions", href: "/terms-and-conditions/" },
//   { label: "Shipping Policy", href: "/shipping-policy/" },
//   { label: "Return & Refund", href: "/return-refund-policy/" },
// ];
 

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);
   const [open,setOpen]=useState(false)

  return (
    <>      {open && <Form setOpen={setOpen}/>}
    <div>
      {/* hero  */}
      <section className="bg-[#F2A99B] flex flex-col gap-1 items-center px-2 py-4 lg:py-6">
        <p className="font-bebas text-2xl text-white md:text-4xl">
          Need Reliable Supply of
        </p>
        <p className="font-teko text-4xl text-white md:text-6xl">
          FACIAL TISSUE PRODUCTS?
        </p>
        <p className="font-open text-center text-white md:text-xl ">
          Connect directly with Matrix Tissue – your trusted face tissue
          manufacturer in Delhi for bulk and wholesale requirements.
        </p>

        <div className="grid grid-cols-3 mt-2 gap-3 text-white md:gap-8 md:mt-5">
          <div className="flex flex-col items-center gap-0.5 ">
            <BookCheck className="md:h-9 md:w-9" />
            <p className="md:text-xl">SUBMIT ENQUIRY</p>
          </div>
          <div className="flex flex-col items-center gap-0.5 text-center">
            <IndianRupee className="md:h-9 md:w-9" />
            <p className="md:text-xl">RECEIVE BEST PRICES</p>
          </div>
          <div className="flex flex-col items-center gap-0.5 ">
            <Package className="md:h-9 md:w-9" />
            <p className="md:text-xl">GET QUICK DELIVERY</p>
          </div>
        </div>

        <div className="flex gap-5 mt-3 md:gap-14 pb-2">
          <button onClick={()=>{setOpen(!open)}} className="bg-red-500 hover:bg-red-600 px-5 py-1 rounded text-white text-xl md:scale-115">
            Request Quote
          </button>
          <a
            href="tel:8810540823"
            className="bg-red-500 hover:bg-red-500 px-5 py-1 rounded text-white text-xl md:scale-115"
          >
            Call Now
          </a>
        </div>
      </section>
      

      {/* product section  */}
      <section className="px-3 py-5 md:py-14 lg:px-20 flex flex-col items-center lg:py-6">
        <p className="text-3xl md:text-5xl font-bebas text-gray-900 md:mb-2 text-center tracking-wide">
          Send Your Enquiry Directly to Matrix Tissue
        </p>
        <div className="grid grid-cols-2 gap-1 mt-2 md:mt-5 md:grid-cols-4 lg:gap-6">
          {products.map((item, idx) => (
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
              <h3 className="text-xl my-1 md:text-2xl text-center">
                {item?.title}
              </h3>
              <p className="px-2 md:text-xl font-open text-center h-full">{item?.desc}</p>

              <button onClick={()=>setOpen(!open)} className="my-4 text-xl bg-red-700 text-white px-10 py-2 rounded-lg hover:bg-red-800">
                Get Quote
              </button>
            </div>
          ))}
        </div>

        <a href="https://matrixtissues.com/product-category/face-tissue/" className="mt-3 md:mt-7 bg-red-700 text-white px-8 py-2 rounded text-xl md:scale-110 lg:px-20 lg:text-2xl">
          SHOW MORE
        </a>
      </section>

      {/* cta  */}
      <section className="px-5  md:py-20 lg:px-24 bg-gray-50 flex flex-col items-center lg:py-2">
        {/* Bulk Supply CTA */}
        <div className="mt-8 w-full max-w-5xl bg-gradient-to-r from-red-700 to-red-900 rounded-3xl p-6 md:p-8 text-center text-white shadow-xl">
          <h3 className="text-3xl md:text-5xl font-bebas md:mb-3 tracking-wide">
            Need Bulk Facial Tissue Supply?
          </h3>
          <p className="text-lg md:text-xl mb-3 md:mb-7 leading-5  text-red-50 max-w-3xl mx-auto">
            Partner with a reliable facial tissue manufacturer in Delhi NCR for
            consistent quality and timely delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={()=>setOpen(true)} className="w-full sm:w-auto bg-white text-red-700 font-bold py-3 px-7 rounded-xl text-lg hover:bg-gray-100 transition-colors shadow-lg">
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

      {/* third section  */}
      <section className="px-5 py-8 md:py-20 lg:px-24 bg-gray-50 flex flex-col items-center lg:py-6">
        <h2 className="text-3xl md:text-5xl font-bebas text-gray-900 mb-1 md:mb-6 text-center tracking-wide">
          Leading Facial Tissue in Delhi
        </h2>
        <div className="max-w-5xl text-center space-y-4">
          <p className="text-lg md:text-xl  text-gray-700 leading-5 md:leading-7">
            Matrix Tissue began its journey in 2008 under the visionary leadership of {"  "}
             Mr. Praveen Bhagwat , with a
            mission to redefine quality in the tissue industry. Today, we are
            recognized as a trusted{" "}
          
              facial tissue manufacturer in Delhi
            
            , offering premium-quality facial tissue products designed for
            superior softness, strength, and hygiene.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-5 md:leading-7">
            Our range of  facial tissue in Delhi caters to households, offices,
            hotels, and healthcare sectors, ensuring comfort and reliability in
            every use. With years of expertise, Matrix Tissue has established
            itself as a dependable{" "}
            
              facial tissue supplier in Delhi NCR
            
            , delivering high-quality solutions for both retail and bulk
            requirements.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-5 md:leading-7">
            Our commitment to innovation and consistent quality allows us to
            provide soft facial tissue, premium facial tissue, and customized
            solutions that meet modern hygiene standards. We continue to focus
            on delivering the  best facial tissue products in Delhi , making us a
            preferred choice for customers seeking quality and value.
          </p>
        </div>
      </section>

      {/* fouth section  */}
      <section className="px-3 py-6 md:py-14 lg:px-20 flex flex-col items-center lg:py-6">
        <p className="text-3xl md:text-5xl font-bebas text-gray-900 md:mb-3 text-center tracking-wide">
          Complete Range of Facial Tissue Products
        </p>
        <div className="grid grid-cols-2 gap-2 mt-5 md:grid-cols-4 lg:gap-4">
          {allProduct.map((item, idx) => (
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
              <h3 className="text-xl my-1 md:text-2xl text-center h-full">
                {item?.title}
              </h3>

              <button onClick={()=>setOpen(!open)} className="my-3 text-xl bg-red-700 text-white px-10 py-2 rounded-lg hover:bg-red-800 ">
                Get Quote
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="px-5 py-2 md:py-20 lg:px-24 bg-white flex flex-col items-center lg:py-3">
        <div className="text-center mb-4 md:mb-8">
          <h2 className="text-4xl md:text-5xl font-bebas text-gray-900 md:mb-1 tracking-wide">
            Why Choose Matrix Tissue
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-red-700 mb-2">
            Premium Facial Tissue, Trusted Quality
          </p>
          <p className="max-w-4xl text-gray-600 text-lg md:text-xl leading-6 md:leading-7">
            At Matrix Tissue, we go beyond just manufacturing facial tissue. We
            are committed to delivering exceptional value through quality,
            consistency, and a customer-first approach, making us a reliable
            facial tissue supplier in Delhi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-7xl">
          {whyChooseUs.map((feature, index) => (
            <div
              key={index}
              className="p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* ICON + TITLE SAME LINE */}
              <div className="flex items-center gap-3 mb-3">
                <div className="p-1 bg-white rounded-full shadow-sm">
                  {feature.icon}
                </div>

                <h4 className="text-[23px] md:text-xl font-bold text-gray-900">
                  {feature.title}
                </h4>
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-600 leading-5 md:leading-7 text-sm md:text-base">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* cta section  */}
      <section className="relative w-full py-9 md:py-32 flex items-center justify-center overflow-hidden lg:py-6">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/products/FT7-1-1.webp"
            alt="Premium Facial Tissue"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-red-900/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-5 max-w-5xl text-white">
          <h2 className="text-4xl md:text-7xl font-bebas mb-2 md:mb-4  drop-shadow-md">
            Searching for the Best Facial Tissue in Delhi?
          </h2>
          <p className="text-lg md:text-3xl mb-3 md:mb-6 font-medium text-gray-100 max-w-3xl mx-auto">
            Connect with Matrix Tissue for premium quality, competitive pricing,
            and reliable bulk supply.
          </p>
          <button onClick={()=>setOpen(!open)} className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded-xl text-xl md:text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
            Get Free Quote
          </button>
        </div>
      </section>

      {/* why Buyer choose matrix tissue  */}
      <section className="px-5 py-4 md:py-20 lg:px-24 bg-gray-50 flex flex-col items-center lg:py-6">
        <h2 className="text-4xl md:text-5xl font-bebas text-gray-900 mb-4 md:mb-7 text-center tracking-wide">
          Why Buyers Choose Matrix Tissue
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 w-full max-w-7xl">
          {whyBuyersChoose.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              {/* ICON + TITLE */}
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-red-50 p-1 rounded-full group-hover:bg-red-100 transition-colors">
                  {item.icon}
                </div>

                <h3 className="font-bold text-gray-900 text-[23px] md:text-lg">
                  {item.title}
                </h3>
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-sm md:text-base leading-5 md:leading-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Also avaiable on  */}
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

      {/* premium facial tissue collection  */}
      <section className="px-5  md:py-20 lg:px-24 bg-gray-50 flex flex-col items-center lg:py-6">
        

        <div className="bg-[##f9fafb]  py-6 md:py-8 px-4 md:px-10">
      
      {/* 🔥 TITLE */}
      <h2 className="text-5xl md:text-6xl font-light text-center text-purple-700 mb-10">
        Premium Selections
      </h2>

      {/* 🔥 GRID */}
      <div className="grid grid-cols-2  lg:grid-cols-4 gap-3 md:gap-8 max-w-7xl mx-auto">
        
        {featuredproducts.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center gap-1 md:gap-4">
            
            {/* IMAGE */}
            <div className="w-[110px] h-[100px] rounded-xl overflow-hidden shadow-md">
              <Image
                src={item.img}
                alt={item.name}
                width={90}
                height={100}
                className="w-full h-full md:w-full md:h-full object-cover"
              />
            </div>

            {/* TEXT */}
            <p className="text-xl text-center md:text-start md:text-xl text-gray-800 leading-tight">
              {item.name}
            </p>

          </div>
        ))}

      </div>
    </div>
        {/* Bulk Supply CTA */}
        <div className=" mt-4 md:mt-8 w-full max-w-5xl bg-gradient-to-r from-red-700 to-red-900 rounded-3xl p-6 md:p-8 text-center text-white shadow-xl">
          <h3 className="text-3xl md:text-5xl font-bebas mb-2 md:mb-3 tracking-wide">
            Need Bulk Facial Tissue Supply?
          </h3>
          <p className="text-lg md:text-xl leading-6 md:leading-7 mb-2 md:mb-7 text-red-50 max-w-3xl mx-auto">
            Partner with a reliable facial tissue manufacturer in Delhi NCR for
            consistent quality and timely delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={()=>setOpen(!open)} className="w-full sm:w-auto bg-white text-red-700 font-bold py-3 px-7 rounded-xl text-lg hover:bg-gray-100 transition-colors shadow-lg">
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
      

      {/* testimonial section  */}
      <section className="px-5 py-5 md:py-20 lg:px-24 bg-white flex flex-col items-center lg:py-6">
        <h2 className="text-3xl md:text-5xl font-bebas text-gray-900 mb-4 md:mb-8 text-center tracking-wide">
          What Our Clients Say
        </h2>

        <div className=" w-full max-w-7xl mx-auto px-4">
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
            {[
              {
                quote:
                  "Matrix Tissue is a highly reliable facial tissue supplier in Delhi. The quality is consistently soft and perfect for our daily office use.",
                author: "Corporate Client",
              },
              {
                quote:
                  "We’ve been sourcing bulk facial tissue for our hotel chain, and their service is always on time with excellent pricing.",
                author: "Hotel Manager",
              },
              {
                quote:
                  "One of the best facial tissue manufacturers in Delhi NCR. The products are hygienic and ideal for healthcare environments.",
                author: "Hospital Administrator",
              },
              {
                quote:
                  "Their customized facial tissue packaging helped us build our brand presence. Highly professional team.",
                author: "Retail Distributor",
              },
              {
                quote:
                  "Premium quality facial tissue with great absorbency. Truly a dependable supplier for bulk requirements.",
                author: "Business Owner",
              },
              {
                quote:
                  "Fast delivery and consistent quality make Matrix Tissue our go-to facial tissue supplier in Delhi.",
                author: "Office Admin",
              },
              {
                quote:
                  "Soft, skin-friendly facial tissue products that meet our salon’s hygiene standards perfectly.",
                author: "Salon Owner",
              },
              {
                quote:
                  "Affordable pricing with top-notch quality. One of the most trusted facial tissue suppliers we’ve worked with.",
                author: "Wholesale Buyer",
              },
            ].map((item, index) => (
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
      <section className="px-5 py-4 md:py-20 lg:px-24 bg-gray-50 flex flex-col items-center lg:py-6">
        <h2 className="text-4xl md:text-5xl font-bebas text-gray-900 mb-4 md:mb-8  text-center tracking-wide">
          Frequently Asked Questions – Face Tissue
        </h2>

        <div className="w-full max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 md:p-5 text-left hover:bg-red-50/30 transition-colors"
                >
                  <span className="font-bold text-gray-900 leading-6 text-lg md:text-xl pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-red-600 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-5 md:p-5 pt-0 text-gray-600 leading-5 md:leading-6 text-base md:text-lg border-t border-gray-100">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Inquiry Form Section */}
     
     
    </div>
    </>
 
  );
};

export default Home;