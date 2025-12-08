import React, { useState } from "react";
import logo from "../../assets/images/logo.webp";
import { PhoneIcon, WhatsAppIcon } from "../../assets/icons/Icons";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#1C4746] text-white shadow-[0px_4px_6px_-2px_rgba(237,237,237,0.15)] relative z-50">

      <div className="hidden md:flex justify-between items-center poppins font-semibold text-[14px] leading-[14px] tracking-[0.05em] pt-5 pb-2 px-6 sm:px-10 lg:px-16 xl:px-[90px]">
        <p>Professional Tax, Finance & Legal Services</p>

        <div className="flex items-center gap-[29px]">
          <button className="flex items-center text-[12px] leading-[14px] tracking-[0.05em] gap-3">
            <PhoneIcon />
            7708566732
          </button>

          <button className="flex items-center text-[12px] leading-[14px] tracking-[0.05em] bg-white text-[#1c4746] rounded-[20px] py-[7px] px-5 gap-3">
            <WhatsAppIcon />
            Whatsapp
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center px-6 sm:px-10 lg:px-16 xl:px-[90px] py-3">
        {/* LOGO */}
        <img className="w-[92px] h-[61px]" src={logo} alt="Logo" />

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-[92px] space-grotesk font-light md:text-[17px]  lg:text-[20px] leading-5 tracking-[0.03em]">
          <li className="cursor-pointer hover:text-gray-300 transition">Home</li>
          <li className="cursor-pointer hover:text-gray-300 transition">About</li>
          <li className="cursor-pointer hover:text-gray-300 transition">Services</li>
          <li className="cursor-pointer hover:text-gray-300 transition">Contact</li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden z-50"
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-[#1C4746] px-6 py-10 space-y-6 space-grotesk text-[20px] tracking-[0.03em] transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <p className="border-b border-white/20 pb-2">Home</p>
        <p className="border-b border-white/20 pb-2">About</p>
        <p className="border-b border-white/20 pb-2">Services</p>
        <p>Contact</p>

        {/* MOBILE CONTACT */}
        <div className="pt-6 flex flex-col gap-4 poppins text-[12px]">
          <button className="flex items-center gap-3">
            <PhoneIcon />
            7708566732
          </button>

          <button className="flex items-center bg-white text-[#1c4746] rounded-[20px] py-[7px] px-5 gap-3 w-fit">
            <WhatsAppIcon />
            Whatsapp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
