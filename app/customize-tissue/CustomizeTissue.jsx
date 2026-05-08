"use client";

import { useState } from "react";
import {
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
} from "lucide-react";

import {
  allProduct,
  products,
  whyChooseUs,
  whyBuyersChoose,
  faqs,
  productsCustomizeTissue,
  allProductCustomizeTissue,
  whyChooseUsCustmizeFaceTissue,
  premiumCustomizedFacialTissue,
  testimonialCustomerTissue,
  testimonialsData,
  faqsCustomizeFaceTissue
} from "@/data";
import {
  BookCheck,
  ChevronDown,
  IndianRupee,
  MousePointerClick,
  Package,
  Quote,
  Wind,
} from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Form from "../components/Form";
import EnquiryForm from "../components/EnquiryForm";
import { useParams, usePathname } from "next/navigation";

const CustomizeTissue = () => {

  const path = usePathname();
  const totalwords = path.split("/")[1].split("-");

  

  const [activeIndex, setActiveIndex] = useState(null);
  const [open, setOpen] = useState(null);

  const exploreLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us/" },
    { label: "Our Products", href: "/our-products/" },
    { label: "Blog", href: "/blog/" },
    { label: "Career", href: "/career/" },
    { label: "Contact Us", href: "/contact-us/" },
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Terms & Conditions", href: "/terms-and-conditions/" },
    { label: "Shipping Policy", href: "/shipping-policy/" },
    { label: "Return & Refund Policy", href: "/return-refund-policy/" },
  ];

  const productLinks = [
    { label: "Face Tissue", href: "/product-category/face-tissue/" },
    { label: "Paper Napkin", href: "/product-category/paper-napkin/" },
    { label: "Kitchen Towel", href: "/product-category/kitchen-towel/" },
    { label: "Toilet Roll", href: "/product-category/toilet-roll/" },
    { label: "Butter Paper", href: "/product-category/butter-paper/" },
    { label: "Cling Film", href: "/product-category/cling-film/" },
    { label: "Aluminium Foil", href: "/product-category/aluminium-foil/" },
  ];

  const recentPhotos = [
    { src: "/recent/recent1.webp" },
    { src: "/recent/recent2.webp" },
    { src: "/recent/recent3.webp" },
    { src: "/recent/recent4.webp" },
    { src: "/recent/recent5.webp" },
    { src: "/recent/recent6.webp" },
  ];

  const cities = [
    "Delhi",
    "Delhi NCR",
    "Gurgaon",
    "Faridabad",
    "Ghaziabad",
    "Noida",
    "Lucknow",
    "Varanasi",
    "Hyderabad",
    "Bengaluru",
    "Chennai",
    "Kolkata",
    "Surat",
    "Rajkot",
    "Jodhpur",
    "Jaipur",
    "Haridwar",
    "Panipat",
    "Sonipat",
    "Karnal",
    "Mohali",
    "Patiala",
    "Bahadurgarh",
    "Allahabad",
  ];

  const bottomLinks = [
    { label: "Privacy Policy", href: "/privacy-policy/" },
    { label: "Terms & Conditions", href: "/terms-and-conditions/" },
    { label: "Shipping Policy", href: "/shipping-policy/" },
    { label: "Return & Refund", href: "/return-refund-policy/" },
  ];

  return (
    <>
      {open && <Form setOpen={setOpen} />}

      <div>
        {/* hero done */}
        <section className="bg-[#F2A99B] flex flex-col gap-1 items-center px-2 py-5 lg:py-5">
          <p className="font-bebas text-3xl text-white md:text-4xl">
            Need Customized
          </p>
          <p className="font-teko text-4xl text-white md:text-6xl">
            Face Tissue & Paper Napkins?
          </p>
          <p className="font-open text-center leading-5 md:leading-7 text-white md:text-xl ">
            Boost your brand visibility with premium quality customized tissue
            products designed for hotels, restaurants, cafes, corporates &
            events.
          </p>
          <p className="font-open text-center leading-5 md:leading-7 text-white md:text-xl ">
            Get high-quality soft tissue with your brand logo, design &
            packaging printed to perfection.
          </p>

          <div className="grid grid-cols-3 mt-5 gap-2 text-white md:gap-8 md:mt-6">
            <div className="flex flex-col items-center gap-1 ">
              <MousePointerClick className="md:h-9 md:w-9" />
              <p className="md:text-xl text-center">
                CUSTOM BRAND PRINTING AVAILABLE
              </p>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <Wind className="md:h-9 md:w-9" />
              <p className="md:text-xl text-center">
                PREMIUM SOFT QUALITY MATERIAL
              </p>
            </div>
            <div className="flex flex-col items-center gap-1 ">
              <Package className="md:h-9 md:w-9" />
              <p className="md:text-xl text-center">BULK & WHOLESALE SUPPLY</p>
            </div>
          </div>

          <div className="flex gap-5 mt-3 md:gap-14 pb-4">
            <button
              onClick={() => setOpen(!open)}
              className="bg-red-500 hover:bg-red-600 px-5 py-1 rounded text-white text-xl md:scale-115"
            >
              Request Quote
            </button>
            <a
              href="tel:8810540823"
              className="bg-red-400 hover:bg-red-500 px-5 py-1 rounded text-white text-xl md:scale-115"
            >
              Call Now
            </a>
          </div>
        </section>

        {/* product section done */}
        <section className="px-3 py-4 md:py-14 lg:px-20 flex flex-col items-center lg:py-5">
          <p className="text-3xl md:text-5xl font-bebas text-gray-900 mb-1 md:mb-6 text-center tracking-wide">
            Send Your Enquiry Directly to Matrix Tissue
          </p>
          <div className="grid grid-cols-2 gap-2 mt-1 md:grid-cols-4 lg:gap-3">
            {productsCustomizeTissue.map((item, idx) => (
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
                <h3 className="text-xl my-1 md:text-2xl text-center ">
                  {item?.title}
                </h3>
                <p className="px-2 md:text-md font-open text-center h-full">
                  {item?.desc}
                </p>

                <button
                  onClick={() => setOpen(!open)}
                  className="my-3 bottom-2 text-xl bg-red-700 text-white px-10 py-2 rounded-lg hover:bg-red-800"
                >
                  Get Quote
                </button>
              </div>
            ))}
          </div>

          <a
            href="https://matrixtissues.com/product-category/customize/"
            className="mb:mt-7 mt-4 bg-red-700 text-white px-8 py-2 rounded text-xl md:scale-110 lg:px-20 lg:text-2xl"
          >
            SHOW MORE
          </a>
        </section>

        {/* para section done */}
        <section className="px-5 py-5 md:py-20 lg:px-24 bg-gray-50 flex flex-col items-center lg:py-6">
          <h1 className="text-3xl md:text-5xl font-bebas text-gray-900 mb-6 text-center tracking-wide">
            Leading Customized Facial Tissue & Paper Napkins Manufacturer
          </h1>
          <div className="max-w-5xl text-center space-y-4">
            <p className="text-lg md:text-xl  md:leading-7 text-gray-700 leading-6">
              Matrix Tissue, established in 2008 under the visionary leadership
              of Mr. Praveen Bhagwat, has grown into a trusted name in the
              tissue industry. We specialize in premium-quality customized
              facial tissues and paper napkins designed to enhance brand
              identity while maintaining superior softness, strength, and
              hygiene.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-6 md:leading-7">
              Today, we are recognized as a reliable customized tissue
              manufacturer in Delhi, offering tailored solutions for hotels,
              restaurants, corporates, events, and retail brands. Our customized
              facial tissue and paper napkin range is crafted to deliver both
              functionality and premium presentation, making every product a
              reflection of your brand.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-6 md:leading-7">
              With strong industry expertise, Matrix Tissue has become a
              dependable customized tissue supplier in Delhi, serving both bulk
              and wholesale requirements. We focus on delivering innovative,
              high-quality, and fully branded tissue solutions that meet modern
              hygiene and marketing needs. Our commitment to excellence makes us
              a preferred choice for businesses looking for customized facial
              tissue and paper napkins in Delhi.
            </p>
          </div>
        </section>

        {/* fouth section done */}
        <section className="px-3 py-4 md:py-14 lg:px-20 flex flex-col items-center lg:py-5">
          <p className="text-3xl md:text-5xl font-bebas text-gray-900  md:mb-2 text-center tracking-wide">
            Extensive Range of Premium Tissue & Napkin Products
          </p>
          <div className="grid grid-cols-2 gap-2 mt-5 md:grid-cols-4 lg:gap-6">
            {allProductCustomizeTissue.map((item, idx) => (
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
                <h3 className="text-xl my-2 md:text-2xl text-center">
                  {item?.title}
                </h3>

                <button
                  onClick={() => setOpen(!open)}
                  className="my-4 text-xl bg-red-700 text-white px-10 py-2 rounded-lg hover:bg-red-800 "
                >
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 py-5 md:py-20 lg:px-24 bg-gray-50 flex flex-col items-center lg:py-6">
          <h2 className="text-3xl md:text-5xl font-bebas text-gray-900 mb-2 md:mb-4 text-center tracking-wide">
            Customized Tissue Gifting Collection
          </h2>

          <p className="text-gray-600 text-center max-w-3xl mb-10 text-base md:text-lg leading-5 md:leading-6">
            Explore Our Premium Gifting Range of Customized Tissue Products.
            Make your gifting stand out with our specially curated range of
            customized facial tissues and paper napkins, designed to combine
            elegance, utility, and brand visibility.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 w-full max-w-7xl">
            {/* 1 */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-all group cursor-pointer">
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-red-700 transition-colors">
                  Corporate Gift Tissue Boxes
                </h3>
                <p className="text-gray-600 text-sm leading-5 md:leading-6 mb-4 md:text-lg">
                  Premium facial tissue boxes with custom logo printing—perfect
                  for corporate hampers, client gifting, and brand promotions.
                </p>
              </div>
              <a
                href="https://matrixtissues.com/product-category/customize/"
                className="text-red-600 font-semibold text-sm inline-flex items-center gap-1"
              >
                View Details →
              </a>
            </div>

            {/* 2 */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-all group cursor-pointer">
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-red-700 transition-colors">
                  Luxury Printed Facial Tissue Packs
                </h3>
                <p className="text-gray-600 text-sm leading-5 md:leading-6 mb-4 md:text-lg">
                  High-end customized tissue packs with elegant designs and
                  superior softness—ideal for premium gifting.
                </p>
              </div>
              <a
                href="https://matrixtissues.com/product-category/customize/"
                className="text-red-600 font-semibold text-sm inline-flex items-center gap-1"
              >
                View Details →
              </a>
            </div>

            {/* 3 */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-all group cursor-pointer">
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-red-700 transition-colors">
                  Festive Gifting Tissue Packs
                </h3>
                <p className="text-gray-600 text-sm leading-5 md:leading-6 mb-4 md:text-lg">
                  Specially designed tissue packs for festive hampers like
                  Diwali, New Year, and corporate celebrations.
                </p>
              </div>
              <a
                href="https://matrixtissues.com/product-category/customize/"
                className="text-red-600 font-semibold text-sm inline-flex items-center gap-1"
              >
                View Details →
              </a>
            </div>

            {/* 4 */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-all group cursor-pointer">
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-red-700 transition-colors">
                  Customized Paper Napkins for Events
                </h3>
                <p className="text-gray-600 text-sm leading-5 md:leading-6 mb-4 md:text-lg">
                  Branded paper napkins designed for weddings, parties, and
                  corporate events to enhance presentation and branding.
                </p>
              </div>
              <a
                href="https://matrixtissues.com/product-category/customize/"
                className="text-red-600 font-semibold text-sm inline-flex items-center gap-1"
              >
                View Details →
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="px-5 py-6 md:py-20 lg:px-24 bg-white flex flex-col items-center lg:py-5">
          <div className="text-center mb-5 md:mb-12">
            <h2 className="text-4xl md:text-5xl font-bebas text-gray-900 mb-1 tracking-wide">
              Why Choose Matrix Tissue
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-red-700 mb-5 leading-5 md:leading-6">
              Premium Customized Tissue & Napkin Solutions You Can Trust
            </p>
            <p className="max-w-4xl text-gray-600 text-lg md:text-xl leading-6">
              At Matrix Tissue, we go beyond manufacturing—we deliver complete
              customized tissue solutions that help elevate your brand identity.
              With a strong focus on quality, customization, and customer
              satisfaction, we are a trusted customized facial tissue and paper
              napkin supplier in Delhi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full max-w-7xl">
            {whyChooseUsCustmizeFaceTissue.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-2 p-2 bg-white rounded-full shadow-sm">
                  {feature.icon}
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-5 md:leading-6 md:text-xl">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* cta  */}
        <section className="px-5  md:py-20 lg:px-24 bg-gray-50 flex flex-col items-center lg:py-6">
          <div className="mt-7 w-full max-w-5xl bg-gradient-to-r from-red-700 to-red-900 rounded-3xl p-8 md:p-10 text-center text-white shadow-xl">
            <h3 className="text-4xl md:text-5xl font-bebas mb-2 tracking-wide">
              Looking for the Best Customized Facial Tissue & Paper Napkins?
            </h3>
            <p className="text-lg md:text-xl mb-3 md:mb-6 text-red-50 max-w-3xl mx-auto leading-6 md:leading-6">
              Connect with Matrix Tissue for premium quality customized
              products, attractive branding options, competitive pricing, and
              reliable bulk supply across Delhi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setOpen(true)}
                className="w-full sm:w-auto bg-white text-red-700 font-bold py-3 px-10 rounded-xl text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get Free Quote
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

        {/* cta section  */}
        {/* <section className="relative w-full py-20 md:py-32 flex items-center justify-center overflow-hidden lg:py-8">
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
          <h2 className="text-4xl md:text-7xl font-bebas mb-6 tracking-wider drop-shadow-md">
            Searching for the Best Facial Tissue in Delhi?
          </h2>
          <p className="text-lg md:text-3xl mb-10 font-medium text-gray-100 max-w-3xl mx-auto">
            Connect with Matrix Tissue for premium quality, competitive pricing,
            and reliable bulk supply.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded-xl text-xl md:text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
            Get Free Quote
          </button>
        </div>
      </section> */}

        {/* why Buyer choose matrix tissue done */}
        <section className="px-5 py-5 md:py-20 lg:px-24 bg-gray-50 flex flex-col items-center lg:py-5">
          <h2 className="text-3xl md:text-5xl font-bebas text-gray-900 mb-6 text-center tracking-wide">
            Why Buyers Choose Matrix Tissue (Customized Tissue & Napkins)
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 w-full max-w-7xl">
            {whyBuyersChoose.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
              >
                {/* ICON + TITLE */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-red-50 p-1 rounded-full group-hover:bg-red-100 transition-colors">
                    {item.icon}
                  </div>

                  <h3 className="font-bold text-gray-900 text-xl md:text-lg">
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

        {/* Also avaiable on done */}
        <section className="px-5 py-6 md:py-20 lg:px-24 bg-white flex flex-col items-center lg:py-8">
          <div className="text-center ">
            <h2 className="text-5xl md:text-5xl font-bebas text-gray-900  mb-3 tracking-wide">
              Also Available On
            </h2>
            <p className="text-xl md:text-2xl leading-6 md:leading-7 font-semibold text-red-700 mb-5">
              Matrix Tissue is proudly listed on leading B2B platforms, making
              it easier for buyers to connect with a trusted facial tissue
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
        <section className="px-5 py-6 md:py-20 lg:px-24 bg-gray-50 flex flex-col items-center lg:py-6">
          <h2 className="text-3xl md:text-5xl font-bebas text-gray-900 mb-6 text-center tracking-wide">
            Premium Customized Facial Tissue & Paper Napkin Collection
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 w-full max-w-7xl">
            {premiumCustomizedFacialTissue.map((item, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-all group cursor-pointer"
              >
                <div>
                  <h3 className="font-bold text-gray-900 text-xl mb-1 group-hover:text-red-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-6 mb-2 md:mb-4 md:text-lg">
                    {item.desc}
                  </p>
                </div>
                <a
                  href="https://matrixtissues.com/product-category/customize/"
                  className="text-red-600 font-semibold text-sm inline-flex items-center gap-1"
                >
                  View Collection →
                </a>
              </div>
            ))}
          </div>

          {/* Bulk Supply CTA */}
          <div className="mt-5 md:mt-16 w-full max-w-5xl bg-gradient-to-r from-red-700 to-red-900 rounded-3xl p-8 md:p-9 text-center text-white shadow-xl">
            <h3 className="text-4xl md:text-5xl font-bebas mb-4 tracking-wide">
              Need Bulk Customize Tissue Supply?
            </h3>
            <p className="text-lg md:text-xl mb-6 text-red-50 max-w-3xl mx-auto leading-5 md:leading-6">
              Partner with a reliable facial tissue manufacturer in Delhi NCR
              for consistent quality and timely delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setOpen(!open)}
                className="w-full sm:w-auto bg-white text-red-700 font-bold py-3 px-10 rounded-xl text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
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

        {/* testimonial section done */}
        <section className="px-5 py-2 md:py-20 lg:px-24 bg-white flex flex-col items-center lg:py-6">
          <h2 className="text-3xl md:text-5xl font-bebas text-gray-900 mb-4 md:mb-8 text-center tracking-wide">
            What Our Clients Say
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
              {testimonialsData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white rounded-3xl border border-gray-200 p-6 h-[280px] flex flex-col justify-between shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="text-5xl text-red-500 leading-none">“</div>

                    {/* TITLE */}
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mt-2 line-clamp-2">
                      {item.title}
                    </h3>

                    {/* REVIEW */}
                    <p className="text-gray-600 text-sm md:text-base leading-6 mt-3 line-clamp-5">
                      {item.review}
                    </p>

                    {/* AUTHOR */}
                    <div className="border-t pt-4 mt-4">
                      <p className="text-sm font-medium text-red-600">
                        — {item.author}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Faq section done */}
        <section className="px-5 py-6 md:py-20 lg:px-24 bg-gray-50 flex flex-col items-center lg:py-8">
          <h2 className="text-3xl md:text-5xl font-bebas text-gray-900 mb-5 md:mb-8 text-center tracking-wide">
            Frequently Asked Questions – Customized Face Tissue & Paper Napkin
          </h2>

          <div className="w-full max-w-4xl space-y-4">
            {faqsCustomizeFaceTissue.map((faq, index) => {
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
                    <span className="font-bold text-gray-900 text-lg md:text-xl pr-4 leading-6 md:leading-6">
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
                    <div className="p-5 md:p-5 pt-0 text-gray-600 leading-6 text-base md:text-lg border-t border-gray-100">
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

export default CustomizeTissue;
