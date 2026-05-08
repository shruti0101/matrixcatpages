"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";

const Form = ({ setOpen }) => {

  const [name,setName]=useState("")
  const [phone,setPhone]=useState("")
  const [email,setEmail]=useState("")
  const [product,setProduct]=useState("")
  const [message,setMessage]=useState("")
  const [loading,setLoading]=useState(false)
  
  

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      setLoading(true)
      const formData = {
        platform: "Matrix Tissue category citypage",
        platformEmail: "matrixtissues@gmail.com",
        name,
        phone,
        email,
        place: "N/A",
        product,
        message,
      };

      const {data}=await axios.post("https://brandbnalo.com/api/form/add", formData);

      if(data?.success){
         const whatsappText = `Hi, I am ${name}.
          Email: ${email}
          Requirements: ${product}

          Message: ${message}

          Phone: ${phone}`;

         const waUrl = `https://wa.me/+918810540823?text=${encodeURIComponent(
          whatsappText
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
      setLoading(false)
      console.log("all good");

      setOpen(false)
    }catch(err){
      console.log(err);
    }finally{
      setLoading(false); 
    }
  }



  return (
    <div onClick={(e)=>e.stopPropagation()} className="fixed inset-0 flex items-center justify-center z-100 bg-black/40 backdrop-blur-sm px-4">
      <form onSubmit={handleSubmit} className="relative w-full max-w-md  bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-3 flex flex-col text-base text-slate-800 ">
        {/* ❌ Close Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          <X size={22} />
        </button>

        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold pb-1 text-center">
            Let’s Get In Touch.
          </h1>

          {/* <p className="text-gray-600 pb-4 text-center text-md  ">
            Or just reach out manually to{" "}
            <span className="text-red-600 font-medium">Matrix Tissue</span>
          </p> */}
        </div>

        <div className="w-full">
          {/* NAME */}
          <label className="font-medium text-md">Full Name</label>
          <div className="mt-1 mb-2 h-9 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-red-400 flex items-center">
            <input
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="w-full bg-transparent outline-none text-sm px-2"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* PHONE */}
          <label className="font-medium text-md">Phone Number</label>
          <div className="mt-1 mb-2 h-9 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-red-400 flex items-center">
            <input
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
              type="tel"
              inputMode="numeric"
              maxLength={10}
              onInput={(e) => {
                e.target.value = e.target.value
                  .replace(/[^0-9]/g, "") // remove alphabets & symbols
                  .slice(0, 10); // limit to 10 digits
              }}
              className="w-full bg-transparent outline-none text-sm px-2"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* EMAIL */}
          <label className="font-medium text-md">Email Address</label>
          <div className="mt-1 mb-2 h-9 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-red-400 flex items-center">
            <input
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              type="email"
              className="w-full bg-transparent outline-none text-sm px-2"
              placeholder="Enter your email address"
              required
            />
          </div>

          {/* REQUIREMENTS */}
          <label className="font-medium text-md">Requirements</label>
          <div className="mt-1 mb-2 h-9 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-red-400 flex items-center">
            <input
              value={product}
              onChange={(e)=>setProduct(e.target.value)}
              type="text"
              className="w-full bg-transparent outline-none text-sm px-2"
              placeholder="Enter your requirement"
              required
            />
          </div>

          {/* MESSAGE */}
          <label className="font-medium text-md">Message</label>
          <textarea
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            rows="3"
            className="w-full mt-1 p-2 bg-transparent border border-slate-300 rounded-lg resize-none outline-none focus:ring-2 focus:ring-red-400 text-sm"
            placeholder="Enter your message"
            required
          ></textarea>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 w-full rounded-full text-base font-medium transition"
          >
            {loading?"Submitting Form":"Submit Form"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
