import React, { useState, useRef, useEffect } from "react";
import logo from "../../assets/images/logo.webp";
import { Line, PhoneIcon, WhatsAppIcon } from "../../assets/icons/Icons";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navRef = useRef(null);
  const lineRef = useRef(null);
  const location = useLocation();

  const resetLineToActive = () => {
    const activeItem = navRef.current?.querySelector(".active-link");
    if (activeItem) moveLine(activeItem);
  };

  const moveLine = (el) => {
    if (!el || !lineRef.current || !navRef.current) return;

    const navRect = navRef.current.getBoundingClientRect();
    const rect = el.getBoundingClientRect();

    const centerX = rect.left - navRect.left + rect.width / 2;
    lineRef.current.style.transform = `translateX(${centerX}px) translateX(-50%)`;
  };

  useEffect(() => {
    const activeItem = navRef.current?.querySelector(".active-link");
    if (activeItem) moveLine(activeItem);
  }, [location.pathname]);

  return (
    <div className="bg-[#1C4746] text-white shadow-[0px_4px_6px_-2px_rgba(237,237,237,0.15)] relative z-50">

      {/* ================= TOP BAR ================= */}
      <div className="hidden md:flex justify-between items-center poppins font-semibold text-[14px] leading-3.5 tracking-[0.05em] pt-5 pb-2 px-6 sm:px-10 lg:px-16 xl:px-[90px]">
        <p>Professional Tax, Finance & Legal Services</p>

        <div className="flex items-center gap-[29px]">
          <a href="tel:+917708566732"
            aria-label="Call us" className="flex items-center text-[12px] gap-3">
            <PhoneIcon />
            7708566732
          </a>

          <a href="https://wa.me/917708566732?text=Hello%20I%20would%20like%20to%20know%20more"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp" className="flex items-center text-[12px] bg-white text-[#1c4746] rounded-[20px] py-[7px] px-5 gap-3">
            <WhatsAppIcon />
            Whatsapp
          </a>
        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <div className="flex justify-between items-center px-6 sm:px-10 lg:px-16 xl:px-[90px] py-3">
        <Link to='/'>
          <img className="w-[92px] h-[61px]" src={logo} alt="Logo" />
        </Link>
        {/* ================= DESKTOP MENU ================= */}
        <div className="relative hidden md:block">
          <ul
            ref={navRef}
            onMouseLeave={resetLineToActive}
            className="flex items-center gap-[92px] space-grotesk font-light md:text-[17px] lg:text-[20px] leading-5 tracking-[0.03em]">
            {["/", "/about", "/services", "/contact"].map((path, i) => {
              const labels = ["Home", "About", "Services", "Contact"];
              return (
                <li key={path}>
                  <NavLink
                    to={path}
                    end={path === "/"}
                    className={({ isActive }) =>
                      `cursor-pointer pb-[10px] ${isActive ? "active-link font-bold" : ""}`
                    }
                    onMouseEnter={(e) => moveLine(e.target)}
                  >
                    {labels[i]}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <div
            ref={lineRef}
            className="absolute -bottom-3 transition-all duration-300 ease-in-out"
          >
            <Line />
          </div>
        </div>

        {/* ================= MOBILE TOGGLE ================= */}
        <button onClick={() => setOpen(!open)} className="md:hidden z-50">
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* ================= OVERLAY ================= */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setOpen(false)}
      />

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-[#1C4746] px-6 py-10 space-y-6 space-grotesk text-[20px] tracking-[0.03em] transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {["/", "/about", "/services", "/contact"].map((path, i) => {
          const labels = ["Home", "About", "Services", "Contact"];
          return (
            <Link key={path} to={path} onClick={() => setOpen(false)}>
              <p className="border-b border-white/20 mb-10">{labels[i]}</p>
            </Link>
          );
        })}

        {/* MOBILE CONTACT */}
        <div className="pt-6 flex flex-col gap-10 poppins text-[20px]">
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
