import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, ChevronDown } from "lucide-react";
import { homeNav, othersNav } from "../Data/navigation";

export default function Navbar({ data }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { text, logo, logoscroll, link_color, btn_color, btn_text } = data;

  const location = useLocation();
  const navlinks = location.pathname === "/" ? homeNav : othersNav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#ffffffb3] shadow-md backdrop-blur-md"
          : `sm:bg-transparent ${location.pathname === "/" ? "bg-martex-brand" : "bg-white"}`
      }`}
    >
      <nav
        className={`flex items-center justify-between px-6 mx-auto transition-all duration-300 max-w-6xl lg:px-5 ${
          scrolled ? "py-5 sm:py-5" : "py-7"
        }`}
      >
        {/* Logo */}
        <Link to="/">
          <img
            src={scrolled ? logoscroll : logo}
            alt="logo"
            className="h-8 xl:h-10"
          />
        </Link>

        {/* Desktop Menu */}
        <div
          className={`hidden lg:flex gap-x-10 transition-all duration-300 lg:justify-end lg:w-[53%] ${
            scrolled ? "text-martex-dark_text" : `${link_color}`
          }`}
        >
          {navlinks.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="text-base xl:text-[19px] font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="items-center hidden gap-4 lg:flex">
          <Link
            to="/login"
            className={`font-semibold text-base xl:text-lg ${
              scrolled ? "text-martex-dark_text" : `${text}`
            }`}
          >
            Sign in
          </Link>
          <Link to="/signup">
            <button
              className={`px-5 xl:px-6 text-base xl:text-lg py-1  border-2 text-white ${btn_color} rounded-[6px]  transition-all duration-300
              
              ${location.pathname === "/" ? (scrolled ? "border-martex-light_pink hover:border-martex-dark_text hover:text-martex-dark_text hover:bg-transparent" : "border-martex-light_pink hover:border-white hover:bg-transparent") : "hover:bg-martex-dark_blue hover:border-martex-dark_blue border-martex-light_blue"}
              `}
            >
              {btn_text}
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`text-2xl lg:hidden ${
            scrolled
              ? `text-martex-light_text`
              : location.pathname === "/"
                ? "text-white"
                : "text-martex-light_text"
          }`}
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-white transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close */}
        <div className="flex items-center p-5 border-b">
          <button onClick={() => setOpen(false)}>
            <X size={26} className="text-martex-light_text" />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col font-medium divide-y text-martex-dark_text">
          <div className="flex items-center justify-between p-5">
            <span>About</span>
            <ChevronDown size={18} />
          </div>

          <div className="p-5 text-gray-400 bg-gray-100">Features</div>

          <div className="flex items-center justify-between p-5">
            <span>Pages</span>
            <ChevronDown size={18} />
          </div>

          <Link to="#" className="p-5">
            Pricing
          </Link>

          <Link to="#" className="p-5">
            FAQs
          </Link>

          <Link to="#" className="p-5">
            Sign in
          </Link>

          {/* Sign up button */}
          <button className="p-5 font-semibold text-left text-white bg-pink-500">
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}
